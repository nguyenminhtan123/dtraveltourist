/* eslint-disable react-native/no-unused-styles */
import React from "react";
import PropTypes from "prop-types";
import {
  StyleSheet,
  Text as RNText,
  PixelRatio,
  Dimensions,
} from "react-native";
import { Fonts, Colors } from "../themes";

const pixelRatio = PixelRatio.get();

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

const Text = (props) => {
  const {
    type,
    color,
    center,
    underLine,
    style,
    children,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    marginHorizontal,
    marginVertical,
    lineHeight,
    textAlign,
  } = props;
  return (
    <RNText
      {...props}
      allowFontScaling={false}
      style={[
        styles[type],
        color && { color },
        center && styles.center,
        underLine && styles.txtUnderline,
        marginTop && { marginTop: marginTop },
        marginBottom && { marginBottom: marginBottom },
        marginLeft && { marginLeft: marginLeft },
        marginRight && { marginRight: marginRight },
        marginHorizontal && { marginHorizontal: marginHorizontal },
        marginVertical && { marginVertical: marginVertical },
        lineHeight && { lineHeight: lineHeight },
        textAlign && { textAlign: textAlign },
        style,
      ]}
    >
      {children}
    </RNText>
  );
};
export const styles = StyleSheet.create({
  h1: {
    fontFamily: Fonts.type.semibold,
    fontSize: Fonts.appSize.h1,
    color: Colors.neutralBlack,
    lineHeight: 36,
  },
  h2: {
    fontFamily: Fonts.type.semibold,
    fontSize: normalize(Fonts.appSize.h2),
    color: Colors.neutralBlack,
  },
  h3: {
    fontFamily: Fonts.type.medium,
    fontSize: normalize(Fonts.appSize.h3),
    color: Colors.neutralBlack,
  },
  h4: {
    fontFamily: Fonts.type.medium,
    fontSize: normalize(Fonts.appSize.h4),
    color: Colors.neutralBlack,
  },
  h4Light: {
    fontFamily: Fonts.type.light,
    fontSize: normalize(Fonts.appSize.h4),
    color: Colors.neutralBlack,
  },
  bodyRegular16: {
    fontFamily: Fonts.type.regular,
    fontSize: normalize(Fonts.appSize.s16),
    color: Colors.neutralDarkBlack,
  },
  bodyLight14: {
    fontFamily: Fonts.type.light,
    fontSize: normalize(Fonts.appSize.s14),
    color: Colors.neutralDarkBlack,
  },
  bodyLight12: {
    fontFamily: Fonts.type.light,
    fontSize: normalize(Fonts.appSize.s12),
    color: Colors.neutralDarkBlack80,
  },
  subTitleRegular10: {
    fontFamily: Fonts.type.regular,
    fontSize: normalize(Fonts.appSize.s10),
    color: Colors.neutralDarkBlack80,
  },
  subTitleLight10: {
    fontFamily: Fonts.type.light,
    fontSize: normalize(Fonts.appSize.s10),
    color: Colors.neutralDarkBlack80,
  },
  subTitleLight8: {
    fontFamily: Fonts.type.light,
    fontSize: normalize(Fonts.appSize.s8),
    color: Colors.neutralDarkBlack80,
  },
  buttonMedium12: {
    fontFamily: Fonts.type.medium,
    fontSize: normalize(Fonts.appSize.s12),
    color: Colors.neutralBlack,
  },
  buttonMedium14: {
    fontFamily: Fonts.type.medium,
    fontSize: normalize(Fonts.appSize.s14),
    color: Colors.neutralBlack,
  },
  buttonRegular12: {
    fontFamily: Fonts.type.regular,
    fontSize: normalize(Fonts.appSize.s12),
    color: Colors.neutralDarkBlack80,
  },
  buttonRegular10: {
    fontFamily: Fonts.type.regular,
    fontSize: normalize(Fonts.appSize.s10),
    color: Colors.neutralDarkBlack80,
  },
  buttonLight12: {
    fontFamily: Fonts.type.light,
    fontSize: normalize(Fonts.appSize.s12),
    color: Colors.neutralDarkBlack80,
  },
  labelTitle14: {
    fontFamily: Fonts.type.semibold,
    fontSize: normalize(Fonts.appSize.s14),
    color: Colors.neutralDarkBlack,
  },
  displayTitleRegular16: {
    fontFamily: Fonts.type.regular,
    fontSize: normalize(Fonts.appSize.s16),
    color: Colors.neutralDarkBlack,
  },
  center: {
    textAlign: "center",
  },
  txtUnderline: {
    textDecorationLine: "underline",
  },
  normal: {
    color: Colors.primary,
  },
});

Text.propTypes = {
  type: PropTypes.oneOf(Object.keys(styles)),
  color: PropTypes.string,
  center: PropTypes.bool,
  underLine: PropTypes.bool,
  style: PropTypes.any,
};

export default Text;

export function normalize(size) {
  size = size + 0.5;
  if (pixelRatio === 2) {
    // iphone 5s and older Androids
    if (deviceWidth < 360) {
      return size * 1.1;
    }
    // iphone 5
    if (deviceHeight < 667) {
      return size * 1.1;
      // iphone 6-6s
    } else if (deviceHeight >= 667 && deviceHeight <= 735) {
      return size * 1.15;
    }
    // older phablets
    return size * 1.25;
  }
  if (pixelRatio === 3) {
    // catch Android font scaling on small machines
    // where pixel ratio / font scale ratio => 3:3
    if (deviceWidth <= 360) {
      return size * 1.1;
    }
    // Catch other weird android width sizings
    if (deviceHeight < 667) {
      return size * 1.15;
      // catch in-between size Androids and scale font up
      // a tad but not too much
    }
    if (deviceHeight >= 667 && deviceHeight <= 735) {
      return size * 1.2;
    }
    // catch larger devices
    // ie iphone 6s plus / 7 plus / mi note 等等
    return size * 1.27;
  }
  if (pixelRatio === 3.5) {
    // catch Android font scaling on small machines
    // where pixel ratio / font scale ratio => 3:3
    if (deviceWidth <= 360) {
      return size * 1.1;
      // Catch other smaller android height sizings
    }
    if (deviceHeight < 667) {
      return size * 1.2;
      // catch in-between size Androids and scale font up
      // a tad but not too much
    }
    if (deviceHeight >= 667 && deviceHeight <= 735) {
      return size * 1.25;
    }
    // catch larger phablet devices
    return size * 1.4;
  }
  // if older device ie pixelRatio !== 2 || 3 || 3.5
  return size;
}
