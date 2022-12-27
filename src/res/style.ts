import {StyleSheet} from 'react-native';
import fontFamily from './fontFamily';
import fontSize from './fontSize';

export default StyleSheet.create({
  'largeTitle-Bold': {
    fontFamily: fontFamily.bold,
    fontSize: fontSize.fs36,
  },

  'largeTitle-Regular': {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.fs36,
  },

  'title-ExtraBold': {
    fontFamily: fontFamily.extraBold,
    fontSize: fontSize.fs24,
  },

  'title-Regular': {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.fs24,
  },

  'medium-Bold': {
    fontFamily: fontFamily.extraBold,
    fontSize: fontSize.fs14,
  },

  'medium-SemiBold': {
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.fs14,
  },

  'medium-Regular': {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.fs14,
  },

  'small-Bold': {
    fontFamily: fontFamily.extraBold,
    fontSize: fontSize.fs12,
  },

  'small-SemiBold': {
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.fs12,
  },

  'small-Regular': {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.fs12,
  },

  'tiny-Bold': {
    fontFamily: fontFamily.extraBold,
    fontSize: fontSize.fs10,
  },

  'tiny-SemiBold': {
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.fs10,
  },

  'tiny-Regular': {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.fs10,
  },

  smallAllCaps: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize.fs10,
  },
});
