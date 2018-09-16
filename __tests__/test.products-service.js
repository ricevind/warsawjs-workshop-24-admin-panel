import productService, {
    setFetcher
} from '../front-end/scripts/services/products-service';
import data from '../back-end/db.json';

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
                global.fetch = jest
                    .fn()
                    .mockReturnValue(
                        Promise.resolve({ json: () => data.products })
                    );
                setFetcher(fetch);
                returnedValue = productService.fetchProducts();
            });

            afterEach(() => {
                productService.flushCache();
                global.fetch = null;
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

            it('promise resolves to data', done => {
                returnedValue.then(returnedData => {
                    expect(returnedData).toEqual(data.products);
                    done();
                });
            });
        });
    });
});
