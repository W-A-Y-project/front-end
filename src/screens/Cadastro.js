import React, { useState } from "react";
import { TextInputMask } from 'react-native-masked-text';
import { SafeAreaView, View, ScrollView, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { Entrada, NativeScreen, button, explanation } from "../styles/styles";
import { cadastroForm } from "../functions/functions";
import { ArrowComponent, SameLine } from "../components/Arrow";

const Cadastro = ({ navigation }) => {

  const [CPF, setCPF] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [CEP, setCEP] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleFormSubmit = () => {
    cadastroForm(navigation, CPF, name, phone, email, CEP, city, state, password, confirmPassword);
  };

  return (
    <SafeAreaView style={NativeScreen.SafeAreaView}>
      <ScrollView style={NativeScreen.ScrollView}>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <SameLine />
          </TouchableOpacity>
          <Text style={explanation.bigExplanation}>
              {"CRIANDO SUA CONTA!"}
            </Text>
            <Text></Text>
            <Text></Text>
            
        </View>

        <View style={Entrada.inputBox}>
          <TextInputMask
            style={Entrada.inputText}
            placeholder="CPF"
            value={CPF}
            onChangeText={setCPF}
            autoCapitalize="none"
            keyboardType="number-pad"
            type="cpf"
          />
        </View>

        <View style={Entrada.inputBox}>
          <TextInput
            style={Entrada.inputText}
            placeholder="Nome completo"
            value={name}
            onChangeText={setName}
            autoCapitalize="none"
          />
        </View>

        <View style={Entrada.inputBox}>
          <TextInputMask
            style={Entrada.inputText}
            placeholder="(00) 1234-4321"
            value={phone}
            onChangeText={setPhone}
            autoCapitalize="none"
            type="cel-phone"
            options={{ maskType: 'BRL', withDDD: true, dddMask: '(99)' }}
            keyboardType="number-pad"
          />
        </View>

        <View style={Entrada.inputBox}>
          <TextInput
            style={Entrada.inputText}
            placeholder="exemplo@email.com"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
          />
        </View>

        <View style={Entrada.inputBox}>
          <TextInputMask
            style={Entrada.inputText}
            placeholder="CEP"
            value={CEP}
            onChangeText={setCEP}
            autoCapitalize="none"
            type="zip-code"
            keyboardType="number-pad"
          />
        </View>

        <View style={Entrada.inputBox}>
          <TextInput
            style={Entrada.inputText}
            placeholder="Cidade"
            value={city}
            onChangeText={setCity}
            autoCapitalize="none"
          />
        </View>

        <View style={Entrada.inputBox}>
          <TextInput
            style={Entrada.inputText}
            placeholder="Estado"
            value={state}
            onChangeText={setState}
            autoCapitalize="none"
          />
        </View>

        <View style={Entrada.inputBox}>
          <TextInput
            style={Entrada.inputText}
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
            autoCapitalize="none"
            secureTextEntry
          />
        </View>

        <View style={Entrada.inputBox}>
          <TextInput
            style={Entrada.inputText}
            placeholder="Confirme a senha"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            autoCapitalize="none"
            secureTextEntry
          />
        </View>

        <TouchableOpacity onPress={handleFormSubmit} style={button.darkButton}>
          <Text style={button.text}>ENTRAR</Text>
        </TouchableOpacity>

        <View style={{ backgroundColor: "#000000", borderRadius: 100, marginHorizontal: 120 }}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Cadastro;
