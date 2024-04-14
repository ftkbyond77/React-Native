import React, { useEffect, useState } from 'react';
import { View, FlatList , TouchableOpacity, Text, ScrollView, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

// import { useNavigation } from '@react-navigation/native';

export default function Logout() {
    const [user, setUser] = useState();
    const onPressButton1 = () => {
        let output_1 = " ";
        setUser(output_1);
        console.log(output_1)

    }

    const [pass, setPass] = useState();
    const onPressButton2 = () => {
        let output_2 = " ";
        setPass(output_2);
        console.log(output_2)

    }
    return (
            <View style={{flex: 1}}>
            <View style={{ flexDirection: "row", padding: 40, justifyContent: "space-around" }}>
                <View style={{ alignItems: "flex-start", marginTop: 15 }}>
                    <FontAwesome name="user" size={40} color="black"  />
                </View>
            </View>
            <View style={{ flex:1 , backgroundColor:"snow"}}>
                    <View style={{ alignSelf: "center", backgroundColor: "snow", padding: 20, borderRadius: 10, width: 350 , elevation: 5, borderWidth:3 , borderColor:'lightblue'}}>
                        <TextInput style={{ fontSize: 15 }} keyboardType="numeric" placeholder="Username" value={user} onChangeText={(newUser) => setUser(newUser)} />
                    </View>

                    <View style={{ alignSelf: "center", backgroundColor: "snow", padding: 20, borderRadius: 10, width: 350, marginTop:20, elevation: 5, borderWidth:3, borderColor:'lightblue'}}>
                        <TextInput style={{ fontSize: 15 }} keyboardType="numeric" placeholder="Password" value={pass} onChangeText={(newPass) => setPass(newPass)} />
                    </View>
                    <View style={{ backgroundColor: "steelblue", width: 350, height:60, borderRadius: 10, alignSelf: "center" , padding:10, marginTop:50, shadowOpacity: 0.50, shadowRadius: 3.84, elevation: 5,}}>
                        <Text style={{fontSize:20, color:"snow", alignSelf:"center", marginTop:7}}>Log In</Text>
                    </View>
                    <Text style={{ fontSize: 12, alignSelf: "flex-start", color: "gray", padding: 10, marginLeft:40}}>Forgot Password</Text>
                    <View style={{ backgroundColor: "snow", width: 350, height:60, borderRadius: 10, alignSelf: "center" , padding:10, marginTop:50, shadowOpacity: 0.50, shadowRadius: 3.84, elevation: 5, borderWidth:2 ,borderColor:'steelblue'}}>
                        <Text style={{fontSize:20, color:"steelblue", alignSelf:"center", marginTop:7}}>Login with Facebook</Text>
                    </View>

            </View>
            <View style={{flexDirection: "row", justifyContent:"center"}}>
            <Text style={{ fontSize: 12, alignSelf: "center", color: "gray", padding: 10}}>Do not have an account? </Text>
            <Text style={{ fontSize: 12, alignSelf: "center", color: "steelblue", padding: 10, textDecorationLine:'underline'}}>Sign Up</Text>


            </View>
            <View style={{flexDirection: "row", padding: 5, justifyContent: "space-around"}}>
                <Text>______________________________________________________________</Text>
            </View>
            </View>
    );
}

// 275