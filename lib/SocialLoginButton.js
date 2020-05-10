import React from "react";
import PropTypes from "prop-types";
import { Text, View, TouchableOpacity } from "react-native";
import Androw from "react-native-androw";
import Icon from "react-native-dynamic-vector-icons";
import { ScreenWidth } from "@freakycoder/react-native-helpers";
/**
 * ? Local Imports
 */
import styles, {
  _buttonContainerStyle,
  _iconContainer,
} from "./SocialLoginButton.style";

const SocialLoginButton = (props) => {
  const {
    text,
    width,
    height,
    onPress,
    textStyle,
    iconWidth,
    iconHeight,
    borderRadius,
    shadowStyles,
    iconComponent,
    backgroundColor,
    iconBorderRadius,
    iconBackgroundColor,
  } = props;

  return (
    <Androw style={shadowStyles || styles.shadowStyle}>
      <TouchableOpacity
        style={_buttonContainerStyle(
          width,
          height,
          borderRadius,
          backgroundColor
        )}
        onPress={onPress}
      >
        <View style={styles.container}>
          <View
            style={_iconContainer(
              iconWidth,
              iconHeight,
              iconBorderRadius,
              iconBackgroundColor
            )}
          >
            {iconComponent || (
              <Icon
                size={30}
                color="#3c5997"
                name="facebook-f"
                type="FontAwesome"
                {...props}
              />
            )}
          </View>
          <Text style={textStyle || styles.textStyle}>{text}</Text>
        </View>
      </TouchableOpacity>
    </Androw>
  );
};

SocialLoginButton.propTypes = {
  text: PropTypes.string,
  borderRadius: PropTypes.number,
  backgroundColor: PropTypes.string,
  iconBorderRadius: PropTypes.number,
  iconBackgroundColor: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  iconWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  iconHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

SocialLoginButton.defaultProps = {
  text: "Continue with Facebook",
  height: 70,
  iconWidth: 55,
  iconHeight: 55,
  borderRadius: 24,
  iconBorderRadius: 24,
  width: ScreenWidth * 0.8,
  backgroundColor: "#2d93e7",
  iconBackgroundColor: "#fdfdfd",
};

export default SocialLoginButton;
