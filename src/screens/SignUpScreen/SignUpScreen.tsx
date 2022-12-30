import React, { useMemo } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import {
  MyScreenContainer,
  MyText,
  MyTextInput,
  MySpacer,
  MyButton,
  MyLogo,
  MyDropDown,
} from '../../components';
import R from '../../res/R';
import { ThemeColorType, useTheme } from '../../theme/ThemeProvider';

function SignUpScreen() {
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
        <MyText color={colors.black.S80} style={{ ...R.style.largeBold }}>
          Sign up
        </MyText>

        <MySpacer vertticalSpace={R.dimentions.verticalSpace * 2} />
        <MyTextInput required placeholder="First Name" value="" />

        <MySpacer vertticalSpace={R.dimentions.verticalSpace} />
        <MyTextInput required placeholder="Last Name" value="" />

        <MySpacer vertticalSpace={R.dimentions.verticalSpace} />
        <MyTextInput required placeholder="Email Address" value="" />

        <MySpacer vertticalSpace={R.dimentions.verticalSpace} />

        <View style={{ flexDirection: 'row' }}>
          <MyDropDown placeholder="+1" containerStyle={{ flex: 0.5 }} />
          <MySpacer horizontalSpace={R.dimentions.horizontalSpace} />
          <MyTextInput containerStyle={{ flex: 1 }} placeholder="555-555-555" value="" />
        </View>

        <MySpacer vertticalSpace={R.dimentions.verticalSpace} />
        <MyTextInput placeholder="City" value="" />

        <MySpacer vertticalSpace={R.dimentions.verticalSpace} />
        <MyTextInput placeholder="Gender" value="" />

        <MySpacer vertticalSpace={R.dimentions.verticalSpace} />
        <View style={styles.birthDayContainer}>
          <MyText style={{ ...R.style.smallRegular }}>Birthday</MyText>
          <MyDropDown placeholder="MM" containerStyle={{ flex: 1 }} />
          <MyDropDown placeholder="DD" containerStyle={{ flex: 1 }} />
          <MyDropDown placeholder="YYYY" containerStyle={{ flex: 1 }} />
        </View>

        <MySpacer vertticalSpace={R.dimentions.verticalSpace} />
        <MyTextInput placeholder="Password" value="" />

        <MySpacer vertticalSpace={R.dimentions.verticalSpace} />
        <MyTextInput placeholder="Confirm Password" value="" />

        <MySpacer vertticalSpace={R.dimentions.verticalSpace * 2} />
        <MyButton title="Sign up" />

        <MySpacer vertticalSpace={R.dimentions.verticalSpace * 3} />

        <MyText style={{ ...R.style.smallRegular, textAlign: 'center' }}>
          Your phone number lets merchants and venues contact you about bookings and will
          not be shared
        </MyText>
      </ScrollView>
    </MyScreenContainer>
  );
}

export default SignUpScreen;

const createdStyle = (colors: ThemeColorType) =>
  StyleSheet.create({
    birthDayContainer: {
      flexDirection: 'row',
      backgroundColor: colors.paleWhite.S100,
      padding: 5,
      paddingHorizontal: 10,
      alignItems: 'center',
    },
    container: {
      flex: 1,
      backgroundColor: colors.backgroundColor,
      paddingHorizontal: 35,
    },
    scrollViewContent: {
      alignItems: 'center',
    },
    scrollViewStyle: {
      width: '100%',
    },
  });
