import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';

import {
  MyScreenContainer,
  MyText,
  MyTextInput,
  MySpacer,
  MyButton,
  MyLogo,
} from '../../../components';
import R from '../../../res/R';
import { ThemeColorType, useTheme } from '../../../theme/ThemeProvider';

function VerificationCodeScreen() {
  const { colors } = useTheme();
  const styles = useMemo(() => createdStyle(colors), [colors]);

  return (
    <MyScreenContainer containerStyle={styles.container}>
      <MyLogo />

      <MySpacer vertticalSpace={R.dimentions.verticalSpace * 3} />
      <MyText style={{ ...R.style.largeBold }}>Verification Code Sent</MyText>

      <MySpacer vertticalSpace={R.dimentions.verticalSpace * 2} />
      <MyText style={styles.descriptionTexts}>
        A 6 digit verification code has been sent to your registered phone number and
        email address.
      </MyText>

      <View style={styles.inputsWrapper}>
        <MyTextInput
          maxLength={1}
          style={styles.inputStyle}
          containerStyle={styles.rightInputs}
          placeholder="-"
          value=""
        />
        <MyTextInput
          maxLength={1}
          style={styles.inputStyle}
          containerStyle={styles.rightInputs}
          placeholder="-"
          value=""
        />
        <MyTextInput
          maxLength={1}
          style={styles.inputStyle}
          containerStyle={styles.rightInputs}
          placeholder="-"
          value=""
        />
        <MySpacer horizontalSpace={R.dimentions.horizontalSpace} />

        <MyTextInput
          maxLength={1}
          style={styles.inputStyle}
          containerStyle={styles.leftInputs}
          placeholder="-"
          value=""
        />
        <MyTextInput
          maxLength={1}
          style={styles.inputStyle}
          containerStyle={styles.leftInputs}
          placeholder="-"
          value=""
        />
        <MyTextInput
          maxLength={1}
          style={styles.inputStyle}
          containerStyle={styles.leftInputs}
          placeholder="-"
          value=""
        />
      </View>

      <MySpacer showBorder vertticalSpace={R.dimentions.verticalSpace * 8} />

      <MyText style={{ ...R.style.smallRegular }}>Haven’t received a code?</MyText>
      <MySpacer vertticalSpace={R.dimentions.verticalSpace * 1.4} />
      <MyButton title="Resend Code" />
    </MyScreenContainer>
  );
}

export default VerificationCodeScreen;

const createdStyle = (colors: ThemeColorType) =>
  StyleSheet.create({
    descriptionTexts: {
      ...R.style.smallRegular,
      textAlign: 'center',
    },
    inputsWrapper: {
      flexDirection: 'row',
      marginTop: 40,
    },
    container: {
      flex: 1,
      backgroundColor: colors.backgroundColor,
      paddingHorizontal: 35,
      alignItems: 'center',
    },

    inputStyle: {
      textAlign: 'center',
    },

    rightInputs: {
      flex: 1,
      marginRight: 5,
    },

    leftInputs: {
      flex: 1,
      marginLeft: 5,
    },
  });
