import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
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
    //justifyContent: 'center', // Centraliza os itens horizontalmente
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
  },
});

const TabBarComponent = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <View style={tabBar.tabs}>
      <View style={tabBar.buttonContainer}>
        <TouchableOpacity
          onPress={() => {
            setClicked(true);
            // Aqui você pode adicionar qualquer lógica que queira ao clicar
            setTimeout(() => setClicked(false), 200); // Reseta o estado após 200ms
          }}
        >
          <PlusComponent clicked={clicked} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TabBarComponent;
