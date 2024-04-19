import React, { useEffect, useState } from 'react';
import { View, FlatList , TouchableOpacity, Text, ScrollView, Image  } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

// import { useNavigation } from '@react-navigation/native';

export default function Topup() {
    
    // const navigation = useNavigation();
    return (
        <View style={{flex: 1, backgroundColor:"#E1EEF2"}}>
                <View style={{marginTop:25, marginLeft:50}}>
                    <Text style={{fontSize:17, color:"black", textDecorationLine:'underline', fontWeight:'bold', fontStyle:'italic'}}>For your package</Text>
                </View>
                <View style={{backgroundColor:"snow", width: 350, height: 300, borderRadius: 10, alignSelf: "center" , padding:10, marginTop:20, shadowOpacity: 0.50, shadowRadius: 3.84, elevation: 5}}>
                    <View style={{ backgroundColor: "steelblue", width: 350, height: 100, borderRadius: 10, alignSelf: "center" , padding:10, shadowOpacity: 0.50, shadowRadius: 3.84, elevation: 5,}}>
                        <View style={{marginTop:12.5}}>
                        <Text style={{fontSize:17, color:"snow"}}>Premium</Text>
                        <Text style={{fontSize:23, color:"snow", fontWeight:'bold'}}>For Student</Text>
                        </View>
                        <View style={{width:100, height:50, borderRadius: 10, alignSelf:"flex-end", marginTop: -62.5}}>
                            <View style={{marginTop:12.5}}>
                            <Text style={{fontSize:17, color:"snow", fontWeight:'bold'}}>          20</Text>
                            <Text style={{fontSize:17, color:"snow", fontWeight:'bold'}}>Bath/Month</Text>
                            </View>
                        </View>
                    </View>
                        <View style={{marginTop:12.5}}>
                            <Text style={{fontSize:17, color:"black", fontStyle:'italic'}}>Total                                                      20 Bath</Text>
                            <Text style={{fontSize:17, color:"black", fontStyle:'italic'}}>Start on 17 April 2024</Text>
                            <View style={{padding:10}}>
                            <Text style={{fontSize:17, color:"black", fontStyle:'italic'}}>--&gt;  The system will attempt to collect the service fee again on 17 May 2024.</Text>
                            <Text style={{fontSize:17, color:"black", fontStyle:'italic'}}>--&gt;  You can cancel at any time, in accordance with the terms of the offer.</Text>
                            </View>
                        </View>
                </View>
                <TouchableOpacity>
                <View style={{backgroundColor:"snow", width: 350, height: 100, borderRadius: 10, alignSelf: "center" , padding:10, marginTop:20, shadowOpacity: 0.50, shadowRadius: 3.84, elevation: 5}}>
                    <View style={{ alignItems: "flex-start", marginTop: 10 , shadowOpacity: 0.50}}>
                        <FontAwesome name="circle" size={20} color="steelblue"  />
                    </View>
                    <View style={{flex:1, marginTop:35, marginLeft: 25}}>
                        <View style={{flex:1, marginTop:-60, marginLeft: 40}}>
                            <Text style={{fontSize:17, color:'black', fontWeight:'bold'}}>PromptPay</Text>
                        </View>
                        <Image style={{ padding:20,height:25, width:150, marginBottom:5,borderRadius:10, resizeMode:'contain', marginLeft:25}} source={require('../components/promptpay.png')}></Image> 
                    </View>
                </View>
                </TouchableOpacity>
                <TouchableOpacity>
                <View style={{backgroundColor:"snow", width: 350, height: 100, borderRadius: 10, alignSelf: "center" , padding:10, marginTop:20, shadowOpacity: 0.50, shadowRadius: 3.84, elevation: 5}}>
                <View style={{ alignItems: "flex-start", marginTop: 10 , shadowOpacity: 0.50}}>
                        <FontAwesome name="circle" size={20} color="steelblue"  />
                    </View>
                    <View style={{flex:1, marginTop:35, marginLeft: 25}}>
                        <View style={{flex:1, marginTop:-60, marginLeft: 40}}>
                            <Text style={{fontSize:17, color:'black', fontWeight:'bold'}}>Credit Card/Debiit Card</Text>
                        </View>
                        <Image style={{ padding:20,height:25, width:150, marginBottom:5,borderRadius:10, resizeMode:'contain', marginLeft:35}} source={require('../components/CreditDebit.png')}></Image> 
                    </View>
                </View>
                </TouchableOpacity>
        </View>
    );
}