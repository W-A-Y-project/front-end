import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { LightArrowComponent, SameLine } from './Arrow';

const { width, height } = Dimensions.get('window');

const chatHeader = StyleSheet.create({
    bar:{
        width: width,
        height: 60,
        top: 0,
        backgroundColor: '#171B3B',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    pictureFrame: {//frame da foto da pessoa
        left: width * 0.04,
        height: 30,
        width: 30,
        borderRadius: 20,
      },

    nameText:{
        color: '#FFFFFF',
        fontSize: 20,
        marginLeft: 30,
    }
})

const ChatHeaderComponent = () => {
    return(
        <View>
            <View style = {chatHeader.bar}>
                <View>
                    <LightArrowComponent/>
                </View>
                    <Image style={chatHeader.pictureFrame} contentFit="cover" source={require("../../assets/picMissing.png")}/>{/*Nem me lembro se vai ter isso aqui...*/}
                    <Text style={chatHeader.nameText}>Rafela Ferreira</Text>
            </View>
        </View>
    )
}

export default ChatHeaderComponent;
