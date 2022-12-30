import React, { useMemo } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import {
  MyScreenContainer,
  MyText,
  MyTextInput,
  MySpacer,
  MyButton,
  MyIcon,
  MyLogo,
} from '../../components';
import { LoginScreenProps } from '../../navigation/rootNavigator/ParamList';
import R from '../../res/R';
import { ThemeColorType, useTheme } from '../../theme/ThemeProvider';

function LoginScreen({ navigation }: LoginScreenProps) {
  const { colors } = useTheme();
  const styles = useMemo(() => createdStyle(colors), [colors]);

  return (
    <MyScreenContainer containerStyle={styles.container}>
      <ScrollView
        style={styles.scrollViewStyle}
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}>
        <MyLogo />

        <MySpacer vertticalSpace={30} />
        <MyText color={colors.text} style={{ ...R.style.largeBold }}>
          Login
        </MyText>

        <MySpacer vertticalSpace={R.dimentions.verticalSpace * 4} />
        <MyTextInput placeholder="Email addresss or Mobile Number" value="" />

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

        <TouchableOpacity
          onPress={() => navigation.navigate('SignUpScreen')}
          style={styles.accountTextContainer}>
          <MyText style={styles.signUpText} color={colors.text}>
            Don’t have an account? Sign up
          </MyText>

          <MyIcon
            style={{ ...R.style.mediumBold }}
            name="keyboard-arrow-right"
            type="material"
            color={colors.linkText}
          />
        </TouchableOpacity>
      </ScrollView>
    </MyScreenContainer>
  );
}

export default LoginScreen;
const createdStyle = (colors: ThemeColorType) =>
  StyleSheet.create({
    signUpText: {
      ...R.style.mediumBold,
      flex: 1,
    },
    scrollViewContent: {
      alignItems: 'center',
    },
    scrollViewStyle: {
      width: '100%',
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
