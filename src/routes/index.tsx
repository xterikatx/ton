import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CardReader from '../screens/CardReader';
import CardReaderDetail from '../screens/CardReaderDetail';

export type RootStackParamList = {
  CardReader: undefined;
  CardReaderDetail: {productId: string};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const options = {
  headerShown: false,
};

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CardReader">
        <Stack.Screen
          name="CardReader"
          component={CardReader}
          options={options}
        />
        <Stack.Screen
          name="CardReaderDetail"
          component={CardReaderDetail}
          options={options}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
