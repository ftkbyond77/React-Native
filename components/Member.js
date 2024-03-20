import React from "react";
import { ScrollView,  View, Image, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

export default function Member() {
    return (
        <ScrollView>
            <View style={{flex: 1}}>
            <View style={{ flexDirection: "row", padding: 40, justifyContent: "space-around" }}>
                <View style={{ alignItems: "flex-start", marginTop: 15 }}>
                    <FontAwesome name="user" size={40} color="black"  />
                </View>
            </View>
            <View style={{ flexDirection: "row", padding: 10, justifyContent: "space-around" }}>
                <View style={{ alignItems: "center", marginTop: -40 }}>
                    <Text>ID: username</Text>
                    <Text>Gmail: abc_def@dome.tu.ac.th</Text>
                    <Text style={{fontSize: 20, color:"goldenrod", textDecorationLine: 'underline'}}>Premeium</Text>
                </View>
            </View>
            <View style={{flexDirection: "row", padding: 10, justifyContent: "space-around"}}>
                <Text>______________________________________________________________</Text>
            </View>
            <View style={{flexDirection: "column", padding: 15, justifyContent: "space-around", alignItems:"center"}}>
                <Text style={{fontSize: 17, color:"goldenrod", textDecorationLine: 'underline'}}>no ads</Text>
                <Text style={{fontSize: 17, color:"goldenrod", textDecorationLine: 'underline'}}>Accessing to all area</Text>
                <Text style={{fontSize: 17, color:"goldenrod", textDecorationLine: 'underline'}}>No need to top up once</Text>
                <Text style={{fontSize: 17, color:"goldenrod", textDecorationLine: 'underline'}}>Access to all features</Text>
                <Text style={{fontSize: 17, color:"goldenrod", textDecorationLine: 'underline'}}>Others</Text>
            <View style={{flexDirection: "row", padding: 10, justifyContent: "space-around"}}>
                <Text>____________________________________________________________</Text>
            </View>
            <View style={{ flexDirection: "row", padding: 40, justifyContent: "space-around" }}>
                <View style={{ alignItems: "flex-start", marginTop: 15 }}>
                    <FontAwesome name="terminal" size={40} color="black"  />
                </View>
            </View>
            </View>
            </View>
        </ScrollView>
    );
}