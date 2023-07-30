import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type HomeStackNavigatorParamList = {
  CardReader: undefined;
  CardReaderDetail: undefined;
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  HomeStackNavigatorParamList,
  'CardReader',
  'CardReaderDetail'
>;
