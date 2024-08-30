import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native';

const searchBar = StyleSheet.create({
    bar:{
        position: 'absolute',
        width: 375,
        height: 70,
        top: 0,
        backgroundColor: '#171B3B'
    },

    lightBar: {
        alignItems: 'center',
        width: 268,
        height: 33,
        top: 25,
        left: 50, 
        backgroundColor:'#D9D9D9',
        borderRadius: 30,
    }


})

const SearchBarComponent = () => {
    return(
        <View>
            <View style = {searchBar.bar}>
                <View style = {searchBar.lightBar}></View>
            </View>
        </View>
    )
}

export default SearchBarComponent;
