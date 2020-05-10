import { ScreenWidth } from "@freakycoder/react-native-helpers";

export const _buttonContainerStyle = (
  width,
  height,
  borderRadius,
  backgroundColor
) => ({
  width,
  height,
  borderRadius,
  backgroundColor,
});

export const _iconContainer = (
  iconWidth,
  iconHeight,
  iconBorderRadius,
  iconBackgroundColor
) => ({
  width: iconWidth,
  height: iconHeight,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: iconBorderRadius,
  backgroundColor: iconBackgroundColor,
});

export default {
  shadowStyle: {
    shadowRadius: 7,
    shadowOpacity: 0.7,
    shadowColor: "#757575",
    shadowOffset: {
      width: 3,
      height: 1,
    },
  },
  container: {
    flex: 1,
    marginLeft: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  textStyle: {
    fontSize: 16,
    marginLeft: 32,
    color: "#fdfdfd",
    fontWeight: "700",
  },
};
