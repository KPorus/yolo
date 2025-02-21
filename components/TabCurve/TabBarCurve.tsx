import { StyleSheet, View } from "react-native";
import Svg, { Path, Defs, Stop, LinearGradient } from "react-native-svg";
export const TabBarCurve = () => (
  <View style={styles.curveContainer}>
    <Svg width="100%" height="15" viewBox="0 0 400 15">
      <Defs>
        <LinearGradient
          id="gradientBorder"
          gradientUnits="userSpaceOnUse"
          x1="0"
          y1="0"
          x2="0"
          y2="10"
        >
          <Stop offset="0%" stopColor="white" />
          <Stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
        </LinearGradient>
      </Defs>
      <Path
        d="M0,10 C130,-9 450,8 400,10"
        // d="M0,10 C50,-10 350,-10 400,10"
        stroke="url(#gradientBorder)"
        strokeWidth="1"
        fill="none"
      />
    </Svg>
  </View>
);


// Styles
const styles = StyleSheet.create({
  curveContainer: {
    position: "absolute",
    top: -1, // Ensures no gap between curve and tab bar
    width: "100%",
  }
});
