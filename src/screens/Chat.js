import React, { useState, useEffect } from "react";
import { TextInputMask } from 'react-native-masked-text';
import { SafeAreaView, View, ScrollView, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { Entrada, NativeScreen, button, explanation, tips } from "../styles/styles";
import { AlertPassword, cadastroForm, isFormValid } from "../functions/functions";
import { ArrowComponent, SameLine } from "../components/Arrow";
import { KeyboardAvoidingView } from "react-native";
import { Arrow } from "../components/Arrow";
import ChatHeaderComponent from "../components/ChatHeader";
import InputChatBarComponent from "../components/inputChatBar";

const Cadastro = ({ navigation }) => {

  return (
    <SafeAreaView style={NativeScreen.SafeAreaView}>
      <ScrollView style={NativeScreen.ScrollView}>
        <KeyboardAvoidingView>
        <View>
            <ChatHeaderComponent/>
        </View>

        <View style={{ backgroundColor: "#000000", borderRadius: 100, marginHorizontal: 120 }}>
        </View>
        </KeyboardAvoidingView>
      </ScrollView>
        <InputChatBarComponent></InputChatBarComponent>
    </SafeAreaView>
  );
};

export default Cadastro;
