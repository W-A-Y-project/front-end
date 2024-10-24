import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Correto
import PlusComponent from './Plus'; // Certifique-se de que este componente está funcionando corretamente
import Icon from 'react-native-vector-icons/MaterialIcons';


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
      <TouchableOpacity
        style={{
        position: 'absolute',
        bottom: 1,
        right: 175,
        backgroundColor: '#707070',
        borderRadius: 50,
        padding: 15,
      }}
      onPress={() => navigation.navigate('Missing')}
    >
      <Icon name="add" size={15} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default TabBarComponent;
