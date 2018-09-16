export class ProductListComponent {
    constructor(products) {
        this.products = products;
        this.$html = this.compile(products);
    }


}
