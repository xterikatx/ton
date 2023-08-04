import {render, waitFor, fireEvent} from '@testing-library/react-native';
import React from 'react';
import MockAdapter from 'axios-mock-adapter';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import CardReader from '..';
import api, {products} from '../../../services/api';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const mock = new MockAdapter(api);

mock.onGet('/products').reply(200, products);

const queryClient = new QueryClient();

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: jest.fn(() => ({
    navigate: jest.fn(),
  })),
}));

it('should render item correctly', async () => {
  const {getByText, getAllByTestId} = render(
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="CardReader" component={CardReader} />
        </Stack.Navigator>
      </NavigationContainer>
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
