
import React from 'react';
import { View, StyleSheet, TouchableOpacity, Alert } from 'react-native';



export const eyes = StyleSheet.create(
    {
    container: {
      position: 'relative',
    },
    frameChild: {
      width: 35,
      height: 35,
      marginLeft: 'auto',
      marginRight: 'auto',
      flexGrow: 0,
      backgroundColor: '#363851'
    },
    ellipse14: {
      position: 'absolute',
      width: 18,
      height: 15,
      left: 6,
      top: 10,
      backgroundColor: '#D9D9D9',
      borderRadius: 10,
    },
    ellipse15: {
      position: 'absolute',
      width: 9,
      height: 9,
      left: 7.03,
      top: 12.5,
      backgroundColor: '#363851',
      borderRadius: 5,
    },
    ellipse16: {
      position: 'absolute',
      width: 2,
      height: 2,
      left: 12,
      top: 13,
      backgroundColor: '#D9D9D9',
      borderRadius: 1,
    },
    ellipse17: {
      position: 'absolute',
      width: 2,
      height: 2,
      left: 10,
      top: 16,
      backgroundColor: '#171B3B',
      borderRadius: 1,
    },
});


const EyesComponent = () => {
  return (
    <TouchableOpacity activeOpacity={0.9}>
      <View style={eyes.container}>
      <View style={eyes.frameChild}>
        <View style={eyes.ellipse14} />
        <View style={eyes.ellipse15} />
        <View style={eyes.ellipse16} />
        <View style={eyes.ellipse17} />
      </View>
    </View>
    </TouchableOpacity>
    
  );
};

export default EyesComponent;





