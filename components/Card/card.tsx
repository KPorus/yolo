import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { Image } from "react-native";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { fakeCreditUser } from "../Dummy/getCredit";

const CreditCard = () => {
  const [open, setOpen] = useState(false);
  const data = fakeCreditUser;
  const cardNumber: string[] = data.creditCardNumber.split("-");
  const toggleEffect =()=>{
    setOpen((prev) => !prev);
  }
  return (
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
          <View style={styles.cardNumberContainer}>
            {cardNumber.map((number, index) => (
              <Text key={index} style={styles.cardNumber}>
                {number}
              </Text>
            ))}
          </View>

          {/* Expiry and CVV */}
          <View style={styles.detailsRow}>
            <View>
              <Text style={styles.label}>expiry</Text>
              <Text style={styles.value}>{data.expirationDate}</Text>
            </View>
            <View>
              <Text style={styles.label}>cvv</Text>
              <TouchableOpacity
                style={styles.cvvContainer}
                onPress={toggleEffect}
              >
                <Text style={styles.value}>{open ? data.cvv : "***"}</Text>
                <Icon
                  name={open ? "eye" : "eye-off"}
                  size={20}
                  color="#FF0000"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Copy Details Button */}
        <TouchableOpacity style={styles.copyButton} onPress={()=>{alert("Copy successfull")}}>
          <Icon name="content-copy" size={20} color="#FF0000" />
          <Text style={styles.copyText}>copy details</Text>
        </TouchableOpacity>

        {/* RuPay Logo */}
        <View style={styles.rupayContainer}>
          <Image source={require("@/assets/images/rupay.png")} />
        </View>
      </LinearGradient>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    borderRadius: 15,
    overflow: "hidden",
    marginVertical: 16,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 14 },
    shadowOpacity: 0.7,
    shadowRadius: 37,
    elevation: 10,
    zIndex:1
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
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  label: {
    color: "#AAAAAA",
    fontSize: 12,
    textTransform: "uppercase",
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
