import React from "react";
import { useState } from "react";
import { SafeAreaView, View, ScrollView, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import { TextInputMask } from 'react-native-masked-text';
import { Entrada, NativeScreen, button, explanation } from "../styles/styles";
import { isFormValid } from "../functions/functions";
import { ArrowComponent, SameLine } from "../components/Arrow";
import CheckboxComponent from "../components/checkBox";


const InputField = ({ placeholder, isMasked, maskType, keyboardType }) => {
  return (
    <View style={Entrada.inputBox}>
      {isMasked ? (
        <TextInputMask
          style={Entrada.inputText}
          placeholder={placeholder}
          autoCapitalize="none"
          keyboardType={keyboardType}
          type={maskType}
        />
      ) : (
        <TextInput
          style={Entrada.inputText}
          placeholder={placeholder}
          autoCapitalize="none"
          keyboardType={keyboardType}
        />
      )}
    </View>
  );
};


const Missing = ({ navigation }) => {

  const [isDisabledChecked, setIsDisabledChecked] = useState(false);
  const [hasSocialMedia, setHasSocialMedia] = useState(false);
  const [hadPhoneChecked, setHadPhoneChecked] = useState(false);
  const [wasDrivingChecked, setWasDrivingChecked] = useState(false);

  return (
    <SafeAreaView style={NativeScreen.SafeAreaView}>
      <ScrollView style={NativeScreen.ScrollView}>
        <KeyboardAvoidingView>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('Missing')}>
              <SameLine />
            </TouchableOpacity>
            <Text style={explanation.bigExplanation}>
              {"Adicine o boletim de ocorrência:"}
            </Text>
            <Text/>
            <Text/>
            <Text/>
          </View>

          <InputField placeholder="PDF" isMasked={false} keyboardType="default" />



          <TouchableOpacity style={button.darkButton}>
            <Text style={button.text}>Cadastrar desaparecido</Text>
          </TouchableOpacity>

          <View style={{ backgroundColor: "#000000", borderRadius: 100, marginHorizontal: 120 }}></View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Missing;
