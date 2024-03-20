import React from "react";
import { View, Text, Dimensions, ImageBackground, ScrollView } from "react-native";
import Components from "../components/Components";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../components/Profile";

const stack = createStackNavigator();


export default function Project() {
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;
    return (
            <View style={{flex:1}}>
                <ImageBackground style={{ flex: 1,position:"absolute",top:0,left:0, width: screenWidth, height: screenHeight, opacity:0.5}} source={require('../components/LosSantos.jpg')} />
                    <Components />
            </View>

    );
}




