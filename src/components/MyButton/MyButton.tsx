import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ViewStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import R from '../../res/R';
import { useTheme } from '../../theme/ThemeProvider';
import MyText from '../MyText';

interface MyButtonProps extends TouchableOpacityProps {
  containerStyle?: ViewStyle;
  title: string;
  gradient?: boolean;
}

function MyButton({
  title = 'change me',
  containerStyle,
  gradient = true,
  ...props
}: MyButtonProps) {
  const { colors } = useTheme();
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.container, containerStyle]}
      {...props}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={
          gradient ? colors.linearGradient.button : colors.linearGradient.buttonReverse
        }
        style={styles.linearGradient}>
        <View
          style={[
            styles.titleContainer,
            // eslint-disable-next-line react-native/no-inline-styles
            { backgroundColor: gradient ? 'transparent' : colors.backgroundColor },
          ]}>
          <MyText style={styles.title} color={gradient ? colors.white.S100 : colors.text}>
            {title}
          </MyText>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}

export default MyButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  linearGradient: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'center',
    flex: 1,
    borderRadius: 50,
    padding: 2,
    overflow: 'hidden',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 50,
  },
  title: {
    ...R.style.smallSemiBold,
    marginHorizontal: 15,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
