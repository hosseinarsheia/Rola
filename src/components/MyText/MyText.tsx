import React, { useMemo } from 'react';
import { Text, StyleSheet, TextStyle, TextProps } from 'react-native';

import R from '../../res/R';
import { ThemeColorType, useTheme } from '../../theme/ThemeProvider';

interface MyTextProps extends TextProps {
  children: React.ReactNode | React.ReactNode[];
  style?: TextStyle;
  color?: keyof ThemeColorType;
  size?: number;
}
function MyText({ children, style, color, size }: MyTextProps) {
  const { colors } = useTheme();
  const styles = useMemo(() => createdStyle(colors), [colors]);

  return <Text style={[styles.text, style, { color, fontSize: size }]}>{children}</Text>;
}

export default MyText;

const createdStyle = (colors: ThemeColorType) =>
  StyleSheet.create({
    text: {
      ...R.style.mediumRegular,
      color: colors.text,
    },
  });
