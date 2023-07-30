import {render, waitFor, fireEvent} from '@testing-library/react-native';
import React from 'react';
import MockAdapter from 'axios-mock-adapter';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import CardReader from '..';
import api, {products} from '../../../services/api';

const mock = new MockAdapter(api);

mock.onGet('/products').reply(200, products);

const queryClient = new QueryClient();

it('should render item correctly', async () => {
  const {getByText, getAllByTestId} = render(
    <QueryClientProvider client={queryClient}>
      <CardReader />
    </QueryClientProvider>,
  );

  expect(getByText('Escolha uma opção')).toBeTruthy();

  await waitFor(() =>
    expect(getAllByTestId('product-item')).toHaveLength(products.length),
  );

  products.forEach((product, index) => {
    const {name, description} = product;
    const listItem = getAllByTestId('product-item')[index];

    expect(getByText(name)).toBeTruthy();
    expect(getByText(description)).toBeTruthy();

    fireEvent.press(listItem);
  });
});
