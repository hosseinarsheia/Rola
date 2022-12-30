import { StyleSheet } from 'react-native';
import fontFamily from './fontFamily';
import fontSize from './fontSize';

export default StyleSheet.create({
  largeTitleBold: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize.fs36,
    lineHeight: fontSize.fs36 * 1.5,
    color: '#162534CC',
  },

  largeTitleRegular: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.fs36,
    lineHeight: fontSize.fs36 * 1.5,
    color: '#162534CC',
  },

  titleListing: {
    fontFamily: fontFamily.extraBold,
    fontSize: fontSize.fs24,
    lineHeight: fontSize.fs24 * 1.5,
    color: '#162534CC',
  },

  titleRegular: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.fs24,
    lineHeight: fontSize.fs24 * 1.5,
    color: '#162534CC',
  },

  largeBold: {
    fontFamily: fontFamily.extraBold,
    fontSize: fontSize.fs18,
    lineHeight: fontSize.fs18 * 1.5,
    color: '#162534CC',
  },

  largeMedium: {
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.fs18,
    lineHeight: fontSize.fs18 * 1.5,
    color: '#162534CC',
  },

  LargeRegular: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.fs18,
    lineHeight: fontSize.fs18 * 1.5,
    color: '#162534CC',
  },

  mediumBold: {
    fontFamily: fontFamily.extraBold,
    fontSize: fontSize.fs14,
    lineHeight: fontSize.fs14 * 1.5,
    color: '#162534CC',
  },

  mediumSemiBold: {
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.fs14,
    lineHeight: fontSize.fs14 * 1.5,
    color: '#162534CC',
  },

  mediumRegular: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.fs14,
    lineHeight: fontSize.fs14 * 1.5,
    color: '#162534CC',
  },

  smallBold: {
    fontFamily: fontFamily.extraBold,
    fontSize: fontSize.fs12,
    lineHeight: fontSize.fs12 * 1.5,
    color: '#162534CC',
  },

  smallSemiBold: {
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.fs12,
    lineHeight: fontSize.fs12 * 1.5,
    color: '#162534CC',
  },

  smallRegular: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.fs12,
    lineHeight: fontSize.fs12 * 1.5,
    color: '#162534CC',
  },

  tinyBold: {
    fontFamily: fontFamily.extraBold,
    fontSize: fontSize.fs10,
    lineHeight: fontSize.fs10 * 1.5,
    color: '#162534CC',
  },

  tinySemiBold: {
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.fs10,
    lineHeight: fontSize.fs10 * 1.5,
    color: '#162534CC',
  },

  tinyRegular: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.fs10,
    lineHeight: fontSize.fs10 * 1.5,
    color: '#162534CC',
  },

  smallAllCaps: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize.fs10,
    lineHeight: fontSize.fs10 * 1.5,
    color: '#162534CC',

    textTransform: 'uppercase',
  },
});
