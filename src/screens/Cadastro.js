import React, { useState, useEffect } from "react";
import { TextInputMask } from 'react-native-masked-text';
import { SafeAreaView, View, ScrollView, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { Entrada, NativeScreen, button, explanation, tips } from "../styles/styles";
import { AlertPassword, cadastroForm, isFormValid } from "../functions/functions";
import { ArrowComponent, SameLine } from "../components/Arrow";
import { KeyboardAvoidingView } from "react-native";

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
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const [isFormValid, setIsFormValid] = useState(false);

  const handleFormSubmit = () => {
    cadastroForm(navigation, CPF, name, phone, email, CEP, city, state, password, confirmPassword);
  };

  
  useEffect(() => {
    validateForm();
  }, [CPF, name, email, phone, CEP, city, state, password, confirmPassword]);


  return (
    <SafeAreaView style={NativeScreen.SafeAreaView}>
      <ScrollView style={NativeScreen.ScrollView}>
        <KeyboardAvoidingView>
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
              onFocus={() => setIsPasswordFocused(true)}
              onBlur={() => setIsPasswordFocused(false)}
              autoCapitalize="none"
              secureTextEntry
            />
            {isPasswordFocused && (
              <View style={tips.tipsContainer}>
                <Text style={explanation.littleEx}>- Deve ter pelo menos 8 caracteres</Text>
                <Text style={explanation.littleEx}>- Deve conter pelo menos uma letra maiúscula</Text>
                <Text style={explanation.littleEx}>- Deve conter pelo menos um número</Text>
                <Text style={explanation.littleEx}>- Deve conter pelo menos um caractere especial</Text>
              </View>
            )}
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

        <TouchableOpacity onPress={handleFormSubmit} style={[button.darkButton, { opacity: isFormValid ? 1 : 0.5 }]} // Alterar a opacidade com base na validade do formulário
            disabled={!isFormValid} // Desabilitar o botão se o formulário não estiver válido
          >
          <Text style={button.text}>ENTRAR</Text>
        </TouchableOpacity>

        <View style={{ backgroundColor: "#000000", borderRadius: 100, marginHorizontal: 120 }}></View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Cadastro;
