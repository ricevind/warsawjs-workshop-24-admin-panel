class ProductService {
    api = 'http://localhost:3000';
    defaultCacheValidity = 5000;
    cachedOn = Date.now();
    isCached = false;
    cache = [];

    constructor() {
        this.fetch = fetch;
    }

    fetchProducts() {
        if (typeof this.fetch !== 'function') {
            throw new Error(
                'global fetch is not defined, use setFetcher(fetcher)'
            );
        }
        const url = `${this.api}/products`;

        this.shouldDeValidate(this.defaultCacheValidity);
        if (this.isCached) {
            return Promise.resolve(this.cache);
        }

        const request = fetch(url).then(response => {
            this.cache = response.json();
            this.cachedOn = Date.now();
            return this.cache;
        });

        this.isCached = request;
        return request;
    }

    flushCache() {
        this.isCached = false;
    }

    shouldDeValidate(ms) {
        const diff = Date.now() - this.cachedOn;
        if (diff > ms) {
            this.isCached = false;
        }
    }

    setFetcher(fetcher) {
        this.fetch = fetcher;
    }
}

const instance = new ProductService();

/** Sets fetcher
 * @param { fetcher } fetcher
 * */
export function setFetcher(fetcher) {
    instance.setFetcher(fetcher);
}

export default instance;
