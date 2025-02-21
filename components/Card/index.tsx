import React, { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  Easing,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import CreditCard from "./card";
import { Image } from "react-native";

const FreezingEffect = () => {
  const [isFrozen, setIsFrozen] = useState(false);
  const freezeAnimation = useRef(new Animated.Value(0)).current;

  const toggleFreezeEffect = () => {
    Animated.timing(freezeAnimation, {
      toValue: isFrozen ? 0 : 1,
      duration: 1000,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();

    setIsFrozen((prev) => !prev);
  };

  const overlayOpacity = freezeAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  return (
    <View style={styles.container}>
      <View style={styles.cardWrapper}>
        <CreditCard />

        {/* Freezing Overlay */}
        <Animated.View
          style={[
            styles.freezeOverlay,
            {
              opacity: overlayOpacity,
            },
          ]}
        >
          <Image
            source={require("@/assets/images/freeze1.png")}
            resizeMode="cover"
            style={styles.freezeImage}
          />
        </Animated.View>
      </View>

      {/* Freeze/Unfreeze Button */}
      <TouchableOpacity style={styles.button} onPress={toggleFreezeEffect}>
        <View style={styles.iconContainer}>
          <Icon
            name="snowflake"
            size={30}
            color={isFrozen ? "red" : "#FFFFFF"}
          />
        </View>
        <Text style={styles.buttonText}>
          {isFrozen ? "unfreeze" : "freeze"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default FreezingEffect;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap:50
  },
  cardWrapper: {
    width: "60%",   
  },
  freezeOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#0d0d0d",
    zIndex: 2,
    borderRadius: 15,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
},
freezeImage: {
    // maxWidth: "100%",
    width: "100%",
    // height: "100%",

    borderRadius: 15,
    opacity: 0.6,
  },
  button: {
    marginTop: 20,
    alignItems: "center",
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    marginTop: 8,
  },
});
