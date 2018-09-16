import productService from '../front-end/scripts/services/products-service';

describe('ProductsService', () => {
    it('exists', () => {
        expect(productService).toBeDefined();
    });

    describe('Method: fetchProducts', () => {
        it('is function', () => {
            expect(typeof productService.fetchProducts).toBe('function');
        });

        describe('When: called', () => {
            let returnedValue = null;

            beforeEach(async () => {
                global.fetch = jest.fn().mockReturnValue(Promise.resolve());
                returnedValue = productService.fetchProducts();
                console.log(returnedValue)
            });

            it('calls fetch', () => {
                expect(fetch).toHaveBeenCalled();
            });

            it('calls fetch with url', () => {
                const expectedUrl = 'http://localhost:3000/products';
                expect(fetch).toHaveBeenCalledWith(expectedUrl);
            });

            it('returns Promise', () => {
                expect(typeof returnedValue.then).toBe('function');
            });
        });
    });
});
