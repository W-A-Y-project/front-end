import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Corrigido para usar o hook corretamente
import PlusComponent from './Plus';

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
  const navigation = useNavigation(); // Corrigido aqui

  return (
    <View style={tabBar.tabs}>
      <View style={tabBar.buttonContainer}>
        <TouchableOpacity
          onPress={() => {
            setClicked(true);
            setTimeout(() => setClicked(false), 200); // Reseta o estado após 200ms
            navigation.navigate('Missing'); // Navegando para a tela "Missing"
          }}
        >
          <PlusComponent clicked={clicked} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TabBarComponent;
