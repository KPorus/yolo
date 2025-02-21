import {
  View,
  Text,
  Pressable,
  ScrollView,
  Image,
  StyleSheet,
  Appearance,
  Dimensions,
} from "react-native";
import React from "react";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors, Theme } from "@/constants/Colors";
import { StatusBar } from "expo-status-bar";
import Btn from "@/components/Buttons/btn";
import Card from "@/components/Card/card";

const index = () => {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.dark;
  const styles = homeStyles(theme);
  return (
    <SafeAreaView id="ts--home-page" style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.heading}>select payment mode</Text>
        <Text style={styles.subtitle}>
          choose your preferred payment method to make payment.
        </Text>

        <View style={styles.btnContainer}>
          <Btn
            title="Pay"
            handlePress={() => console.log("Pay clicked")}
            bgColor="black"
            textColor="white"
          />
          <Btn
            title="Card"
            handlePress={() => console.log("Card clicked")}
            gradientColor="red"
            textColor="red"
          />
        </View>
        <Text style={[styles.subtitle, { textTransform: "uppercase" }]}>
          your digital debit card
        </Text>
        <Card/>
        {/* <Link href="/(tabs)/home" asChild>
            <Pressable>
              <Text style={styles.text}>Profile</Text>
            </Pressable>
          </Link> */}
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default index;

const homeStyles = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    scrollView: {
      marginTop: 26,
      paddingHorizontal: 16,
    },
    card: {
      maxWidth: 380,
      height: 298,
      resizeMode: "contain",
    },
    heading: {
      fontSize: 24,
      color: theme.text,
    },
    subtitle: {
      fontSize: 14,
      fontWeight: "400",
      lineHeight: 24,
      color: theme.text,
      opacity: 0.5,
      marginTop: 16,
    },
    btnContainer: {
      flex: 1,
      flexDirection: "row",
      marginTop: 24,
      gap: 20,
    },
  });
};
