import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import api from '../api';

describe('API tests', () => {
  let mock: MockAdapter;

  beforeAll(() => {
    mock = new MockAdapter(api);

    mock.onGet('/products').reply(200, [{id: 1, name: 'Product 1'}]);

    mock.onGet('/product/1').reply(200, {id: 1, name: 'Product 1'});

    mock
      .onGet('/product/non-existent-id')
      .reply(404, {message: 'Product not found'});
  });

  afterAll(() => {
    mock.restore();
  });

  describe('GET /products', () => {
    it('should fetch all products', async () => {
      const response = await api.get('/products');
      expect(response.status).toBe(200);
      expect(response.data).toEqual([{id: 1, name: 'Product 1'}]);
    });
  });

  describe('GET /product/:id', () => {
    it('should fetch a product by id', async () => {
      const response = await api.get('/product/1');
      expect(response.status).toBe(200);
      expect(response.data).toEqual({id: 1, name: 'Product 1'});
    });

    it('should return 404 if the product is not found', async () => {
      try {
        await api.get('/product/non-existent-id');
      } catch (error) {
        if (axios.isAxiosError(error)) {
          expect(error.response?.status).toBe(404);
          expect(error.response?.data).toEqual({message: 'Product not found'});
        }
      }
    });
  });
});
