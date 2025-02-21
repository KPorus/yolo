import {
  TouchableOpacity,
  StyleSheet,
  Text,
  ViewStyle,
} from "react-native";
import React from "react";

interface BtnProps {
  title: string;
  handlePress: () => void;
  containerStyles?: ViewStyle;
  bgColor?: string;
  gradientColor?: string;
  textColor?: string;
}

const Btn: React.FC<BtnProps> = ({
  title,
  handlePress,
  bgColor = "black",
  textColor = "white",
  gradientColor = "#FFFFFF",
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: bgColor, borderColor: gradientColor },
      ]}
      onPress={handlePress}
    >
      <Text style={[styles.buttonText, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Btn;

const styles = StyleSheet.create({
  button: {
    width: 94,
    height: 40,
    borderBottomWidth: 0,
    borderTopWidth: 0.5,
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 14,
  },
});
