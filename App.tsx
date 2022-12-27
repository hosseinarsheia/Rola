import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {ThemeProvider, useTheme} from './src/theme/ThemeProvider';
import {R} from './src/res/R';

const Screen = () => {
  const {colors} = useTheme();

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={[
          styles.screenContainer,
          {backgroundColor: colors.backgroundColor},
        ]}>
        <Text
          style={{
            color: colors.black.S100,
            ...R.style.largeTitleBold,
          }}>
          hello
        </Text>
      </View>
    </SafeAreaView>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <SafeAreaProvider>
          <Screen />
        </SafeAreaProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradientContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
