import ProductListComponent from './components/product-list-component';
import productService from './services/products-service';

const anchor = document.querySelector('#app');

/** INITS */
async function init() {
    const products = await productService.fetchProducts();
    const appComponent = new ProductListComponent(products);
    appComponent.render(anchor);
}

init();
