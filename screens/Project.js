import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useLayoutEffect, useState} from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import GPS from "../helpers/GPS";
import MyMapView from "../components/MyMapView";
import TopComponents from "../components/TopComponents";
import BottomComponents from "../components/BottomComponents";
 
export default function Project() {
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;
    const [location, setLocation] = useState(null);
  //ACTION WHEN ENTER SCREENS
    const onLoad = async()=>{
            let loc = await GPS.getLocation();
            if (loc) {
                //console.log("Location : ", loc);
                setLocation(loc);
            }
        };
        useEffect(() => {
            console.log("ENTER SCREEN");
            onLoad();
        }, []);


  //SCREEN UI
  return (
    <View style={{ flex: 1, flexDirection: "column" }}>      
      {/* <Text> { JSON.stringify(location) } </Text>   */}
      <Text>{location ? new Date(location.timestamp).toString() : "-"}</Text>  
            <View style={{ flex: 1 }}>
                <MyMapView location={location} setLocation={setLocation} />
            </View>  
            <View style={{position: "absolute", top: 5, marginLeft: 30}} >
                <TopComponents />
            </View>
            <View style={{position: "absolute", bottom: 5, marginLeft: 10}} >
                <BottomComponents />
            </View>
    </View>
  );
}




