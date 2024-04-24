import React from "react";
import { ScrollView,  View, Image, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
const Stack = createStackNavigator();

export default function Profile() {
    const navigation = useNavigation();

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
                </View>
            </View>
            <View style={{flexDirection: "row", padding: 10, justifyContent: "space-around"}}>
                <Text>______________________________________________________________</Text>
            </View>
            <View style={{flexDirection: "row", padding: 10, justifyContent: "space-around"}}>
                <View style={{ backgroundColor: 'lightsteelblue', width : 100, height: 100, borderRadius:15 }}></View>  
                <View style={{ backgroundColor: '#4A90E2', width : 100, height: 100, borderRadius:15 }}></View>  
                <View style={{ backgroundColor: 'steelblue', width : 100, height: 100, borderRadius:15 }}></View>  
            </View>
            <View style={{flexDirection: "row", padding: 10, justifyContent: "space-around"}}>
                <Text>______________________________________________________________</Text>
            </View>
            <TouchableOpacity onPress={()=>{ navigation.navigate("Payment"); }}>
            <View style={{flexDirection: "row", padding: 10, justifyContent: "flex-start", opacity:0.7}}>
                <FontAwesome name="cubes" size={30} color="steelblue" />
                <Text style={{fontSize:18, paddingLeft:-160}}>   Subscriptions!</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{ navigation.navigate("Reward"); }}>
            <View style={{flexDirection: "row", padding: 10, justifyContent: "flex-start", opacity:0.7}}>
                <FontAwesome name="gift" size={30} color="steelblue" />
                <Text style={{fontSize:18, paddingLeft:-160}}>      Rewards</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{ navigation.navigate("Community"); }}>
            <View style={{flexDirection: "row", padding: 10, justifyContent: "flex-start", opacity:0.7}}>
                <FontAwesome name="code" size={30} color="steelblue" />
                <Text style={{fontSize:18, paddingLeft:-160}}>    Community</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{ navigation.navigate("Contact"); }}>
            <View style={{flexDirection: "row", padding: 10, justifyContent: "flex-start", opacity:0.7}}>
                <FontAwesome name="phone" size={30} color="steelblue"  />
                <Text style={{fontSize:18, paddingLeft:-160}}>      Contact us</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{ navigation.navigate("Setting"); }}>
            <View style={{flexDirection: "row", padding: 10, justifyContent: "flex-start", opacity:0.7}}>
                <FontAwesome name="bars" size={30} color="steelblue" />
                <Text style={{fontSize:18, paddingLeft:-160}}>      Setting</Text>
            </View>
            </TouchableOpacity>
            <View style={{flexDirection: "row", padding: 10, justifyContent: "space-around"}}>
                <Text>______________________________________________________________</Text>
            </View>
            <View style={{flexDirection: "row", padding: 10, justifyContent: "space-around", opacity:0.5}}>
                <Text>Thank you for your support us!, I hope this app it's work for you.</Text>
            </View>
            </View>
        </ScrollView>
    );
}