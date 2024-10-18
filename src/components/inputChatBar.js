import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { LightArrowComponent, SameLine } from './Arrow';

const { width, height } = Dimensions.get('window');

const inputChat = StyleSheet.create({
    bar:{
        position: 'absolute',
        width: width,
        height: 60,
        bottom: 0,
        backgroundColor: '#171B3B',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        position: 'absolute',
        width: width,
    },

    chatText:{
        color: '#FFFFFF',
        fontSize: 20,
        marginLeft: 30,
    }
})

const InputChatBarComponent = () => {
    return(
        <View>
            <View style = {inputChat.bar}>
                <Text>rigor</Text>
            </View>
        </View>
    )
}

export default InputChatBarComponent;
