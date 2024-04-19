import React from "react";
import { ScrollView,  View, Image, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
const Stack = createStackNavigator();

export default function Payment() {
    const navigation = useNavigation();
    
    return (
        <ScrollView>
            <View style={{flex: 1}}>
                <View style={{ backgroundColor: "steelblue", width: 350, height: 100, borderRadius: 10, alignSelf: "center" , padding:10, marginTop:20, shadowOpacity: 0.50, shadowRadius: 3.84, elevation: 5,}}>
                    <Text style={{fontSize:17, color:"snow"}}>FWater Credit (bath)</Text>
                    <Text style={{fontSize:23, color:"snow", padding:15}}>87.00</Text>
                    <TouchableOpacity onPress={()=>{ navigation.navigate("Topup"); }}>
                    <View style={{backgroundColor: "snow", width:100, height:50, borderRadius: 10, alignSelf:"flex-end", marginTop: -50}}>
                        <Text style={{fontSize:17, color:"steelblue", alignSelf:"center", padding:12}}>Top up!</Text>
                    </View>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: "row", padding: 10, justifyContent: "space-around"}}>
                    <Text>______________________________________________________________</Text>
                </View>
                <View style={{flexDirection: "row", padding: 10, justifyContent: "center"}}>
                    <Text style={{fontSize:20, color:"steelblue"}}>FWater</Text>
                </View>
                <ScrollView horizontal={true} style={{ flexDirection: "row"}}>
                <View style={{ flexDirection: "row", padding:10 }}>
                    <Image style={{ width:250, height:150}} source={{uri:"https://i.pinimg.com/originals/a4/aa/19/a4aa197f654ce6fb53b612111082eeb3.jpg"}} />
                </View>
                <View style={{ flexDirection: "row", padding:10 }}>
                    <Image style={{ width:250, height:150}} source={{uri:"https://i.pinimg.com/originals/f0/86/05/f08605c72c6efcebb88da5799d7a4aa7.jpg"}} />
                </View>
                <View style={{ flexDirection: "row", padding:10 }}>
                    <Image style={{ width:250, height:150}} source={{uri:"https://anastasiablogger.com/wp-content/uploads/2018/11/ddc5138c1cb701dd4bb1a356a8b39c12.jpg?epik=dj0yJnU9WHlmZjdPNmliSlU3a3ZPZUNXLTJPYzE1eGJpOHF6dlgmcD0wJm49YldCTk9zczl4LWhKSUJmcDJUX3A1ZyZ0PUFBQUFBR1g2eGxN"}} />
                </View>
                </ScrollView>
                <TouchableOpacity>
                <View style={{flexDirection: "row", padding: 10, justifyContent: "flex-start"}}>
                    <Text style={{fontSize:17, color:"gray"}}>My Coupons</Text>
                </View>
                </TouchableOpacity>
                <View style={{flexDirection: "row", justifyContent: "space-around", opacity:0.3}}>
                    <Text>______________________________________________________________</Text>
                </View>
                <TouchableOpacity>
                <View style={{flexDirection: "row", padding: 10, justifyContent: "flex-start"}}>
                    <Text style={{fontSize:17, color:"gray"}}>Account Details</Text>
                </View>
                </TouchableOpacity>
                <View style={{flexDirection: "row", justifyContent: "space-around", opacity:0.3}}>
                    <Text>______________________________________________________________</Text>
                </View>
                <TouchableOpacity>
                <View style={{flexDirection: "row", padding: 10, justifyContent: "flex-start"}}>
                    <Text style={{fontSize:17, color:"gray"}}>Payments</Text>
                </View>
                </TouchableOpacity>
                <View style={{flexDirection: "row", justifyContent: "space-around", opacity:0.3}}>
                    <Text>______________________________________________________________</Text>
                </View>
                <TouchableOpacity>
                <View style={{flexDirection: "row", padding: 10, justifyContent: "flex-start"}}>
                    <Text style={{fontSize:17, color:"gray"}}>Monthly Transactions</Text>
                </View>
                </TouchableOpacity>
                <View style={{flexDirection: "row", justifyContent: "space-around", opacity:0.3}}>
                    <Text>______________________________________________________________</Text>
                </View>
            </View>
        </ScrollView>
    );
}