import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../components/Profile";
import Project from "../screens/Project";
import Payment from "../components/Payment";
import Member from "../components/Member";
import Setting from "../components/Setting";
import Gift from "../components/Gift";
import FeedBack02 from "../components/FeedBack02";
import Logout from "../components/Logout";
import Topup from "../components/Topup";

const Stack = createStackNavigator();

export default function ProjectStack() {
  return (
    <Stack.Navigator initialRouteName="Project">
      <Stack.Screen name="Project" component={Project} options={{ headerShown: false }} />
      <Stack.Screen name="Profile" component={Profile} options={{ title: "Profile" }} />
      <Stack.Screen name="Payment" component={Payment} options={{ title: "Payment and Credit" }} />
      <Stack.Screen name="Member" component={Member} options={{ title: "Member" }} />
      <Stack.Screen name="Setting" component={Setting} options={{ title: "Settings" }} />
      <Stack.Screen name="Gift" component={Gift} options={{ title: "Invite Friends" }} />
      <Stack.Screen name="FeedBack02" component={FeedBack02} options={{ title: "FeedBack 2.0"}} />
      <Stack.Screen name="Logout" component={Logout} options={{ title: false}} />
      <Stack.Screen name="Topup" component={Topup} options={{ title: "Top up"}} />
    </Stack.Navigator>

  );
}