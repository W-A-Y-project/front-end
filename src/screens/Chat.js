import React from "react";
import { SafeAreaView, View, ScrollView, Dimensions, KeyboardAvoidingView, StyleSheet } from "react-native";
import ChatHeaderComponent from "../components/ChatHeader";
import InputChatBarComponent from "../components/inputChatBar";
import ChatBackgroundComponent from "../components/ChatBackground";
import styles, { NativeScreen } from "../styles/styles";

const { height } = Dimensions.get('window');

const Chat = () => {
  return (
    <SafeAreaView style={NativeScreen.safeAreaView}>
      <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
        <ChatHeaderComponent />
      

        <ChatBackgroundComponent />

        <ScrollView 
          contentContainerStyle={NativeScreen.scrollView}
          keyboardShouldPersistTaps="handled">
          {/* mensagens */}
        </ScrollView>

        <InputChatBarComponent />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};


export default Chat;
