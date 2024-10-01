import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Correto
import PlusComponent from './Plus'; // Certifique-se de que este componente está funcionando corretamente

const { width } = Dimensions.get('window');

const tabBar = StyleSheet.create({
  tabs: {
    position: 'absolute',
    height: 50,
    bottom: 0,
    width: width,
    alignItems: 'center',
    backgroundColor: '#E0E0E0',
    flexDirection: 'row',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
  },
});

const TabBarComponent = () => {
  const [clicked, setClicked] = useState(false);
  const navigation = useNavigation(); // Certifique-se de usar o hook aqui

  return (
    <View style={tabBar.tabs}>
      <View style={tabBar.buttonContainer}>
          <PlusComponent clicked={clicked} />
      </View>
    </View>
  );
};

export default TabBarComponent;
