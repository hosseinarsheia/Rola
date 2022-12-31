import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type ParamList = {
  LoginScreen: undefined;
  SignUpScreen: undefined;
  VerificationCodeScreen: undefined;
  OnBoardingScreen: undefined;
  // Profile: { userId: string };
  // Feed: { sort: 'latest' | 'top' } | undefined;
};

export type LoginScreenProps = NativeStackScreenProps<ParamList, 'LoginScreen'>;
export type SignUpScreenProps = NativeStackScreenProps<ParamList, 'SignUpScreen'>;
export type VerificationCodeProps = NativeStackScreenProps<
  ParamList,
  'VerificationCodeScreen'
>;
export type OnBoardingScreenProps = NativeStackScreenProps<ParamList, 'OnBoardingScreen'>;
