import React from 'react';
import { Text, StyleSheet, TextStyle, TextProps } from 'react-native';

import R from '../../res/R';
import { useTheme } from '../../theme/ThemeProvider';

interface MyTextProps extends TextProps {
  children: React.ReactNode | React.ReactNode[];
  style?: TextStyle;
  color?: string;
  opacity?: number;
}
function MyText({ children, style, color }: MyTextProps) {
  const { colors } = useTheme();

  return (
    <Text
      style={[
        styles.text,
        style,
        {
          color: color ? color : colors.text,
        },
      ]}>
      {children}
    </Text>
  );
}

export default MyText;

const styles = StyleSheet.create({
  text: {
    fontFamily: R.fonts.regular,
    fontSize: R.fontSize.fs14,
  },
});
