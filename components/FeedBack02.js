import React, { useEffect, useState } from 'react';
import { View, FlatList , TouchableOpacity, Text, ScrollView  } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import GiftStorage from '../storage/GiftStorage';
import GiftItem from './GiftItem';
// import { useNavigation } from '@react-navigation/native';

export default function FeedBack02() {
    // const navigation = useNavigation();
    const [gifts, setGifts] = useState(
        [
            { id: '1', completed: false, title: "Example 1" },
            { id: '2', completed: false, title: "Example 2" },
        ]
    );

    console.log("gifts:", gifts);

    const onLoad = async () => {
        // READ ITEMS FROM STORAGE
        let data = await GiftStorage.readItems();
        console.log("data:", data);
        // SET STATE - WRITE CODE HERE
        setGifts(data)
    };
    useEffect(()=>{ onLoad(); },[]);

    const onCreate = () => {
        let new_data = {
            id : '_' + Math.random().toString(36).substr(2, 9), //RANDOM NUMBER
            title : "", //Empty String
            completed : false,
        };
        //CLONE ARRAY + APPEND NEW DATA INTO ARRAY
        let t = [...gifts, new_data];
        //UPDATE STATE
        setGifts(t);   

        // WRITE ITEM TO STORAGE - WRITE CODE HERE
        GiftStorage.writeItems(t)
        
    };     
    const onUpdate = (new_title, id) => {   
        //CLONE ARRAY FIRST
        let t = [...gifts];
        //Find index of specific object using findIndex method.   
        let index = t.findIndex((item => item.id == id));
        //Update object's name property.
        console.log("t:", t[index],id);
        t[index].title = new_title;
        //UPDATE STATE
        setGifts(t);

        // WRITE ITEM TO STORAGE - WRITE CODE HERE
        GiftStorage.writeItems(t)
        
    }; 
    const onCheck = (id) => {
        let t = [...gifts];
        let index = t.findIndex((item => item.id == id));
        //SET INVERSE VALUE BOOLEAN
        t[index].completed = ! t[index].completed;
        setGifts(t); 

        // WRITE ITEM TO STORAGE - WRITE CODE HERE      
        GiftStorage.writeItems(t)
  

    };   
    const onDelete = (id) => {   
        //CLONE ARRAY FIRST
        let t = [...gifts];
        let index = t.findIndex((item => item.id == id));
        [removed_t] = t.splice(index, 1);
        console.log(removed_t);
        setGifts(t); 

        // REMOVE AN ITEM FROM STORAGE - WRITE CODE HERE
        GiftStorage.writeItems(t)

        
    };  


    return (
        <View style={{ flex: 1 , backgroundColor:"teal"}}>
            <FlatList
                style={{ marginTop: 15 }}
                data={gifts}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    // <Text>{item.title}</Text>
                    <GiftItem item={item} onUpdate={onUpdate} onCheck={onCheck} onDelete={onDelete} />
                )}
            />
            <View style={{flexDirection:"row", backgroundColor: "snow", width:450, height:100}}>
            <View style={{flexDirection: "row", padding: 10, justifyContent: "space-around"}}>
            {/* // for check list */}
            <TouchableOpacity>
                <View style={{ backgroundColor: 'green', width : 100, height: 50, borderRadius:15,marginTop:12, marginLeft:20}}>
                    <Text style={{fontSize:17, color:"white", padding:5, marginTop:7, marginLeft:15}}>Submit</Text>
                </View> 
            </TouchableOpacity>
            {/* // buttom for plus the list */}
            </View>
                <TouchableOpacity
                    style={{
                        backgroundColor: "teal",
                        padding: 10,
                        width: 50,
                        height: 50,
                        alignItems: "center",
                        alignContent: "center",
                        borderRadius: 25,
                        position: 'absolute',
                        right: 10,
                        bottom: 27,
                    }}
                    onPress={onCreate}
                >
                    <FontAwesome name='plus' size={30} />
                </TouchableOpacity>
            </View>
        </View>
    );
}