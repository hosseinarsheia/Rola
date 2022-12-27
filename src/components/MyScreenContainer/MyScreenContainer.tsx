import React, { useMemo } from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { SafeAreaView, SafeAreaViewProps } from 'react-native-safe-area-context';
import { ThemeColorType, useTheme } from '../../theme/ThemeProvider';

// import R from '../../res/R';

interface ScreenContainerProps extends SafeAreaViewProps {
  children: React.ReactNode;
}

const MyScreenContainer = ({ children }: ScreenContainerProps) => {
  const { colors, isDark } = useTheme();
  const style = useMemo(() => createdStyle(colors), [colors]);

  return (
    <SafeAreaView style={style.container}>
      <StatusBar
        barStyle={isDark ? 'light-content' : 'dark-content'}
        backgroundColor={isDark ? colors.backgroundColor : colors.white.S100}
      />
      {children}
    </SafeAreaView>
  );
};

export default MyScreenContainer;

const createdStyle = (colors: ThemeColorType) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.backgroundColor,
    },
  });
