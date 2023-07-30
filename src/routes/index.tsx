import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CardReader from '../screens/CardReader';
import CardReaderDetail from '../screens/CardReaderDetail';

const Stack = createNativeStackNavigator();

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
        <Stack.Screen name="CardReaderDetail" component={CardReaderDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
