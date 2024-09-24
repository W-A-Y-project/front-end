// components/CheckboxComponent.js
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const CheckboxComponent = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={styles.container}>
      <CheckBox
        value={isChecked}
        onValueChange={setIsChecked}
        style={styles.checkbox}
      />
      <Text style={styles.label}>{isChecked ? 'Checked' : 'Unchecked'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    margin: 8,
  },
  label: {
    fontSize: 16,
  },
});

export default CheckboxComponent;
