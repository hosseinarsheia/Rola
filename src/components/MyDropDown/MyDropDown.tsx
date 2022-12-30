import React, { useMemo, useState } from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import { useTheme, ThemeColorType } from '../../theme/ThemeProvider';
import MyIcon from '../MyIcon';

interface MyDropDownProps {
  style?: ViewStyle;
  containerStyle?: ViewStyle;
  placeholder?: string;
}

function MyDropDown({ style, placeholder, containerStyle, ...props }: MyDropDownProps) {
  const { colors } = useTheme();
  const styles = useMemo(() => createdStyle(colors), [colors]);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Banana', value: 'banana2' },
    { label: 'Banana', value: 'banana3' },
    { label: 'Banana', value: 'banana4' },
    { label: 'Banana', value: 'banana5' },
    { label: 'Banana', value: 'banana6' },
    { label: 'Banana', value: 'banana7' },
    { label: 'Banana', value: 'banana8' },
    { label: 'Banana', value: 'banana9' },
  ]);

  return (
    <DropDownPicker
      style={[styles.style, style]}
      containerStyle={containerStyle}
      placeholder={placeholder}
      props={{ activeOpacity: 0.9 }}
      labelProps={{ numberOfLines: 1 }}
      placeholderStyle={{ color: colors.text }}
      ArrowDownIconComponent={() => (
        <MyIcon
          name="keyboard-arrow-down"
          type="material"
          color={colors.text}
          size={20}
        />
      )}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      zIndex={1000}
      showArrowIcon
      {...props}
    />
  );
}

export default MyDropDown;

const createdStyle = (colors: ThemeColorType) =>
  StyleSheet.create({
    style: {
      backgroundColor: colors.textInput,
      borderRadius: 4,
      borderWidth: 0,
    },
    container: {},
  });
