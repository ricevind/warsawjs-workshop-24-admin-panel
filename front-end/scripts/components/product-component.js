import Product from './models/product-model';

export default class ProductComponent {
    constructor(productInfo) {
        this.product = new Product(productInfo);
        this.$html = this.compile(productInfo);
    }

    compile() {
        const wrapper = document.createElement('div');
        wrapper.classList.add('card');
        wrapper.classList.add('float-left');
        wrapper.classList.add('m-1');
        wrapper.style.width = '300px';
        wrapper.style.height = '500px';

        wrapper.innerHTML = `
        <img class="card-img-top" src="${this.product.getImage()}" 
                                  alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">${this.product.getName()}</h5>
            <p class="card-text">${this.product.getDescription()}</p>
        </div>
        `;

        return wrapper;
    }

    render(targetElement) {
        return targetElement.appendChild(this.$html);
    }
}
