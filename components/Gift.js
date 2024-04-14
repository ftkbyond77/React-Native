import React, { useEffect, useState } from 'react';
import { View, FlatList , TouchableOpacity, Text, ScrollView  } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

// import { useNavigation } from '@react-navigation/native';

export default function Gift() {
    // const navigation = useNavigation();
    return (
        <View style={{ flex: 1 , backgroundColor:"lightsteelblue", justifyContent:"center"}}>
            <View style={{alignSelf:"center", backgroundColor:"white", width:400, height:400, borderRadius:15}}>
            <Text style={{ fontSize: 20, alignSelf: "center", color: "black", padding:10}}>Invite Friends to FWater</Text>
            <Text style={{ fontSize: 13, alignSelf: "center", color: "gray", padding:10}}>Invite your friends to drink with FWater, and they will receive a $4 discount ccoupon. Once they complete their first trip, you'll receive a $4 discount coupon from us too!</Text>
            <Text style={{ fontSize: 15, alignSelf: "center", color: "black", padding:10}}>More invites, more rewards!</Text>
            <Text style={{alignSelf: "center", padding: 10}}>_________________________________________________________</Text>
            <Text style={{ fontSize: 13, alignSelf: "center", color: "gray", padding:10}}>Help our world with the FWater app by reusing and reducing plastic waste from around the globe. With your hands and your friends', invite them today to join and receive discounts. Share now from the link below!</Text>
            <TouchableOpacity>
                    <View style={{backgroundColor: "steelblue", width: 350, height: 100, borderRadius: 25, alignSelf: "center", marginTop:10}}> 
                        <Text style={{ fontSize: 20, alignSelf: "center", color: "white", padding: 10 }}>Discount 20%</Text>
                        <Text style={{ fontSize: 15, alignSelf: "center", color:"white"}}>Share Invite Code: TUFAIR2024</Text>
                    </View>
            </TouchableOpacity>
            </View>
        </View>
    );
}

// 275