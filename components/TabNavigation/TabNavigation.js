import { useState } from "react";
import { StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import DailyLog from "../../views/DailyLog";
import History from "../../views/History";
import useToggle from "../../hooks/useToggle";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: "100%",
    backgroundColor: "#0D0D0D",
  },
});

const Tab = createMaterialTopTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName={"Daily Log"}
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarIndicatorStyle: {
          backgroundColor: "#B5AFE7",
          height: 3,
        },
        tabBarLabelStyle: { fontSize: 15 },
        tabBarStyle: {
          height: 50,
          backgroundColor: "#0D0D0D",
        },
      }}
    >
      <Tab.Screen name="Daily Log" children={() => <DailyLog />} />
      <Tab.Screen name="History" children={() => <History />} />
    </Tab.Navigator>
  );
}
