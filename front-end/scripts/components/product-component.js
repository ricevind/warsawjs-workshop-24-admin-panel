export default class ProductComponent {
    constructor(productInfo) {
        this.productInfo = productInfo;
        this.$html = this.compile(productInfo);
    }

    compile() {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = `
            <span>${this.productInfo.name}</span>
        `;

        return wrapper;
    }

    render(targetElement) {
        return targetElement.appendChild(this.$html);
    }
}
