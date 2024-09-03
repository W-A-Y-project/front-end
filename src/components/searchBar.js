import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const searchBar = StyleSheet.create({
    bar:{
        position: 'absolute',
        width: 475,
        height: 70,
        top: 0,
        backgroundColor: '#171B3B'
    },

    lightBar: {
        alignItems: 'center',
        width: 320,
        height: 30,
        top: 26,
        left: 55, 
        backgroundColor:'#D9D9D9',
        borderRadius: 30,
    },

    PictureFrame: {//frame da foto do post
        left: 20,
        top: 28,
        height: 30,
        width: 30,
        position: "absolute",
      },
})
//<TouchableOpacity onPress={() => navigation.navigate('Login')}>
const SearchBarComponent = () => {
    return(
        <View>
            <View style = {searchBar.bar}>
            <Image style={searchBar.PictureFrame} contentFit="cover" source={require("../../assets/searchIcon.png")}/>
                <TextInput style = {searchBar.lightBar}>    </TextInput>
            </View>
        </View>
    )
}

export default SearchBarComponent;
