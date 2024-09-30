import React from "react";
import { useState } from "react";
import { SafeAreaView, View, ScrollView, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, navigate } from "react-native";
import { TextInputMask } from 'react-native-masked-text';
import { Entrada, NativeScreen, button, explanation } from "../styles/styles";
import { isFormValid } from "../functions/functions";
import { ArrowComponent, SameLine } from "../components/Arrow";
import CheckboxComponent from "../components/checkBox";
import Feed from "./Feed";


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

          <CheckboxComponent
            label="É pessoa com deficiência mental"
            isChecked={isDisabledChecked}
            toggleCheckbox={() => setIsDisabledChecked(!isDisabledChecked)}
          />
          {isDisabledChecked && (
            <TextInput
              style={Entrada.inputBox}
              placeholder="Qual é a deficiência?"
            />
          )}

          <CheckboxComponent
            label="Tem redes sociais"
            isChecked={hasSocialMedia}
            toggleCheckbox={() => setHasSocialMedia(!hasSocialMedia)}
          />
          {hasSocialMedia && (
            <TextInput
              style={Entrada.inputBox}
              placeholder="Digite as redes sociais"
            />
          )}

          <CheckboxComponent
            label="Estava com telefone quando desapareceu"
            isChecked={hadPhoneChecked}
            toggleCheckbox={() => setHadPhoneChecked(!hadPhoneChecked)}
          />
          {hadPhoneChecked && (
            <TextInput
              style={Entrada.inputBox}
              placeholder="Digite o número do telefone"
              keyboardType="phone-pad"
            />
          )}

          <CheckboxComponent
            label="Dirigia algum veículo quando desapareceu"
            isChecked={wasDrivingChecked}
            toggleCheckbox={() => setWasDrivingChecked(!wasDrivingChecked)}
          />
          {wasDrivingChecked && (
            <TextInput
              style={Entrada.inputBox}
              placeholder="Digite a placa do veículo"
            />
          )}

          <TouchableOpacity onPress={()=> navigation.navigate('BO')} style={button.darkButton}>
            <Text style={button.text}>Próximo</Text>
          </TouchableOpacity>

          <View style={{ backgroundColor: "#000000", borderRadius: 100, marginHorizontal: 120 }}></View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Missing;
