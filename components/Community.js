import React from 'react';
import { ScrollView, Text, View, Image} from 'react-native';

export default function Community() {
    return (
        <ScrollView>
        <View style={{ padding : 20  }}>
            {/* View ก้อนที่ 1.1  */}
            <View style={{ flexDirection: "row", padding: 10 }}>
                <Image style={{ width: 50, height: 50, borderRadius: 50 / 2 }} source={require("../assets/AllPhoto/profile-2.jpg")} />
                <View style={{ paddingLeft: 10 }}>
                    <Text style={{ fontSize: 20 }}>Steve Mcmanaman</Text>
                    <Text style={{ color: "gray" }}>5 hours ago | 100k views</Text>
                </View>
            </View>
            {/* View ก้อนที่ 1.2 */}
            <View style={{ flexDirection : "row"}}>
                <Image style={{ flex : 1 , resizeMode : "cover", aspectRatio : 4/2 }} source={require("../assets/AllPhoto/trip-2.jpg")} />
            </View>
            {/* View ก้อนที่ 1.3 */}
            <View style={{ padding : 10 }}>
                <Text style={{ fontSize : 20 }}>Overseas Adventure Travel In Nepal</Text>
                <Text style={{ color : '#444444' }}>Andaz Tokyo Toranomon Hills is one of the newest luxury hotels in Tokyo. Located in one of the uprising areas of Tokyo</Text>
            </View>
            {/* View ก้อนที่ 2.1  */}
            <View style={{ flexDirection: "row", padding: 10 }}>
                <Image style={{ width: 50, height: 50, borderRadius: 50 / 2 }} source={require("../assets/AllPhoto/LiamProfile.jpg")} />
                <View style={{ paddingLeft: 10 }}>
                    <Text style={{ fontSize: 20 }}>Oasis</Text>
                    <Text style={{ color: "gray" }}>6 days ago | 2.5m views</Text>
                </View>
            </View>
            {/* View ก้อนที่ 2.2 */}
            <View style={{ flexDirection : "row"}}>
                <Image style={{ flex : 1 , resizeMode : "cover", aspectRatio : 4/2 }} source={require("../assets/AllPhoto/ViewLiam.jpg")} />
            </View>
            {/* View ก้อนที่ 2.3 */}
            <View style={{ padding : 10 }}>
                <Text style={{ fontSize : 20 }}>This is Manchester City</Text>
                <Text style={{ color : '#444444' }}>On 29 August 1994, Oasis released their debut album Definitely Maybe to critical acclaim and supersonic success.</Text>
            </View>
            {/* View ก้อนที่ 3.1  */}
             <View style={{ flexDirection: "row", padding: 10 }}>
                <Image style={{ width: 50, height: 50, borderRadius: 50 / 2 }} source={require("../assets/AllPhoto/CobainProfile.jpg")} />
                <View style={{ paddingLeft: 10 }}>
                    <Text style={{ fontSize: 20 }}>Kurt Cobain</Text>
                    <Text style={{ color: "gray" }}>3 days ago | 900k views</Text>
                </View>
            </View>
            {/* View ก้อนที่ 3.2 */}
            <View style={{ flexDirection : "row"}}>
                <Image style={{ flex : 1 , resizeMode : "cover", aspectRatio : 4/2 }} source={require("../assets/AllPhoto/GuitarView.jpg")} />
            </View>
            {/* View ก้อนที่ 3.3 */}
            <View style={{ padding : 10 }}>
                <Text style={{ fontSize : 20 }}>Kurt Cobain Announced the music</Text>
                <Text style={{ color : '#444444' }}>The Federal Bureau of Investigation has released a 10-page report to “The Vault,” the FBI’s Freedom of Information Act library, on the 1994 death of Nirvana guitarist Kurt Cobain by suicide.</Text>
            </View>
            {/* View ก้อนที่ 4.1  */}
            <View style={{ flexDirection: "row", padding: 10 }}>
                <Image style={{ width: 50, height: 50, borderRadius: 50 / 2 }} source={require("../assets/AllPhoto/MatalicaProfile.jpg")} />
                <View style={{ paddingLeft: 10 }}>
                    <Text style={{ fontSize: 20 }}>Matalica</Text>
                    <Text style={{ color: "gray" }}>2 weeks ago | 2.2m views</Text>
                </View>
            </View>
            {/* View ก้อนที่ 4.2 */}
            <View style={{ flexDirection : "row"}}>
                <Image style={{ flex : 1 , resizeMode : "cover", aspectRatio : 4/2 }} source={require("../assets/AllPhoto/MatalicaView.jpg")} />
            </View>
            {/* View ก้อนที่ 4.3 */}
            <View style={{ padding : 10 }}>
                <Text style={{ fontSize : 20 }}>Rock for the times</Text>
                <Text style={{ color : '#444444' }}>Produced by Greg Fidelman, along with James and Lars, 72 Seasons is available for pre-order now on CD, 2LP 140g black vinyl, two different colored vinyl variations, and digitally in the Met Store. Every pre-order will receive a digital instant grat track of the first song we are releasing, “Lux Æterna,” and you can check out the brand new video, one of the coolest we’ve ever made, on our YouTube channel. Directed by Tim Saccenti, we recently traveled to Los Angeles to capture our performance using some crazy cutting-edge technology.</Text>
            </View>
            {/* View ก้อนที่ 5.1  */}
            <View style={{ flexDirection: "row", padding: 10 }}>
                <Image style={{ width: 50, height: 50, borderRadius: 50 / 2 }} source={require("../assets/AllPhoto/CatProfile.jpg")} />
                <View style={{ paddingLeft: 10 }}>
                    <Text style={{ fontSize: 20 }}>Matalica</Text>
                    <Text style={{ color: "gray" }}>30 minutes ago | 250k views</Text>
                </View>
            </View>
            {/* View ก้อนที่ 5.2 */}
            <View style={{ flexDirection : "row"}}>
                <Image style={{ flex : 1 , resizeMode : "cover", aspectRatio : 4/2 }} source={require("../assets/AllPhoto/CatView.jpg")} />
            </View>
            {/* View ก้อนที่ 5.3 */}
            <View style={{ padding : 10 }}>
                <Text style={{ fontSize : 20 }}>New car</Text>
                <Text style={{ color : '#444444' }}>I bought a car when 25 minutes ago. It's cool ?</Text>
            </View>
        </View> 
        </ScrollView>  
    );
}

