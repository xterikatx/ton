import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CardReader from '../screens/CardReader';
import CardReaderDetail from '../screens/CardReaderDetail';
import {createDrawerNavigator} from '@react-navigation/drawer';

export type RootStackParamList = {
  CardReader: undefined;
  CardReaderDetail: {productId: string};
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();

const options = {
  headerShown: false,
};

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CardReader" screenOptions={options}>
        <Stack.Screen name="CardReader">
          {() => (
            <Drawer.Navigator
              initialRouteName="CardReader"
              screenOptions={{headerShown: false}}>
              <Drawer.Screen
                name="CardReader"
                component={CardReader}
                options={{drawerLabel: 'Maquininhas'}}
              />
            </Drawer.Navigator>
          )}
        </Stack.Screen>
        <Stack.Screen name="CardReaderDetail" component={CardReaderDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
