import React, { useMemo } from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native';

import {
  MyScreenContainer,
  MyText,
  MyTextInput,
  MySpacer,
  MyButton,
  MyIcon,
} from '../../components';
import R from '../../res/R';
import { ThemeColorType, useTheme } from '../../theme/ThemeProvider';

function LoginScreen() {
  const { colors } = useTheme();
  const styles = useMemo(() => createdStyle(colors), [colors]);

  return (
    <MyScreenContainer containerStyle={styles.container}>
      <ScrollView
        style={styles.scrollViewStyle}
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}>
        <View style={styles.logoWrapper}>
          <Image source={require('../../assets/images/logo.png')} style={styles.logo} />

          <MyText style={styles.logoTitle}>Rola</MyText>
        </View>

        <MySpacer vertticalSpace={30} />
        <MyText color={colors.black.S80} style={{ ...R.style.largeBold }}>
          Login
        </MyText>

        <MySpacer vertticalSpace={25} />
        <MyTextInput placeholder="Email Address or Mobile Number" value="" />

        <MySpacer vertticalSpace={R.dimentions.verticalSpace} />

        <MyTextInput placeholder="Password" value="" />

        <MySpacer vertticalSpace={R.dimentions.verticalSpace * 1.6} />
        <MyButton title="Login" />

        <MySpacer vertticalSpace={R.dimentions.verticalSpace * 2.4} />
        <MyText style={{ ...R.style.smallRegular }}>Forget Password?</MyText>

        <MySpacer vertticalSpace={R.dimentions.verticalSpace * 2.5} />
        <View style={styles.orContainer}>
          <View style={styles.orDividerStyle} />
          <MyText style={styles.orText}>or</MyText>
          <View style={styles.orDividerStyle} />
        </View>

        <MySpacer vertticalSpace={R.dimentions.verticalSpace * 2.5} />
        <MyButton title="Continue with Google" gradient={false} />

        <MySpacer vertticalSpace={R.dimentions.verticalSpace * 1.5} />
        <MyButton title="Continue with Google" gradient={false} />

        <MySpacer vertticalSpace={R.dimentions.verticalSpace * 3} />
        <MyText style={styles.termOfServiceStyle}>
          By tapping Sign up, Continue with Google, or Continue with Facebook you agree to
          the Privacy Policy
          <MyText color={colors.linkText}> Terms of Service </MyText>
          and acknowledge our
          <MyText color={colors.linkText}> Privacy Policy</MyText>
        </MyText>

        <MySpacer vertticalSpace={R.dimentions.verticalSpace * 3} showBorder />

        <View style={styles.accountTextContainer}>
          <MyText style={{ ...R.style.mediumBold }} color={colors.black.S80}>
            Don’t have an account? Sign up
          </MyText>

          <MyIcon
            style={{ ...R.style.mediumBold }}
            name="keyboard-arrow-right"
            type="material"
            color={colors.linkText}
          />
        </View>
      </ScrollView>
    </MyScreenContainer>
  );
}

export default LoginScreen;
const createdStyle = (colors: ThemeColorType) =>
  StyleSheet.create({
    scrollViewContent: {
      alignItems: 'center',
    },
    scrollViewStyle: {
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
    logoWrapper: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    accountTextContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
    },
    orContainer: {
      flexDirection: 'row',
      alignItems: 'flex-start',
    },
    container: {
      flex: 1,
      backgroundColor: colors.backgroundColor,
      paddingHorizontal: 35,
    },
    orDividerStyle: {
      borderTopWidth: 1,
      borderColor: colors.grayBorder,
      flex: 1,
      marginTop: 10,
    },
    orText: {
      ...R.style.largeMedium,
      paddingHorizontal: 10,
    },

    termOfServiceStyle: {
      ...R.style.smallRegular,
      justifyContent: 'center',
      textAlign: 'center',
    },
  });
