class ProductService {
    api = 'http://localhost:3000';

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
        return this.fetch(url).then(response => response.json());
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
