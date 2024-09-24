import React from "react";
import { SafeAreaView, View, ScrollView, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import { TextInputMask } from 'react-native-masked-text';
import { Entrada, NativeScreen, button, explanation } from "../styles/styles";
import { isFormValid } from "../functions/functions";
import { ArrowComponent, SameLine } from "../components/Arrow";
import CheckboxComponent from '../components/checkBox';


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
  return (
    <SafeAreaView style={NativeScreen.SafeAreaView}>
      <ScrollView style={NativeScreen.ScrollView}>
        <KeyboardAvoidingView>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('Feed')}>
              <SameLine />
            </TouchableOpacity>
            <Text style={explanation.bigExplanation}>
              {"Informações pessoais do desaparecido"}
            </Text>
            <Text/>
            <Text/>
            <Text/>

          </View>

          <InputField placeholder="Nome do desaparecido" isMasked={false} keyboardType="default" />
          <InputField placeholder="Data de nascimento" isMasked={false} keyboardType="number-pad" />
          <InputField placeholder="Sexo" isMasked={false} keyboardType="default" />
          <InputField placeholder="Nome da mãe" isMasked={false} keyboardType="default" />
          <InputField placeholder="Nome do pai" isMasked={false} keyboardType="default" />
          <InputField placeholder="Cor da pele" isMasked={false} keyboardType="default" />
          <InputField placeholder="Cor dos olhos" isMasked={false} keyboardType="default" />
          <InputField placeholder="Sinais particulares. Ex: tatuagem, cicatriz" isMasked={false} keyboardType="default" />
          <InputField placeholder="Roupas que o desaparecido estava vestindo" isMasked={false} keyboardType="default" />

        {/*<CheckboxComponent/>*/}{/*Checkbox não funcionando*/}
          <TouchableOpacity style={button.darkButton}>
            <Text style={button.text}>Próximo</Text>
          </TouchableOpacity>

          <View style={{ backgroundColor: "#000000", borderRadius: 100, marginHorizontal: 120 }}></View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Missing;
