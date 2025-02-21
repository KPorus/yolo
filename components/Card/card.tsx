import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image } from "react-native";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const CreditCard = () => {
  return (
    <View style={styles.cardLayout}>
      <Card style={styles.card}>
        <LinearGradient
          colors={["#000000", "#1a1a1a"]}
          style={styles.gradientBackground}
        >
          {/* Top Logos */}
          <View style={styles.topRow}>
            <Image source={require("@/assets/images/yolo.png")} />
            <Image source={require("@/assets/images/yesbank.png")} />
          </View>

          <View style={styles.secondRow}>
            {/* Card Number */}
            <View style={styles.cardNumberContainer}>
              <Text style={styles.cardNumber}>8124</Text>
              <Text style={styles.cardNumber}>4212</Text>
              <Text style={styles.cardNumber}>3456</Text>
              <Text style={styles.cardNumber}>7890</Text>
            </View>

            {/* Expiry and CVV */}
            <View style={styles.detailsRow}>
              <View>
                <Text style={styles.label}>expiry</Text>
                <Text style={styles.value}>01/28</Text>
              </View>
              <View>
                <Text style={styles.label}>cvv</Text>
                <View style={styles.cvvContainer}>
                  <Text style={styles.value}>****</Text>
                  <Icon name="eye-off" size={20} color="#FF0000" />
                </View>
              </View>
            </View>
          </View>

          {/* Copy Details Button */}
          <TouchableOpacity style={styles.copyButton}>
            <Icon name="content-copy" size={20} color="#FF0000" />
            <Text style={styles.copyText}>copy details</Text>
          </TouchableOpacity>

          {/* RuPay Logo */}
          <View style={styles.rupayContainer}>
            <Image
              source={require("@/assets/images/rupay.png")}
              // style={styles.rupayLogo}
            />
          </View>
        </LinearGradient>
      </Card>
      <Text style={{ color: "#FFF" }}>Freeze</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardLayout: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: "20"
  },
  card: {
    maxWidth: "100%",
    width:"60%",
    borderRadius: 15,
    overflow: "hidden",
    marginVertical: 16,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 14 },
    shadowOpacity: 0.7,
    shadowRadius: 37,
    elevation: 10,
  },
  gradientBackground: {
    padding: 20,
    borderRadius: 15,
    shadowColor: "#FFFFFF",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  secondRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: "center",
  },
  logoText: {
    color: "#FF0000",
    fontSize: 24,
    fontWeight: "bold",
  },
  bankLogo: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  bankText: {
    color: "#0000FF",
    fontSize: 12,
    fontWeight: "bold",
  },
  cardNumberContainer: {
    marginTop: 20,
  },
  cardNumber: {
    color: "#FFFFFF",
    fontSize: 20,
    fontFamily: "monospace",
    letterSpacing: 2,
  },
  detailsRow: {
    marginTop: 20,
    flex:1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  label: {
    color: "#AAAAAA",
    fontSize: 12,
    textTransform:"uppercase"
  },
  value: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  cvvContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  copyButton: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  copyText: {
    color: "#FF0000",
    fontSize: 16,
    marginLeft: 5,
  },
  rupayContainer: {
    marginTop: 30,
    alignItems: "flex-end",
  },
  rupayText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  prepaidText: {
    color: "#FFFFFF",
    fontSize: 12,
  },
});

export default CreditCard;
