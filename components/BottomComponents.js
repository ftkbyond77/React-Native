import React, { useState } from "react";
import { TouchableOpacity, View, Text, TextInput, Image, Alert } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function BottomComponents() {
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
            <View style={{ padding: 40 }}>
                <View style={{ backgroundColor: "steelblue", width: 350, height: 100, borderRadius: 25, alignSelf: "center", marginBottom: -40 }}>
                    <Text style={{ fontSize: 20, alignSelf: "center", padding: 15, color: "snow" }}>More Drink More Save with FWater!</Text>
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
           
