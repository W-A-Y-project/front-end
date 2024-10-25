import React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import InputChatBarComponent from './inputChatBar';
import ChatHeaderComponent from './ChatHeader';
import Chat from '../screens/Chat';

const { width, height } = Dimensions.get('window');

const background = StyleSheet.create({
  container: {
    position: 'absolute',
    top: width * 2, 
    left: 0,
    width: width, 
    backgroundColor: '#FFFFFF',
    zIndex: -1,
  },
});

const ChatBackgroundComponent = () => {
    return (
        <View>
            {/*<ChatHeaderComponent/>*/}
                <View style={background.container}></View>
                <View>
                    {/*<InputChatBarComponent/>*/}
                </View>
        </View>    
    );
}

export default ChatBackgroundComponent;
