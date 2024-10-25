import React from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text, Dimensions } from 'react-native';
import { LightArrowComponent } from './Arrow';

const { width } = Dimensions.get('window');

const inputChat = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: 0,
        flexDirection: 'column',
        alignItems: 'center',
        width: width,
    },
    bar: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
        backgroundColor: '#171B3B',
        paddingHorizontal: 10,
        bottom: 0,
        width: width,
        //justifyContent: 'space-evenly',
    },
    input: {
        flex: 1,
        height: 40,
        borderColor: '#FFFFFF',
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 10,
        color: '#FFFFFF',
        marginRight: 10,
    },
    sendButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40,
    },
    chatText: {
        color: '#FFFFFF',
        fontSize: 20,
        marginLeft: 30,
    },
});

const InputChatBarComponent = () => {
    return (
        <View style={inputChat.container}>
            <View style={inputChat.bar}>
                <TextInput 
                    style={inputChat.input} 
                    placeholder="Digite sua mensagem..."
                    placeholderTextColor="#CCCCCC"/>
                <TouchableOpacity style={inputChat.sendButton}>
                    <LightArrowComponent />
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default InputChatBarComponent;
