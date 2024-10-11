import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { LightArrowComponent, SameLine } from './Arrow';

const { width, height } = Dimensions.get('window');

const chatHeader = StyleSheet.create({
    bar:{
        //position: 'absolute',
        width: width,
        height: 35,
        top: 0,
        backgroundColor: '#171B3B',
        flexDirection: 'row',
        alignItems: 'center',
        //zIndex: 1, // Certifica-se que o componente ficará acima dos outros
    },

    PictureFrame: {//frame da foto da pessoa
        left: width * 0.04,
        top: 28,
        height: 30,
        width: 30,
        position: "absolute",
      },
})

const ChatHeaderComponent = () => {
    return(
        <View>
            <View style = {chatHeader.bar}>
                <View>
                    <LightArrowComponent/>
                </View>
                {/*<Image style={chatHeader.PictureFrame} contentFit="cover" source={require("../../assets/searchIcon.png")}/>*/ }
            </View>
        </View>
    )
}

export default ChatHeaderComponent;
