import api from '../services/api';
import React, { useState } from "react";
import { View,KeyboardAvoidingView, ScrollView, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from "react-native-safe-area-context";
import { Entrada, divider, explanation, button, NativeScreen } from "../styles/styles";
import { cadastroRedirect, feedRedirect } from '../functions/functions';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await api.post('/login', {
        email,
        password
      });

      const { _id } = response.data;
      console.log(_id);
      console.log('Resposta do servidor:', response);

      // A resposta da API pode estar em response.data
      console.log('Dados da resposta:', response.data);
      
        if (response.status === 201 || response.status === 200) {
          const { data } = response;
          Alert.alert('Sucesso', data.message);
          // Armazene o token ou faça outra ação conforme necessário
          await AsyncStorage.setItem('token', data.token);
          navigation.navigate('Feed');
      } else {
        Alert.alert('Erro', 'Erro ao efetuar login');
      }
    }  catch (error) {
      console.error('Erro ao fazer login:', error);
      Alert.alert('Erro', 'Erro ao efetuar login');
    }
  }

  return (
    <SafeAreaView style={NativeScreen.safeAreaView}>
      <ScrollView style={NativeScreen.scrollView}>
          <View style={NativeScreen.View}></View>
          <Text style={explanation.bigExplanation}>{"WAY"}</Text>
          <Text style={explanation.bigExplanation}>{"LOGIN"}</Text>
          <Text style={explanation.littleEx}>{"Entre usando seu email e senha!"}</Text>

          <View style={Entrada.inputBox}>
            <TextInput
              style={Entrada.inputText}
              placeholder={"Seu e-mail"}
              value={email}
              onChangeText={text => setEmail(text)}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          <View style={Entrada.inputBox}>
            <TextInput
              style={Entrada.inputText}
              placeholder={"senha"}
              value={password}
              onChangeText={text => setPassword(text)}
              secureTextEntry
            />
          </View>
          
          <TouchableOpacity onPress={handleSubmit} style={button.darkButton}>
            <Text style={button.text}>{"ENTRAR"}</Text>
          </TouchableOpacity>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 24, marginBottom: 23 }}>
            <View style={{ flex: 1, height: 1, backgroundColor: '#363851' }} />
            <Text style={{ marginHorizontal: 10, color: '#363851' }}>ou</Text>
            <View style={{ flex: 1, height: 1, backgroundColor: '#363851' }} />
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('Cadastro')} style={button.clearButton}>
            <Text style={button.clearText}>{"não tenho cadastro!"}</Text>
          </TouchableOpacity>

        <Text
          style={{
            fontSize: 12,
            marginBottom: 202,
            marginHorizontal: 32,
            width: 311,
          }}
        >
          {"Ao continuar, você concorda com nossos Termos de Serviço e Política de Privacidade"}
        </Text>
        <View
          style={{
            backgroundColor: '#000000',
            borderRadius: 100,
            marginHorizontal: 120,
          }}
        ></View>
      </ScrollView>
    </SafeAreaView>
    
  );
};

export default Login;
