import React, { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { MyScreenContainer, MyText, MyTextInput, MySpacer } from '../../components';
import R from '../../res/R';
import { ThemeColorType, useTheme } from '../../theme/ThemeProvider';

const LoginScreen = () => {
  const { colors } = useTheme();
  const styles = useMemo(() => createdStyle(colors), [colors]);
  return (
    <MyScreenContainer containerStyle={styles.container}>
      <MyText style={{ ...R.style.largeExtraBold }}>Login</MyText>

      <MyTextInput value="" />
      <MySpacer vertticalSpace={20} />
      <MyTextInput value="ssss" />
    </MyScreenContainer>
  );
};

export default LoginScreen;
const createdStyle = (colors: ThemeColorType) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.backgroundColor,
      paddingHorizontal: 20,
    },
  });
