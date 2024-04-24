import React from 'react';
import { ScrollView, Text, View, Image} from 'react-native';

export default function Contact() {
    return (
        <ScrollView>
        <View style={{ padding : 20  }}>
            {/* View ก้อนที่ 1 */}
            <View style={{ flexDirection : "row"}}>
                <Image style={{ flex : 1 , resizeMode : "cover", aspectRatio : 4/2 }} source={require("../assets/AllPhoto/ViewLiam.jpg")} />
            </View>
            {/* View ก้อนที่ 2 */}
            <View style={{ padding : 10 }}>
                <Text style={{ fontSize : 20 }}>Contact Us with the information below</Text>
                <Text style={{ color : '#444444' }}>To complete the information, make sure you fill a budget already.</Text>
            </View>
            {/* View ก้อนที่ 3 */}
            <View style={{ padding : 10 }}>
                <Text style={{ fontSize : 15, fontWeight:'bold'}}>Email</Text>
                <Text style={{ color : '#444444' }}>MichaelJackson23@dome.tu.ac.th</Text>
                <Text style={{ color : '#444444' }}>ManuelNeuer@dome.tu.ac.th</Text>
                <Text style={{ color : '#444444' }}>MIsacNewton@gmail.com</Text>
            </View>
            {/* View ก้อนที่ 4 */}
            <View style={{ padding : 10 }}>
                <Text style={{ fontSize : 15, fontWeight:'bold'}}>Facebook</Text>
                <Text style={{ color : '#444444' }}>FWater Thailand 2.0</Text>
                <Text style={{ color : '#444444' }}>FWater Online Metaverse</Text>
            </View>
            {/* View ก้อนที่ 5 */}
            <View style={{ padding : 10 }}>
                <Text style={{ fontSize : 15, fontWeight:'bold'}}>Instagram</Text>
                <Text style={{ color : '#444444' }}>FWater_inUniverse</Text>
                <Text style={{ color : '#444444' }}>FWaterICT</Text>
            </View>
            {/* View ก้อนที่ 6 */}
            <View style={{ padding : 10 }}>
                <Text style={{ fontSize : 15, fontWeight:'bold'}}>Line</Text>
                <Text style={{ color : '#444444' }}>FWater_idrink</Text>
            </View>
            <View style={{flexDirection: "row", padding: 10, justifyContent: "space-around"}}>
                <Text>___________________________________________________________</Text>
            </View>
        </View> 
        </ScrollView>  
    );
}

