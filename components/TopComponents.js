import React, { useState } from "react";
import { TouchableOpacity, View, Text, TextInput, Image, Alert } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function TopComponents() {
    const [height, setHeight] = useState();
    const onPressButton = () => {
        let output = " ";
        setHeight(output);
        console.log(output)

    }

    const onPressButton2 = () => {
        let output2 = "Open your camera for scanning";
        Alert.alert(output2);
        console.log("Rectangle1");

    }

    const navigation = useNavigation();


    return (
        <View style={{justifyContent: "space-between", flexDirection: "column" }}>
            <View style={{ flexDirection: "row", padding: 40, justifyContent: "space-around" }}>
                <TouchableOpacity onPress={()=>{ navigation.navigate("Profile"); }}>
                    <View style={{ alignItems: "flex-start", marginTop: 15, marginRight: 15}}>
                        <FontAwesome name="user" size={40} color="black"  />
                    </View>
                </TouchableOpacity>
                <View style={{ alignItems: "center", backgroundColor: "snow", padding: 20, borderRadius: 10, width: 250 }}>
                    <TextInput style={{ fontSize: 15 }} keyboardType="numeric" placeholder="Input your Location" value={height} onChangeText={(newHeight) => setHeight(newHeight)} />
                </View>
                <TouchableOpacity onPress={()=>{ navigation.navigate("Gift"); }}>
                <View style={{ alignItems: "flex-end", marginTop: 20 , marginLeft:15}}>
                    <FontAwesome name="gift" size={40} color="steelblue" />
                </View>
                </TouchableOpacity>
            </View>
            <View style={{flex:1, padding:10, alignItems:"center"}}>
                <Image style={{padding:20, height:10,width:350, marginTop:-30, borderRadius:10}} source={require('../components/boat.jpg')}></Image> 
            </View>
            </View>
    );
}