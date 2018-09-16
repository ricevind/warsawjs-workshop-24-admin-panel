import ProductComponent from '../front-end/scripts/components/product-component';
import jsdom from 'jsdom';

describe('ProductComponent', () => {
    const product = {
        name: 'trrr',
        description: 'traaaa',
        image: 'llalal'
    };
    let anchor = null;

    beforeAll(() => {
        global.window = new jsdom.JSDOM().window;
        global.document = window.document;
        anchor = document.createElement('div');
    });

    afterAll(() => {
        global.window = null;
        global.document = null;
    });

    it('exists', () => {
        expect(ProductComponent).toBeDefined();
    });

    it('creates component', () => {
        const component = new ProductComponent(product);
        expect(typeof component.render).toBe('function');
    });

    describe('renders component', () => {
        it('', () => {
            const component = new ProductComponent(product);
            component.render(anchor);

            const cardElement = anchor.querySelector('.card');
            expect(cardElement).toBeDefined();
        });
    });
});
