import React from 'react';
import { View, StyleSheet, TouchableOpacity, Alert, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const Plus = StyleSheet.create({
    tabs: {
        position: 'absolute',
        height: 50,
        bottom:0,
        width: width,
        alignItems: 'center',
        backgroundColor: '#E0E0E0',
      },

    circulo: {
        position: 'absolute',
        width: 30,
        height: 30,
        bottom: 10,
        borderColor: '#171B3B',
        borderWidth: 2,
        borderRadius: 20,
    },

    line4: {
        position: 'absolute',
        width: 20,
        height: 0,
        left: 196,
        bottom:23,
        borderColor: '#171B3B',
        borderWidth: 2,
        borderRadius: 3,
    },
    line5: {
        position: 'absolute',
        width: 20,
        height: 0,
        left: 196,
        bottom: 23,
        borderColor: '#171B3B',
        borderWidth: 2,
        transform: [{ rotate: '90deg' }],
    },
});

const PlusComponent = () => {
    return (
        <View style={Plus.tabs}>
            <View style={Plus.line4}></View>
            <View style={Plus.line5}></View>
            <View style={Plus.circulo}></View>
        </View>
    )
};

export default PlusComponent;
