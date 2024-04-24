import React from "react";
import { ScrollView,  View, Image, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
const Stack = createStackNavigator();

export default function Reward() {

    return (
        <ScrollView>
            <View style={{flex: 1}}>
                <View style={{ flexDirection : "row"}}>
                    <Image style={{ flex : 1 , resizeMode : "cover", aspectRatio : 4/2 }} source={require("../assets/AllPhoto/Muse.jpg")} />
                </View>
                <View style={{flex: 1}}>
                    <View style={{flexDirection: "row", padding: 10, justifyContent: "space-around"}}>
                        <TouchableOpacity>
                        <View style={{ backgroundColor: 'lightsteelblue', width : 100, height: 45, borderRadius:15 }}> 
                        <Text style={{fontSize: 17, padding:10, alignSelf:"center", color:"#053C66"}}>Challenge</Text>
                        </View> 
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <View style={{ backgroundColor: 'lightsteelblue', width : 100, height: 45, borderRadius:15 }}>
                        <Text style={{fontSize: 17, padding:10, alignSelf:"center", color:"#053C66"}}>Badges</Text>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <View style={{ backgroundColor: 'lightsteelblue', width : 100, height: 45, borderRadius:15 }}>
                        <Text style={{fontSize: 17, padding:10, alignSelf:"center", color:"#053C66"}}>Rewards</Text>
                        </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:"row", alignSelf:"flex-end"}}>
                        <View style={{ backgroundColor: '#01F619', width : 100, height: 12.5, borderRadius:15, marginRight:30, marginTop:-8}}></View>
                    </View>
                    <View style={{ flexDirection: "row", padding: 10, marginLeft:25, width:400}}>
                        <Image style={{ width: 50, height: 50, borderRadius: 50 / 2 }} source={require("../assets/AllPhoto/Queen.jpg")} />
                        <View style={{ paddingLeft: 10 }}>
                            <Text style={{ fontSize: 20 }}>Oasis</Text>
                            <Text style={{ color: "gray" }}>You got the rock and roll!</Text>
                        </View>
                        <TouchableOpacity>
                        <View style={{backgroundColor:"lightgreen", borderRadius:15, width:85, height:40 ,marginLeft:80}}>
                            <Text style={{fontSize:15, alignSelf:'center', marginTop:8.5}}>Take it</Text>
                        </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", padding: 10, marginLeft:25}}>
                        <Image style={{ width: 50, height: 50, borderRadius: 50 / 2 }} source={require("../assets/AllPhoto/LiamProfile.jpg")} />
                        <View style={{ paddingLeft: 10 }}>
                            <Text style={{ fontSize: 20 }}>Oasis</Text>
                            <Text style={{ color: "gray" }}>You got the rock and roll!</Text>
                        </View>
                        <TouchableOpacity>
                        <View style={{backgroundColor:"lightgreen", borderRadius:15, width:85, height:40 ,marginLeft:80}}>
                            <Text style={{fontSize:15, alignSelf:'center', marginTop:8.5}}>Take it</Text>
                        </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", padding: 10, marginLeft:25}}>
                        <Image style={{ width: 50, height: 50, borderRadius: 50 / 2 }} source={require("../assets/AllPhoto/Slideway.jpg")} />
                        <View style={{ paddingLeft: 10 }}>
                            <Text style={{ fontSize: 20 }}>Oasis</Text>
                            <Text style={{ color: "gray" }}>You got the rock and roll!</Text>
                        </View>
                        <TouchableOpacity>
                        <View style={{backgroundColor:"lightgreen", borderRadius:15, width:85, height:40 ,marginLeft:80}}>
                            <Text style={{fontSize:15, alignSelf:'center', marginTop:8.5}}>Take it</Text>
                        </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", padding: 10, marginLeft:25}}>
                        <Image style={{ width: 50, height: 50, borderRadius: 50 / 2 }} source={require("../assets/AllPhoto/OKcomputer.jpg")} />
                        <View style={{ paddingLeft: 10 }}>
                            <Text style={{ fontSize: 20 }}>Oasis</Text>
                            <Text style={{ color: "gray" }}>You got the rock and roll!</Text>
                        </View>
                        {/* ก้อนสีเทา */}
                        <View style={{backgroundColor:"gray", borderRadius:15, width:85, height:40 ,marginLeft:80}}>
                            <Text style={{fontSize:15, alignSelf:'center', marginTop:8.5}}>Take it</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", padding: 10, marginLeft:25}}>
                        <Image style={{ width: 50, height: 50, borderRadius: 50 / 2 }} source={require("../assets/AllPhoto/muse2.jpg")} />
                        <View style={{ paddingLeft: 10 }}>
                            <Text style={{ fontSize: 20 }}>Oasis</Text>
                            <Text style={{ color: "gray" }}>You got the rock and roll!</Text>
                        </View>
                        {/* ก้อนสีเทา */}
                        <View style={{backgroundColor:"gray", borderRadius:15, width:85, height:40 ,marginLeft:80}}>
                            <Text style={{fontSize:15, alignSelf:'center', marginTop:8.5}}>Take it</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", padding: 10, marginLeft:25}}>
                        <Image style={{ width: 50, height: 50, borderRadius: 50 / 2 }} source={require("../assets/AllPhoto/Days.jpg")} />
                        <View style={{ paddingLeft: 10 }}>
                            <Text style={{ fontSize: 20 }}>Oasis</Text>
                            <Text style={{ color: "gray" }}>You got the rock and roll!</Text>
                        </View>
                        <TouchableOpacity>
                        <View style={{backgroundColor:"lightgreen", borderRadius:15, width:85, height:40 ,marginLeft:80}}>
                            <Text style={{fontSize:15, alignSelf:'center', marginTop:8.5}}>Take it</Text>
                        </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", padding: 10, marginLeft:25}}>
                        <Image style={{ width: 50, height: 50, borderRadius: 50 / 2 }} source={require("../assets/AllPhoto/LiamProfile.jpg")} />
                        <View style={{ paddingLeft: 10 }}>
                            <Text style={{ fontSize: 20 }}>Oasis</Text>
                            <Text style={{ color: "gray" }}>You got the rock and roll!</Text>
                        </View>
                        <TouchableOpacity>
                        <View style={{backgroundColor:"lightgreen", borderRadius:15, width:85, height:40 ,marginLeft:80}}>
                            <Text style={{fontSize:15, alignSelf:'center', marginTop:8.5}}>Take it</Text>
                        </View>
                        </TouchableOpacity>
                    </View>
            </View>
            </View>
        </ScrollView>
    );
}