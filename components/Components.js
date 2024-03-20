import React, { useState } from "react";
import { TouchableOpacity, View, Text, TextInput, Image, Alert } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Components() {
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
        <View style={{ flex: 1, justifyContent: "space-between", flexDirection: "column" }}>
            <View style={{ flexDirection: "row", padding: 40, justifyContent: "space-around" }}>
                <TouchableOpacity onPress={()=>{ navigation.navigate("Profile"); }}>
                    <View style={{ alignItems: "flex-start", marginTop: 15 }}>
                        <FontAwesome name="user" size={40} color="black"  />
                    </View>
                </TouchableOpacity>
                <View style={{ alignItems: "center", backgroundColor: "snow", padding: 20, borderRadius: 10, width: 250 }}>
                    <TextInput style={{ fontSize: 15 }} keyboardType="numeric" placeholder="Input your Location" value={height} onChangeText={(newHeight) => setHeight(newHeight)} />
                </View>
                <View style={{ alignItems: "flex-end", marginTop: 20 }}>
                    <FontAwesome name="gift" size={40} color="steelblue" />
                </View>
            </View>
            <View style={{flex:1, padding:10, alignItems:"center"}}>
                <Image style={{padding:20, height:10,width:350, marginTop:-30, borderRadius:10}} source={require('../components/boat.jpg')}></Image> 
            </View>
            <View style={{ padding: 40 }}>
                <View style={{ backgroundColor: "steelblue", width: 350, height: 100, borderRadius: 25, alignSelf: "center", marginBottom: -40 }}>
                    <Text style={{ fontSize: 20, alignSelf: "center", padding: 15, color: "snow" }}>Save more for you with FWater!</Text>
                </View>
                <View style={{ backgroundColor: "snow", width: 350, height: 100, borderRadius: 10, alignSelf: "center" }}>
                    <View style={{ backgroundColor: "lightsteelblue", width: 300, height: 50, borderRadius: 10, alignSelf: "center", marginVertical: 10 }}>
                    <TouchableOpacity onPress={onPressButton2}>
                        <Text style={{ fontSize: 20, alignSelf: "center", color: "white", padding: 10 }}>Find a water dispanser!</Text>
                    </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-around", padding: 10, marginTop: -10 }}>
                        <TouchableOpacity onPress={()=>{ navigation.navigate("Member"); }}>
                            <Text style={{ fontSize: 15 }}>Member!       |</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{ navigation.navigate("Payment"); }}>
                            <Text style={{ fontSize: 15 }}>Top up!       |</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{ navigation.navigate("Setting"); }}>
                            <Text style={{ fontSize: 15 }}>Setting</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}
           