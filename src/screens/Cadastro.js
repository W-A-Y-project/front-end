import api from '../services/api';
import React, { useState } from "react";
import { TextInputMask } from 'react-native-masked-text';
import RNPickerSelect from 'react-native-picker-select';
import { SafeAreaView, View, ScrollView, Text, TextInput, TouchableOpacity, Alert } from "react-native";

import { Entrada, divider, explanation, button, NativeScreen } from "../styles/styles";

const Cadastro = ({ navigation }) => {
  const [CPF, setCPF] = useState("");
  const [isCPFFocused, setCPFFocused] = useState(false);

  const [name, setName] = useState("");
  const [isNameFocused, setNameFocused] = useState(false);

  const [email, setEmail] = useState("");
  const [isEmailFocused, setEmailFocused] = useState(false);

  const [phone, setPhone] = useState("");
  const [isPhoneFocused, setPhoneFocused] = useState(false);

  const [CEP, setCEP] = useState("");
  const [isCEPFocused, setCEPFocused] = useState(false);

  const [city, setCity] = useState("");
  const [isCityFocused, setCityFocused] = useState(false);

  const [state, setState] = useState("");
  const [isStateFocused, setStateFocused] = useState(false);

  const [password, setPassword] = useState("");
  const [isPasswordFocused, setPasswordFocused] = useState(false);  

  const [confirmPassword, setConfirmPassword] = useState("");
  const [isConfirmPasswordFocused, setConfirmPasswordFocused] = useState(false);  

  const handleCadastro = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Erro', 'As senhas não coincidem');
      return;
    }
  
    try {
      const response = await api.post('/register', {
        cpf: CPF,
        fullName: name,
        email: email,
        phone: phone,
        postalCode: CEP,
        city: city,
        state: state,
        password: password,
      });

      if (response.data) {
        Alert.alert('Sucesso', 'Cadastro realizado com sucesso');
        navigation.navigate('Login'); 
      } else {
        Alert.alert('Erro', 'Não foi possível realizar o cadastro');
      }
    } catch (error) {
      console.error('Erro ao fazer cadastro:', error.message);
      Alert.alert('Erro', error.response?.data?.error || 'Não foi possível realizar o cadastro');
    }
  };
  
  return (
    <SafeAreaView style={NativeScreen.safeAreaView}>
      <ScrollView style={NativeScreen.scrollView}>
        <View style={NativeScreen.View}></View>

        <Text style={explanation.bigExplanation}>{"Cadastro"}</Text>
        <Text style={explanation.littleEx}>{"Insira seus dados corretamente!"}</Text>
        
        <View style={Entrada.inputBox}>
          <TextInputMask
            type={'cpf'}
            value={CPF}
            onChangeText={setCPF}
            onFocus={() => setCPFFocused(true)}
            onBlur={() => setCPFFocused(false)}
            style={Entrada.inputText}
            placeholder={isCPFFocused ? '' : 'CPF'}
            keyboardType="numeric"
          />
        </View>

        <View style={Entrada.inputBox}>
          <TextInput
            style={Entrada.inputText}
            placeholder={isNameFocused ? '' : 'Nome completo'}
            value={name}
            onFocus={() => setNameFocused(true)}
            onBlur={() => setNameFocused(false)}
            onChangeText={setName}
          />
        </View>

        <View style={Entrada.inputBox}>
          <TextInput
            style={Entrada.inputText}
            placeholder={isEmailFocused ? '' : 'exemplo@email.com'}
            value={email}
            onFocus={() => setEmailFocused(true)}
            onBlur={() => setEmailFocused(false)}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={Entrada.inputBox}>
          <TextInputMask
            type={'cel-phone'}
            options={{
              maskType: 'BRL',
              withDDD: true,
              dddMask: '(99) '
            }}
            value={phone}
            onChangeText={setPhone}
            onFocus={() => setPhoneFocused(true)}
            onBlur={() => setPhoneFocused(false)}
            style={Entrada.inputText}
            placeholder={isPhoneFocused ? '' : 'Celular'}
            keyboardType="numeric"
          />
        </View>

        <View style={Entrada.inputBox}>
          <TextInputMask
            type={'zip-code'}
            value={CEP}
            onChangeText={setCEP}
            onFocus={() => setCEPFocused(true)}
            onBlur={() => setCEPFocused(false)}
            style={Entrada.inputText}
            placeholder={isCEPFocused ? '' : 'CEP'}
            keyboardType="numeric"
          />
        </View>

        <View style={Entrada.inputBox}>
          <TextInput
            style={Entrada.inputText}
            placeholder={isCityFocused ? '' : 'Cidade'}
            value={city}
            onFocus={() => setCityFocused(true)}
            onBlur={() => setCityFocused(false)}
            onChangeText={setCity}
          />
        </View>

        <View style={Entrada.inputBox}>
          <RNPickerSelect
            onValueChange={setState}
            placeholder={{
              label: 'Estado',
              value: null,
              color: '#9EA0A4',
            }}
            style={{
              inputAndroid: {
                color: isStateFocused ? '#000' : '#9EA0A4',
                fontSize: 18,
                paddingHorizontal: 10,
                paddingVertical: 12,
              },
              placeholder: {
                color: '#9EA0A4',
                fontSize: 18,
              },
            }}
            items={[
              { label: 'Acre', value: 'AC' },
              { label: 'Alagoas', value: 'AL' },
              { label: 'Amapá', value: 'AP' },
              { label: 'Amazonas', value: 'AM' },
              { label: 'Bahia', value: 'BA' },
              { label: 'Ceará', value: 'CE' },
              { label: 'Distrito Federal', value: 'DF' },
              { label: 'Espírito Santo', value: 'ES' },
              { label: 'Goiás', value: 'GO' },
              { label: 'Maranhão', value: 'MA' },
              { label: 'Mato Grosso', value: 'MT' },
              { label: 'Mato Grosso do Sul', value: 'MS' },
              { label: 'Minas Gerais', value: 'MG' },
              { label: 'Pará', value: 'PA' },
              { label: 'Paraíba', value: 'PB' },
              { label: 'Paraná', value: 'PR' },
              { label: 'Pernambuco', value: 'PE' },
              { label: 'Piauí', value: 'PI' },
              { label: 'Rio de Janeiro', value: 'RJ' },
              { label: 'Rio Grande do Norte', value: 'RN' },
              { label: 'Rio Grande do Sul', value: 'RS' },
              { label: 'Rondônia', value: 'RO' },
              { label: 'Roraima', value: 'RR' },
              { label: 'Santa Catarina', value: 'SC' },
              { label: 'São Paulo', value: 'SP' },
              { label: 'Sergipe', value: 'SE' },
              { label: 'Tocantins', value: 'TO' },
            ]}
          />
        </View>

        <View style={Entrada.inputBox}>
          <TextInput
            style={Entrada.inputText}
            placeholder={isPasswordFocused ? '' : 'Senha'}
            value={password}
            onFocus={() => setPasswordFocused(true)}
            onBlur={() => setPasswordFocused(false)}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        <View style={Entrada.inputBox}>
          <TextInput
            style={Entrada.inputText}
            placeholder={isConfirmPasswordFocused ? '' : 'Confirme a senha'}
            value={confirmPassword}
            onFocus={() => setConfirmPasswordFocused(true)}
            onBlur={() => setConfirmPasswordFocused(false)}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
        </View>

        <TouchableOpacity onPress={handleCadastro} style={button.darkButton}>
          <Text style={button.text}>{"CADASTRAR"}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={button.clearButton}>
          <Text style={button.clearText}>{"já tenho cadastro!"}</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Cadastro;
