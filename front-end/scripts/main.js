import productService from './services/products-service';

/** INITS */
function init() {
    productService
        .fetchProducts()
        .then(response => response.json())
        .then(body => console.log(body));
}

init();
