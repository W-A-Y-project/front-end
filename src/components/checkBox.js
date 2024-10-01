import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: '#DADADA',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginBottom: 16,
    marginHorizontal: 24,
  },
  checkedBox: {
    backgroundColor: '#171B3B',
  },
  checkmark: {
    width: 12,
    height: 12,
    backgroundColor: '#171B3B',
  },
  label: {
    fontSize: 16,
    color: '#171B3B',
    paddingBottom: 'auto',
  },
  inputField: {
    borderWidth: 1,
    borderColor: '#DADADA',
    padding: 10,
    marginBottom: 10,
    width: width * 0.9,
    alignSelf: 'center',
  },
});

const CheckboxComponent = ({ label, isChecked, toggleCheckbox }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={toggleCheckbox}>
      <View style={[styles.checkbox, isChecked && styles.checkedBox]}>
        {isChecked && <View style={styles.checkmark} />}
      </View>
      {label && <Text style={styles.label}>{label}</Text>}
    </TouchableOpacity>
  );
};


export default CheckboxComponent;
