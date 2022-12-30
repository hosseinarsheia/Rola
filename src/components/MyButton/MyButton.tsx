import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import R from '../../res/R';
import { useTheme } from '../../theme/ThemeProvider';
import MyText from '../MyText';

interface MyButtonProps {
  containerStyle?: ViewStyle;
  title: string;
  gradient?: boolean;
}

function MyButton({
  title = 'change me',
  containerStyle,
  gradient = true,
}: MyButtonProps) {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, containerStyle]}>
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
            { backgroundColor: gradient ? 'transparent' : 'white' },
          ]}>
          <MyText
            style={styles.title}
            color={gradient ? colors.white.S100 : colors.black.S80}>
            {title}
          </MyText>
        </View>
      </LinearGradient>
    </View>
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
