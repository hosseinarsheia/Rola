import React, { useMemo } from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { Input, InputProps } from '@rneui/themed';

import R from '../../res/R';
import { ThemeColorType, useTheme } from '../../theme/ThemeProvider';

interface MyTextInputProps extends InputProps {
  required?: boolean;
  placeholder?: string;
  containerStyle?: ViewStyle;
}

function MyTextInput({
  required = false,
  placeholder = 'placeholder',
  containerStyle,
  ...props
}: MyTextInputProps) {
  const { colors } = useTheme();
  const styles = useMemo(() => createdStyle(colors), [colors]);

  return (
    <Input
      containerStyle={[styles.containerStyle, containerStyle]}
      placeholder={`${required ? '*' : ''} ${placeholder}`}
      renderErrorMessage={false}
      placeholderTextColor={colors.text}
      inputContainerStyle={styles.inputContainerStyle}
      inputStyle={styles.inputStyle}
      {...props}
    />
  );
}

export default MyTextInput;

const createdStyle = (colors: ThemeColorType) =>
  StyleSheet.create({
    inputStyle: {
      ...R.style.smallRegular,
      textAlignVertical: 'center',
      color: colors.text,
    },
    inputContainerStyle: {
      borderBottomWidth: 0,
    },
    containerStyle: {
      backgroundColor: colors.textInput,
      borderBottomWidth: 0,
      borderRadius: 4,
      paddingVertical: 5,
    },
  });
