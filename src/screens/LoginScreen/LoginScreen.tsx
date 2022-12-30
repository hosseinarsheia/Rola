import React, { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import {
  MyScreenContainer,
  MyText,
  MyTextInput,
  MySpacer,
  MyDropDown,
  MyButton,
} from '../../components';
import R from '../../res/R';
import { ThemeColorType, useTheme } from '../../theme/ThemeProvider';

function LoginScreen() {
  const { colors } = useTheme();
  const styles = useMemo(() => createdStyle(colors), [colors]);

  return (
    <MyScreenContainer containerStyle={styles.container}>
      <MyText style={{ ...R.style.largeExtraBold }}>Login</MyText>
      <MySpacer vertticalSpace={25} />
      <MyTextInput placeholder="First Name" value="" />

      <MySpacer vertticalSpace={R.dimentions.verticalSpace} />
      <MyTextInput placeholder="Last Name" value="" />

      <MySpacer vertticalSpace={R.dimentions.verticalSpace} />
      <MyTextInput placeholder="Email Address" value="" />

      <MySpacer vertticalSpace={R.dimentions.verticalSpace} />
      <MyDropDown />

      <MySpacer vertticalSpace={R.dimentions.verticalSpace} />
      <MyTextInput placeholder="Email Address" value="" />

      <MySpacer vertticalSpace={R.dimentions.verticalSpace} />
      <MyButton title="Login" gradient={false} />
    </MyScreenContainer>
  );
}

export default LoginScreen;
const createdStyle = (colors: ThemeColorType) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.backgroundColor,
      paddingHorizontal: 20,
    },
  });
