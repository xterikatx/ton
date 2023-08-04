import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CardReaderDetail from '../../CardReaderDetail'; // Caminho para o seu componente
import MockAdapter from 'axios-mock-adapter';
import api, {products} from '../../../services/api';

const mockApi = new MockAdapter(api);
mockApi.onGet(`/product/${products[0].id}`).reply(200, products[0]);

describe('CardReaderDetail Screen', () => {
  const queryClient = new QueryClient();
  const Stack = createNativeStackNavigator();

  const renderComponent = () => {
    return render(
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="CardReaderDetail"
              component={CardReaderDetail}
              initialParams={{productId: products[0].id}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </QueryClientProvider>,
    );
  };

  it('should display loader while fetching the product', () => {
    const {getByTestId} = renderComponent();

    expect(getByTestId('ActivityIndicator')).toBeTruthy();
  });

  it('should display product details after fetching', async () => {
    const {getByText} = renderComponent();

    await waitFor(() => {
      expect(
        getByText(products[0].characteristics[0].description),
      ).toBeTruthy();
    });
  });
});
