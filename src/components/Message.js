import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const messageDesign = StyleSheet.create({
  container: {
    maxWidth: '75%',
    borderRadius: 20,
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  userMessage: {
    backgroundColor: '#171B3B', // Cor do balão do usuário
    alignSelf: 'flex-end',
  },
  otherMessage: {
    backgroundColor: '#FFFFFF', // Cor do balão de mensagens de outros
    alignSelf: 'flex-start',
  },
  messageText: {
    color: '#000000', // Cor do texto
  },
});


const MessageComponent = ({ text, isUser }) => {
    return (
      <View style={[messageDesign.container, isUser ? messageDesign.userMessage : messageDesign.otherMessage]}>
        <Text style={messageDesign.messageText}>{text}</Text>
      </View>
    );
  };


export default MessageComponent;
