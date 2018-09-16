import ProductComponent from '../components/product-component';

export default class ProductListComponent {
    constructor(products) {
        this.products = products;
        this.$html = this.compile(products);
    }

    compile(products) {
        const wrapper = document.createElement('div');
       
        products.forEach(product => {
            const productComponent = new ProductComponent(product);
            productComponent.render(wrapper);
        });

        return wrapper;
    }

    render(targetElement) {
        return targetElement.appendChild(this.$html);
    }
}
