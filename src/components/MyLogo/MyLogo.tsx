import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import R from '../../res/R';
import { useTheme } from '../../theme/ThemeProvider';
import MyIcon from '../MyIcon';
import MyText from '../MyText';

interface MyLogoProps {
  hideBackIcon?: boolean;
}

function MyLogo({ hideBackIcon = false }: MyLogoProps) {
  const { isDark, setScheme } = useTheme();
  return (
    <View
      style={[
        styles.logoWrapper,
        { justifyContent: hideBackIcon ? 'center' : 'space-between' },
      ]}>
      {!hideBackIcon && (
        <MyIcon
          name="arrowleft"
          type="antdesign"
          onPress={() => {
            setScheme(isDark ? 'light' : 'dark');
          }}
        />
      )}
      <View style={styles.imageAndTitleContainer}>
        <Image source={require('../../assets/images/logo.png')} style={styles.logo} />

        <MyText style={styles.logoTitle}>Rola</MyText>
      </View>

      {!hideBackIcon && <MyIcon name="arrowleft" type="antdesign" color="transparent" />}
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
