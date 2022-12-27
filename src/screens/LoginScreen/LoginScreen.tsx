import React, { useMemo } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Icon } from '@rneui/themed';

import { MyScreenContainer, MySpacer, MyText } from '../../components';
import R from '../../res/R';
import { ThemeColorType, useTheme } from '../../theme/ThemeProvider';

const LoginScreen = () => {
  const { colors } = useTheme();
  const styles = useMemo(() => createdStyle(colors), [colors]);
  return (
    <MyScreenContainer style={styles.container}>
      <MyText style={{ ...R.style.largeExtraBold }}>Login</MyText>

      <Icon name="user" type="antdesign" />
    </MyScreenContainer>
  );
};

export default LoginScreen;
const createdStyle = (colors: ThemeColorType) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.backgroundColor,
    },
  });
