import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native';
import { explanation } from '../styles/styles';

export const Arrow = StyleSheet.create({
    container: {
        position: 'relative',
        width: 100,
        height: 100,
    },
    SecContainer:{
        flexDirection: 'row',
    },

    rectangle32: {
      position: 'absolute',
      width: 20,
      height: 2,
      left: 31.04,
      top: 58,
      backgroundColor: '#171B3B',
      transform: [{ rotate: '-45deg' }],
    },

    rectangle33: {
      position: 'absolute',
      width: 20,
      height: 2,
      left: 31.61,
      top: 71,
      backgroundColor: '#171B3B',
      transform: [{ rotate: '45deg' }],
    },



});  

export const ArrowComponent = () => {
    return (
        <View style = {Arrow.container}>
            <View style = {Arrow.rectangle32}></View>
            <View style = {Arrow.rectangle33}></View>
        </View>
        
    );
};
export const SameLine = () => {
    return (
        <View>
            <ArrowComponent/>
            <Text style={explanation.bigExplanation}>
                {"CRIANDO SUA CONTA!"}
            </Text>
        </View>
    )
}
