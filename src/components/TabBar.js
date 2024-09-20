import React from 'react';
import { View, StyleSheet, TouchableOpacity, Alert, Dimensions } from 'react-native';
import PlusComponent from './Plus';
import Plus from './Plus';

const { width, height } = Dimensions.get('window');

const tabBar = StyleSheet.create({

  tabs: {
    position: 'absolute',
    height: 50,
    bottom:0,
    width: width,
    alignItems: 'center',
    backgroundColor: '#E0E0E0',
  },

  alertaFeed: {
    width: 35,
    height: 36,
  },

  ellipse: {
    position: 'absolute',
    width: 28,
    height: 28,
    left: -2,
    top: -2,
    backgroundColor: '#E0E0E0',
    borderColor: '#171B3B',
    borderWidth: 1,
    borderRadius: 14,
  },
  profileImage: {
    width: 24,
    height: 24,
    position: 'absolute',
    left: 0,
    top: 0,
  },
});


const TabBarComponent = () => {
  return (
      <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', bottom: 0}}>
          <View style={tabBar.tabs}>
          <PlusComponent/>
          </View>
      </TouchableOpacity>
      

  );
};

export default TabBarComponent;
  