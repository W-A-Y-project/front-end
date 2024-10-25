import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const messageDesign = StyleSheet.create({
  container: {
    maxWidth: '180%', 
    borderRadius: 20,
    padding: 10,
    marginVertical: 4,
  },
  userMessage: {
    backgroundColor: "#363851", // Cor do balão do usuário
    alignSelf: 'flex-end',
  },
  otherMessage: {
    backgroundColor: '#FFFFFF', // Cor do balão de mensagens de outros
    alignSelf: 'flex-start',
  },
  MymessageText: {
    color: '#FFFFFF', // Cor do texto
  },
  TheymessageText: {
    color: '#000000', // Cor do texto
  },


});

export const MyMessageComponent = ({ text, isUser }) => {
  return (
    <View style={[messageDesign.container, isUser ? messageDesign.userMessage : messageDesign.otherMessage]}>
      <Text style={messageDesign.MymessageText}>{text}</Text>
    </View>
  );
};


export const TheymessageComponent = ({ text, isUser }) => {
    return (
      <View style={[messageDesign.container, isUser ? messageDesign.userMessage : messageDesign.otherMessage]}>
        <Text style={messageDesign.TheymessageText}>{text}</Text>
      </View>
    );
  };


