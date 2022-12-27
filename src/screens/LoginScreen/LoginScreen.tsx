import React from 'react';
import { Text, StyleSheet } from 'react-native';

import { MyScreenContainer } from '../../components';

const LoginScreen = () => {
  return (
    <MyScreenContainer style={styles.container}>
      <Text> LoginScreen</Text>
    </MyScreenContainer>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
