class ProductService {
    api = 'http://localhost:3000'

    fetchProducts() {
        const url = `${this.api}/products`;
        return fetch(url);
    }
}

export default new ProductService();
