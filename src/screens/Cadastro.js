import React, { useState, useEffect } from "react";
import api from '../services/api';
import { TextInputMask } from 'react-native-masked-text';
import RNPickerSelect from 'react-native-picker-select';
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

  const handleFormSubmit = () => {
    cadastroForm(navigation, CPF, name, phone, email, CEP, city, state, password);
  };

  
  useEffect(() => {
    validateForm();
  }, [CPF, name, email, phone, CEP, city, state, password]);

  const handleSubmit = async () => {
    const cleanCPF = CPF.replace(/\D/g, ''); 
    const cleanPhone  = phone.replace(/\D/g, ''); 
    const cleanPostalCode  = postalCode.replace(/\D/g, ''); 

    // if (password !== confirmPassword) {
    //   Alert.alert('Erro', 'As senhas não coincidem');
    //   return;
    //}
  
    try {
      const response = await api.post('/register', {
        cpf: cleanCPF,
        fullName: name,
        email: email,
        phone: cleanPhone,
        postalCode: cleanPostalCode,
        city: city,
        state: state,
        password: password,
      });

      const { _id } = response.data;
      console.log(_id);
      console.log('Resposta do servidor:', response);

      if (response.status === 200) {
          const { data } = response;
          Alert.alert('Sucesso', data.message)
          await AsyncStorage.setItem('token', data.token);
          navigation.navigate('login');
      } else {
        Alert.alert('Erro', 'Não foi possível realizar o cadastro');
      }
    } catch (error) {
      console.error('Erro ao fazer cadastro:', error);
      Alert.alert('Erro', 'Não foi possível realizar o cadastro');
    }
  };

  const validateForm = () => {
    // Add your validation logic and set the state
    const isValid = CPF && name && email && phone && CEP && city && state && password && (password === confirmPassword);
    setIsFormValid(isValid); // Use the correct state property
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
            onChangeText={text => setCPF(text)}
            style={Entrada.inputText}
            placeholder={'CPF'}
            keyboardType="numeric"
            autoCapitalize="none"
              autoCorrect={false}
          />
        </View>

        <View style={Entrada.inputBox}>
          <TextInput
            style={Entrada.inputText}
            placeholder={'Nome completo'}
            value={name}
            onChangeText={text => setName(text)}
            autoCapitalize="none"
              autoCorrect={false}
          />
        </View>

        <View style={Entrada.inputBox}>
          <TextInput
            style={Entrada.inputText}
            placeholder={'Seu e-mail'}
            value={email}
            onChangeText={text => setEmail(text)}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
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
            onChangeText={text => setPhone(text)}
            style={Entrada.inputText}
            placeholder={'Celular'}
            keyboardType="numeric"
          />
        </View>

        <View style={Entrada.inputBox}>
          <TextInputMask
            type={'zip-code'}
            value={CEP}
            onChangeText={text => setCEP(text)}
            style={Entrada.inputText}
            placeholder={'CEP'}
            keyboardType="numeric"
          />
        </View>

        <View style={Entrada.inputBox}>
          <TextInput
            style={Entrada.inputText}
            placeholder={'Cidade'}
            value={city}
            onChangeText={text => setCity(text)}
            autoCapitalize="none"
              autoCorrect={false}
          />
        </View>

        <View style={Entrada.inputBox}>
          <RNPickerSelect
            onValueChange={text => setState(text)}
            placeholder={{
              label: 'Estado',
              value: null,
              color: '#9EA0A4',
            }}
            style={{
              inputAndroid: {
                color: '#9EA0A4',
                fontSize: 16,
                paddingHorizontal: 8,
                paddingVertical: 10,
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
            placeholder={'Senha'}
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry
          />
        </View>

{/*}
        <View style={Entrada.inputBox}>
          <TextInput
            style={Entrada.inputText}
            placeholder={isConfirmPasswordFocused ? '' : 'Confirme a senha'}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
        </View>
*/}
        <TouchableOpacity onPress={handleSubmit} style={button.darkButton}>
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
