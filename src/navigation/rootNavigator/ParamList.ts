import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type ParamList = {
  LoginScreen: undefined;
  // Profile: { userId: string };
  // Feed: { sort: 'latest' | 'top' } | undefined;
};

export type LoginScreenProps = NativeStackScreenProps<ParamList, 'LoginScreen'>;
