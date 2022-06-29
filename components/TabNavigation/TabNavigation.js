import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { StyleSheet } from "react-native";
import DailyLog from "../../views/DailyLog";
import History from "../../views/History";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: "100%",
    backgroundColor: "#0D0D0D",
  },
});

const Tab = createMaterialTopTabNavigator();
const screenOptions = {};

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
      <Tab.Screen name="Daily Log" component={DailyLog} />
      <Tab.Screen name="History" component={History} />
    </Tab.Navigator>
  );
}
