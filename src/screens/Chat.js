import React from "react";
import { useEffect, useRef } from "react";
import { SafeAreaView, View, ScrollView, Dimensions, KeyboardAvoidingView, StyleSheet } from "react-native";
import ChatHeaderComponent from "../components/ChatHeader";
import InputChatBarComponent from "../components/inputChatBar";
import ChatBackgroundComponent from "../components/ChatBackground";
import styles, { NativeScreen } from "../styles/styles";
import MessageComponent, { MyMessageComponent, TheymessageComponent } from "../components/Message";
const { height } = Dimensions.get('window');

const Chat = () => {
  const scrollViewRef = useRef();
  return (
    <SafeAreaView style={NativeScreen.safeAreaView}>
      <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
        <ChatHeaderComponent />
      

        <ChatBackgroundComponent />

        <ScrollView contentContainerStyle={NativeScreen.scrollView} keyboardShouldPersistTaps="handled" ref={scrollViewRef}>
            
            <TheymessageComponent text="Olá, estou com seu filho" isUser={false} />
            <MyMessageComponent text="Obrigado!" isUser={true} />
            <TheymessageComponent text="Por nada!" isUser={false} />
            <TheymessageComponent text="Olá, estou com seu filho" isUser={false} />
            <MyMessageComponent text="Obrigado!" isUser={true} />
            <TheymessageComponent text="Por nada!" isUser={false} />
            <TheymessageComponent text="Olá, estou com seu filho" isUser={false} />
            <MyMessageComponent text="Obrigado!" isUser={true} />
            <TheymessageComponent text="Por nada!" isUser={false} />
            <TheymessageComponent text="Olá, estou com seu filho" isUser={false} />
            <MyMessageComponent text="Obrigado!" isUser={true} />
            <TheymessageComponent text="Por nada!" isUser={false} />
            <TheymessageComponent text="Olá, estou com seu filho" isUser={false} />
            <MyMessageComponent text="Obrigado!" isUser={true} />
            <TheymessageComponent text="Por nada!" isUser={false} />
            <TheymessageComponent text="Olá, estou com seu filho" isUser={false} />
            <MyMessageComponent text="Obrigado!" isUser={true} />
            <TheymessageComponent text="Por nada!" isUser={false} />
        
        </ScrollView>

        <InputChatBarComponent />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};


export default Chat;
