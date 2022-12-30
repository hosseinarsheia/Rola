import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import R from '../../res/R';
import { useTheme } from '../../theme/ThemeProvider';
import MyIcon from '../MyIcon';
import MyText from '../MyText';

function MyLogo() {
  const { colors, isDark, setScheme } = useTheme();
  return (
    <View style={styles.logoWrapper}>
      <MyIcon
        name="arrowleft"
        type="antdesign"
        onPress={() => {
          setScheme(isDark ? 'light' : 'dark');
        }}
      />
      <View style={styles.imageAndTitleContainer}>
        <Image source={require('../../assets/images/logo.png')} style={styles.logo} />

        <MyText style={styles.logoTitle}>Rola</MyText>
      </View>

      <MyIcon name="arrowleft" type="antdesign" color="transparent" />
    </View>
  );
}

export default MyLogo;

const styles = StyleSheet.create({
  imageAndTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  logoTitle: {
    ...R.style.largeMedium,
    fontSize: R.fontSize.fs24,
    marginLeft: 10,
  },
  logo: {
    width: 50,
    height: 50,
  },
});
