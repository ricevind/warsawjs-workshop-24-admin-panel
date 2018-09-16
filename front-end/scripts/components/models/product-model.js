export default class ProductModel {
    constructor(data) {
        this.name = data.name;
        this.description = data.description;
        this.image = data.image;
    }

    getName() {
        return this.name.slice(0, 20);
    }

    getDescription() {
        return this.description;
    }

    getImage() {
        return this.image;
    }
}
