import productService from './services/products-service';

/** INITS */
function init() {
    productService
        .fetchProducts()
        .then(body => console.log(body));
}

init();
