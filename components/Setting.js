import React from "react";
import { ScrollView,  View, Image, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

export default function Setting() {
    return (
        <ScrollView>
            <View style={{flex: 1}}>
            <View style={{ flexDirection: "row", padding: 40, justifyContent: "space-around" }}>
                <View style={{ alignItems: "flex-start", marginTop: 15 }}>
                    <FontAwesome name="gear" size={40} color="black"  />
                </View>
            </View>
            <View style={{ flexDirection: "row", padding: 10, justifyContent: "space-around" }}>
                <View style={{ alignItems: "center", marginTop: -40 }}>
                    <Text>Settings</Text>
                </View>
            </View>
            <View style={{flexDirection: "row", padding: 10, justifyContent: "space-around"}}>
                <Text>______________________________________________________________</Text>
            </View>
            <TouchableOpacity>
            <View style={{flexDirection: "row", padding: 10, justifyContent: "flex-start"}}>
                    <Text style={{fontSize:17, color:"gray"}}>Profile</Text>
                    <FontAwesome name="code" size={20} color="gray" style={{ marginLeft: 320 }} />
                </View>
            </TouchableOpacity>
            <View style={{flexDirection: "row", padding: 10, justifyContent: "space-around"}}>
                <Text>______________________________________________________________</Text>
            </View>
            <TouchableOpacity>
            <View style={{flexDirection: "row", padding: 10, justifyContent: "flex-start"}}>
                    <Text style={{fontSize:17, color:"gray"}}>Version</Text>
                    <Text style={{fontSize:17, color:"gray", marginLeft:300}}>0.0.01</Text>
                </View>
            </TouchableOpacity>
            <View style={{flexDirection: "row", padding: 10, justifyContent: "space-around"}}>
                <Text>______________________________________________________________</Text>
            </View>
            <TouchableOpacity>
            <View style={{flexDirection: "row", padding: 10, justifyContent: "flex-start"}}>
                    <Text style={{fontSize:17, color:"gray"}}>Feedback</Text>
                    <FontAwesome name="code" size={20} color="gray" style={{ marginLeft: 300 }} />
                </View>
            </TouchableOpacity>
            <View style={{flexDirection: "row", padding: 10, justifyContent: "space-around"}}>
                <Text>______________________________________________________________</Text>
            </View>
            <TouchableOpacity>
            <View style={{flexDirection: "row", padding: 10, justifyContent: "flex-start"}}>
                    <Text style={{fontSize:17, color:"gray"}}>Language</Text>
                    <FontAwesome name="code" size={20} color="gray" style={{ marginLeft: 300 }} />
                </View>
            </TouchableOpacity>
            <View style={{flexDirection: "row", padding: 10, justifyContent: "space-around"}}>
                <Text>______________________________________________________________</Text>
            </View>
            <TouchableOpacity>
            <View style={{ backgroundColor: "steelblue", width: 300, height: 60, borderRadius: 10, alignSelf: "center" , padding:10, marginTop:100, shadowOpacity: 0.50, shadowRadius: 3.84, elevation: 5,}}>
                    <Text style={{fontSize:20, color:"snow", alignSelf:"center", marginTop:7}}>Log Out</Text>
                </View>
            </TouchableOpacity>
            </View>

        </ScrollView>
    );
}