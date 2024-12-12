import React from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  tabs: {
    position: 'absolute',
    bottom: 0,
    width: width,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#E0E0E0',
    borderTopWidth: 1,
    borderColor: '#C0C0C0',
  },
  button: {
    backgroundColor: '#707070',
    borderRadius: 50,
    padding: 15,
  },
});

const TabBarComponent = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.tabs}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Icon name="home" size={24} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Missing')}
      >
        <Icon name="add" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Icon name="person" size={24} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

export default TabBarComponent;
