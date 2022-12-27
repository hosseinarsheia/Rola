import React from 'react';
import {Switch, View, Text, SafeAreaView, StyleSheet} from 'react-native';

import {ThemeProvider, useTheme} from './src/theme/ThemeProvider';

const Toggle = () => {
  const {setScheme, isDark} = useTheme();

  const toggleScheme = () => {
    isDark ? setScheme('light') : setScheme('dark');
  };

  return <Switch value={isDark} onValueChange={toggleScheme} />;
};

const Screen = () => {
  const {colors} = useTheme();

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={[
          styles.screenContainer,
          {backgroundColor: colors.backgroundColor},
        ]}>
        <Toggle />
        <Text style={{color: colors.black.S100}}>hello</Text>
      </View>
    </SafeAreaView>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <Screen />
    </ThemeProvider>
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
