import React, { useMemo, useRef } from 'react';
import { View, StyleSheet, Image, Animated } from 'react-native';

import R from '../../res/R';
import { MyButton, MyLogo, MyScreenContainer, MyText } from '../../components';
import { useTheme } from '../../theme/ThemeProvider';
import { OnBoardingScreenProps } from '../../navigation/rootNavigator/ParamList';

const ONBOARDING_ITEM = [
  {
    id: 1,
    title: 'Book in seconds',
    text: 'Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no rejoiced.',
    url: require('../../assets/images/rolaGraphic.png'),
  },
  {
    id: 2,
    title: 'Invite Friends',
    text: 'Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no rejoiced.',
    url: require('../../assets/images/friends.png'),
  },
  {
    id: 3,
    title: 'Rate, Review, Rewards',
    text: 'Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no rejoiced.',
    url: require('../../assets/images/review.png'),
  },
];

function OnBoardingScreen({ navigation }: OnBoardingScreenProps) {
  const { colors } = useTheme();
  const styles = useMemo(() => createdStyle(), []);
  const scrollX = useRef(new Animated.Value(0)).current;

  function interpolateHandler(index: number, outputRange: string[] | number[]) {
    const width = R.dimentions.screenWidth;
    const inputRange = [(index - 1) * width, index * width, (index + 1) * width];

    const interpolateValue = scrollX.interpolate({
      inputRange,
      outputRange: outputRange,
      extrapolate: 'clamp',
    });

    return interpolateValue;
  }

  return (
    <MyScreenContainer>
      <MyLogo hideBackIcon={false} />

      <Animated.ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        pagingEnabled
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
          useNativeDriver: false,
        })}>
        {ONBOARDING_ITEM.map(value => {
          return (
            <View key={`${value.id}`} style={styles.itemContainer}>
              <Image source={value.url} style={styles.imageStyle} resizeMode="contain" />
              <MyText style={styles.TitleStyle}>{value.title}</MyText>
              <MyText style={styles.paragraphStyle}>{value.text}</MyText>
            </View>
          );
        })}
      </Animated.ScrollView>

      <View style={styles.dotWrapper}>
        {ONBOARDING_ITEM.map((value, index) => {
          const dotWidth = interpolateHandler(index, [10, 20, 10]);

          const dotColor = interpolateHandler(index, [
            colors.text,
            colors.teal.S100,
            colors.text,
          ]);
          return (
            <Animated.View
              key={`${value.id}`}
              style={[styles.dot, { width: dotWidth, backgroundColor: dotColor }]}
            />
          );
        })}
      </View>
      <MyButton
        containerStyle={styles.buttonContainer}
        title="Skip Onboarding"
        onPress={() => navigation.replace('LoginScreen')}
      />
    </MyScreenContainer>
  );
}

export default OnBoardingScreen;

const createdStyle = () =>
  StyleSheet.create({
    buttonContainer: {
      paddingHorizontal: 30,
      marginVertical: 30,
    },
    dotWrapper: {
      flexDirection: 'row',
    },
    dot: {
      height: 10,
      borderRadius: 10,
      marginHorizontal: 5,
    },
    TitleStyle: {
      ...R.style.titleListing,
    },
    paragraphStyle: {
      ...R.style.smallRegular,
      textAlign: 'center',
      marginTop: 10,
    },
    imageStyle: {
      width: 200,
      height: 200,
      resizeMode: 'contain',
      marginTop: 100,
      marginBottom: 60,
    },
    itemContainer: {
      flex: 1,
      width: R.dimentions.screenWidth,
      alignItems: 'center',
      paddingHorizontal: 30,
    },
    container: {},
  });
