import React from "react";
import { View, StyleSheet, Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { HapticTab } from "@/components/HapticTab";
import { TabBarCurve } from "@/components/TabCurve/TabBarCurve";

interface TabIconProps {
  icon: React.ReactNode;
}

const TabIcon: React.FC<TabIconProps> = ({ icon }) => {
  return <View style={styles.iconContainer}>{icon}</View>;
};

const TabLayout: React.FC = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#FFFFFF",
        tabBarInactiveTintColor: "rgba(255, 255, 255, 0.51)",
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: () => (
          <View style={styles.tabBarBackground}>
            <TabBarCurve />
          </View>
        ),
        tabBarStyle: {
          width: "100%",
          backgroundColor: "#0d0d0d",
          borderTopWidth: 0,
          height: 100,
          position: "absolute",
          bottom: 0,
          overflow: "hidden",
        },
        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: "500",
          marginTop: 2,
          position: "relative",
          bottom: -20,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({
            color,
            focused,
          }: {
            color: string;
            focused: boolean;
          }) => (
            <Animated.View
              style={[
                styles.tabWrapper,
                focused && styles.activeTab,
              ]}
            >
              <LinearGradient
                colors={["transparent", "transparent"]}
                style={styles.gradientBorder}
              >
                <TabIcon
                  icon={
                    <AntDesign
                      name="home"
                      size={focused ? 32 : 24}
                      color={
                        focused ? "#FFFFFF" : "rgba(255, 255, 255, 0.51)"
                      }
                    />
                  }
                />
              </LinearGradient>
            </Animated.View>
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "Scan",
          tabBarIcon: ({
            color,
            focused,
          }: {
            color: string;
            focused: boolean;
          }) => (
            <Animated.View
              style={[
                styles.tabWrapper,
                focused && styles.activeTab,
              ]}
            >
              <LinearGradient
                colors={["transparent", "transparent"]}
                style={styles.gradientBorder}
              >
                <TabIcon
                  icon={
                    <AntDesign
                      name="qrcode"
                      size={focused ? 32 : 24}
                      color={
                        focused ? "#FFFFFF" : "rgba(255, 255, 255, 0.51)"
                      }
                    />
                  }
                />
              </LinearGradient>
            </Animated.View>
          ),
        }}
      />
      <Tabs.Screen
        name="gini"
        options={{
          title: "Gini",
          tabBarIcon: ({
            color,
            focused,
          }: {
            color: string;
            focused: boolean;
          }) => (
            <Animated.View
              style={[
                styles.tabWrapper,
                focused && styles.activeTab,
              ]}
            >
              <LinearGradient
                colors={["transparent", "transparent"]}
                style={styles.gradientBorder}
              >
                <TabIcon
                  icon={
                    <AntDesign
                      name="setting"
                      size={focused ? 32 : 24}
                      color={
                        focused ? "#FFFFFF" : "rgba(255, 255, 255, 0.51)"
                      }
                    />
                  }
                />
              </LinearGradient>
            </Animated.View>
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;

const styles = StyleSheet.create({
  tabWrapper: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    bottom: -15,
    padding: 5,
  },
  activeTab: {
    borderWidth: 1,
    borderColor: "#FFFFFF",
    borderRadius: 50,
  },
  gradientBorder: {
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    padding: 4,
  },
  tabBarBackground: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});
