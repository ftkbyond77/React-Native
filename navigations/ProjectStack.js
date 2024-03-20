import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../components/Profile";
import Project from "../screens/Project";
import Payment from "../components/Payment";
import Member from "../components/Member";
import Setting from "../components/Setting";


const Stack = createStackNavigator();

export default function ProjectStack() {
  return (
    <Stack.Navigator initialRouteName="Project">
        <Stack.Screen name="Project" component={Project} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={Profile} options={{ title : "Profile"}} />
        <Stack.Screen name="Payment" component={Payment} options={{ title : "Payment and Credit"}} />
        <Stack.Screen name="Member" component={Member} options={{ title : "Member"}} />
        <Stack.Screen name="Setting" component={Setting} options={{ title : "Settings"}} />
    </Stack.Navigator>
  );
}