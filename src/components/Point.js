
import React from 'react';
import { View, StyleSheet } from 'react-native';

export const point = StyleSheet.create(    
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

      
      ellipse21: {//bolinha grande
        position: 'absolute',
        width: 15,
        height: 15,
        left: 14,
        top: 5,
        backgroundColor: '#171B3B',
        borderRadius: 15,
      },
      ellipse22: {//bolinha pequena
        position: 'absolute',
        width: 7.5,
        height: 7.5,
        left: 18,
        top: 9,
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
      },
      
      triangleDown: {
        width: 0,
        height: 0,
        top:16,
        left:15,
        borderLeftWidth: 6.5,
        borderRightWidth: 6.5,
        borderTopWidth: 12,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderTopColor: '#171B3B',
      },


  },
);

export const PointComponent = () => {
    return (
        <View style={point.container}>
        <View style={point.frameChild}>
            <View style={point.triangleDown}/>
            <View style={point.ellipse21} />
            <View style={point.ellipse22} />
        </View>
        </View>
    );
    };
    
export default PointComponent;
      