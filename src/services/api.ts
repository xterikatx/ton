import axios, {AxiosInstance} from 'axios';
import MockAdapter from 'axios-mock-adapter';

const api: AxiosInstance = axios.create({
  baseURL: 'https://testton.test.test.test.co',
});

export const response = [
  {
    name: 'Maquininha T1',
    description: 'À partir de 12x de R$ 8,90',
    image:
      'https://assets.lojastonemais.com.br/images/products/TON_D150/medium.png',
    id: '000199abc1',
  },
  {
    name: 'T1 Chip PromoTon',
    description: 'À partir de 12x de R$ 23,90',
    image:
      'https://assets.lojastonemais.com.br/images/products/TON_T1_CHIP/medium.png',
    id: '000199abc2',
  },
  {
    name: 'T2+ PromoTon',
    description: 'À partir de 12x de R$ 15,90',
    image:
      'https://assets.lojastonemais.com.br/images/products/TON_D195/medium.png',
    id: '000199abc3',
  },
  {
    name: 'T3 PromoTon',
    description: 'À partir de 12x de R$ 32,90',
    image:
      'https://assets.lojastonemais.com.br/images/products/TON_S920/medium.png',
    id: '000199abc4',
  },
  {
    name: 'T3 Smart PromoTon',
    description: 'À partir de 12x de R$ 39,90',
    image:
      'https://assets.lojastonemais.com.br/images/products/TONBASE_TIER_SMART_POS/medium.png',
    id: '000199abc5',
  },
];

const mock = new MockAdapter(api);

mock.onGet('/products').reply(200, response);

export default api;
