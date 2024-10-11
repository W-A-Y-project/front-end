import React from 'react';
import { View, StyleSheet } from 'react-native';


export const darkArrow = StyleSheet.create({
    container: {
        width: 30, 
        height: 30,
        justifyContent: 'center', 
        alignItems: 'center', 
    },
    rectangle32: {
        width: 10,
        height: 2,
        backgroundColor: '#171B3B', 
        transform: [{ rotate: '-45deg' }],
    },
    rectangle33: {
        width: 10,
        height: 2,
        backgroundColor: '#171B3B', 
        transform: [{ rotate: '45deg' }],
        marginTop: 2, 
    },
});

export const lightArrow = StyleSheet.create({
    container: {
        width: 30, 
        height: 30,
        justifyContent: 'center', 
        alignItems: 'center', 
    },
    rectangle32: {
        width: 10,
        height: 2,
        backgroundColor: '#FFFFFF', 
        transform: [{ rotate: '-45deg' }],
    },
    rectangle33: {
        width: 10,
        height: 2,
        backgroundColor: '#FFFFFF', 
        transform: [{ rotate: '45deg' }],
        marginTop: 2, 
    },
});

export const DarkArrowComponent = () => {
    return (
        <View style={darkArrow.container}>
            <View style={darkArrow.rectangle32}></View>
            <View style={darkArrow.rectangle33}></View>
        </View>
    );
};

export const LightArrowComponent = () => {
    return (
        <View style={lightArrow.container}>
            <View style={lightArrow.rectangle32}></View>
            <View style={lightArrow.rectangle33}></View>
        </View>
    );
};
