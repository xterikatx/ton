import axios, {AxiosInstance} from 'axios';
import MockAdapter from 'axios-mock-adapter';

const api: AxiosInstance = axios.create({
  baseURL: 'http://test.ton',
});

export const products = [
  {
    name: 'T1 Promo',
    description: 'À partir de 12x de R$ 8,90',
    images: [
      'https://i.ibb.co/T1P7Bs2/t1.png',
      'https://res.cloudinary.com/dunz5zfpt/fl_progressive/f_auto,c_limit,w_256,q_100/site-ton/maquininhas/machine-t1-2',
      'https://res.cloudinary.com/dunz5zfpt/fl_progressive/f_auto,c_limit,w_256,q_100/site-ton/maquininhas/machine-t1-2',
    ],
    image:
      'https://assets.lojastonemais.com.br/images/products/TON_D150/medium.png',
    id: '000199abc1',
    characteristics: [
      {
        icon: 'bus',
        description: 'Frete e troca grátis pra todo o Brasil',
      },
      {
        icon: 'calendar',
        description: 'Receba suas vendas em 1 dia útil',
      },
      {
        icon: 'cellphone-information',
        description: 'Precisa de celular com internet',
      },
      {
        icon: 'nfc',
        description: 'Receba por aproximação (NFC)',
      },
      {
        icon: 'message-minus',
        description: 'Comprovante por SMS',
      },
      {
        icon: 'cash-check',
        description: 'Venda pelo App com TapTon, Link, Pix e Boleto',
      },
    ],
  },
  {
    name: 'T1 Chip Promo',
    description: 'À partir de 12x de R$ 23,90',
    images: [
      'https://i.ibb.co/XyT0bxR/t1-chip.png',
      'https://res.cloudinary.com/dunz5zfpt/fl_progressive/f_auto,c_limit,w_256,q_100/site-ton/maquininhas/machine-t1-chip-2',
      'https://res.cloudinary.com/dunz5zfpt/fl_progressive/f_auto,c_limit,w_256,q_100/site-ton/maquininhas/machine-t1-chip-2',
    ],
    image:
      'https://assets.lojastonemais.com.br/images/products/TON_T1_CHIP/medium.png',
    id: '000199abc2',
    characteristics: [
      {
        icon: 'bus',
        description: 'Frete e troca grátis pra todo o Brasil',
      },
      {
        icon: 'calendar',
        description: 'Receba suas vendas em 1 dia útil',
      },
      {
        icon: 'wifi',
        description: 'Com Chip 2G e Wi-Fi',
      },
      {
        icon: 'nfc',
        description: 'Receba por aproximação (NFC)',
      },
      {
        icon: 'message-minus',
        description: 'Comprovante por SMS',
      },
      {
        icon: 'cash-check',
        description: 'Venda pelo App com TapTon, Link, Pix e Boleto',
      },
    ],
  },
  {
    name: 'T2+ PromoTon',
    description: 'À partir de 12x de R$ 15,90',
    images: [
      'https://i.ibb.co/d6tHnH7/t2-promo.png',
      'https://res.cloudinary.com/dunz5zfpt/fl_progressive/f_auto,c_limit,w_256,q_100/site-ton/maquininhas/machine-t2-2',
      'https://res.cloudinary.com/dunz5zfpt/fl_progressive/f_auto,c_limit,w_256,q_100/site-ton/maquininhas/machine-t2-2',
    ],
    image:
      'https://assets.lojastonemais.com.br/images/products/TON_D195/medium.png',
    id: '000199abc3',
    characteristics: [
      {
        icon: 'bus',
        description: 'Frete e troca grátis pra todo o Brasil',
      },
      {
        icon: 'calendar',
        description: 'Receba suas vendas em 1 dia útil',
      },
      {
        icon: 'wifi',
        description: 'Com Chip 3G e Wi-Fi',
      },
      {
        icon: 'nfc',
        description: 'Receba por aproximação (NFC)',
      },
      {
        icon: 'message-minus',
        description: 'Comprovante por SMS',
      },
      {
        icon: 'cash-check',
        description: 'Venda pelo App com TapTon, Link, Pix e Boleto',
      },
      {
        icon: 'battery-arrow-up',
        description: 'Bateria de longa duração',
      },
    ],
  },
  {
    name: 'T3 PromoTon',
    description: 'À partir de 12x de R$ 32,90',
    images: [
      'https://i.ibb.co/WfxX7fY/t3-promo.png',
      'https://res.cloudinary.com/dunz5zfpt/fl_progressive/f_auto,c_limit,w_256,q_100/site-ton/maquininhas/machine-t3-2',
      'https://res.cloudinary.com/dunz5zfpt/fl_progressive/f_auto,c_limit,w_256,q_100/site-ton/maquininhas/machine-t3-2',
    ],
    image:
      'https://assets.lojastonemais.com.br/images/products/TON_S920/medium.png',
    id: '000199abc4',
    characteristics: [
      {
        icon: 'bus',
        description: 'Frete e troca grátis pra todo o Brasil',
      },
      {
        icon: 'calendar',
        description: 'Receba suas vendas em 1 dia útil',
      },
      {
        icon: 'wifi',
        description: 'Com Chip 3G e Wi-Fi',
      },
      {
        icon: 'nfc',
        description: 'Receba por aproximação (NFC)',
      },
      {
        icon: 'message-minus',
        description: 'Comprovante por SMS',
      },
      {
        icon: 'cash-check',
        description: 'Venda pelo App com TapTon, Link, Pix e Boleto',
      },
      {
        icon: 'qrcode',
        description: 'Aceite Pix QR Code na Maquininha',
      },
    ],
  },
  {
    name: 'T3 Smart PromoTon',
    description: 'À partir de 12x de R$ 39,90',
    images: [
      'https://i.ibb.co/2ZQxTbV/t3-smart-promo.png',
      'https://res.cloudinary.com/dunz5zfpt/fl_progressive/f_auto,c_limit,w_256,q_100/site-ton/maquininhas/machine-t3-smart-2',
      'https://res.cloudinary.com/dunz5zfpt/fl_progressive/f_auto,c_limit,w_256,q_100/site-ton/maquininhas/machine-t3-smart-2',
    ],
    image:
      'https://assets.lojastonemais.com.br/images/products/TONBASE_TIER_SMART_POS/medium.png',
    id: '000199abc5',
    characteristics: [
      {
        icon: 'bus',
        description: 'Frete e troca grátis pra todo o Brasil',
      },
      {
        icon: 'calendar',
        description: 'Receba suas vendas em 1 dia útil',
      },
      {
        icon: 'wifi',
        description: 'Com Chip 3G e Wi-Fi',
      },
      {
        icon: 'nfc',
        description: 'Receba por aproximação (NFC)',
      },
      {
        icon: 'message-minus',
        description: 'Comprovante por SMS',
      },
      {
        icon: 'cash-check',
        description: 'Venda pelo App com TapTon, Link, Pix e Boleto',
      },
      {
        icon: 'battery-arrow-up',
        description: 'Bateria de longa duração',
      },
      {
        icon: 'android',
        description: 'Sistema Android com Visor Touchscreen',
      },
      {
        icon: 'qrcode',
        description: 'Aceite Pix QR Code na Maquininha',
      },
    ],
  },
];

const mock = new MockAdapter(api);

mock.onGet('/products').reply(200, products);

mock.onGet(/\/product\/\w+/).reply(config => {
  const id = config.url?.split('/').pop();

  const product = products.find(productSelected => productSelected.id === id);

  return product ? [200, product] : [404, {message: 'Product not found'}];
});

export default api;
