
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
        width: 20,
        height: 20,
        left: 14,
        top: 5,
        backgroundColor: '#171B3B',
        borderRadius: 15,
      },
      ellipse22: {//bolinha pequena
        position: 'absolute',
        width: 10,
        height: 10,
        left: 19,
        top: 10,
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
      },

      rectangle24: { //lado 1
        position: 'absolute',
        width: 3,
        height: 24.3,
        left: 24.50,
        top: 16,
        backgroundColor: '#171B3B',
        transform: [{ rotate: '30deg' }],
      },
      rectangle28: { //lado 2
        position: 'absolute',
        width: 3,
        height: 24.38,
        left: 20.50,
        top: 16,
        backgroundColor: '#171B3B',
        transform: [{ rotate: '-30deg' }],
      },
    

      //retangulos de 'pintar'
      rectangle31: {
        position: 'absolute',
        width: 6,
        height: 4,
        left: 21,
        top: 24,
        backgroundColor: '#171B3B',
      },
      rectangle30: {
        position: 'absolute',
        width: 8,
        height: 5,
        left: 21,
        top: 21,
        backgroundColor: '#171B3B',
      },
  },
);

const PointComponent = () => {
    return (
        <View style={point.container}>
        <View style={point.frameChild}>
            <View style={point.rectangle31} />
            <View style={point.rectangle30} />
            <View style={point.rectangle24} />
            <View style={point.rectangle28} />
            <View style={point.ellipse21} />
            <View style={point.ellipse22} />
        </View>
        </View>
    );
    };
    
export default PointComponent;
      