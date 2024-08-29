import api from '../services/api';
import React, { useState } from "react";
import { View, ScrollView, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entrada, divider, explanation, button, NativeScreen } from "../styles/styles"; 
import { cadastroRedirect, feedRedirect } from '../functions/functions'; 

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailFocused, setEmailFocused] = useState(false);
  const [isPasswordFocused, setPasswordFocused] = useState(false);

  const handleLogin = () => {
    api.post('/login', {
      email,
      password,
    })
    .then((response) => {
      const data = response.data;
      if (data.token) {
        Alert.alert('Login realizado com sucesso!');
        feedRedirect(navigation);  // Supondo que feedRedirect é uma função que redireciona para a página Feed
      } else {
        Alert.alert('Erro', data.error);
      }
    })
    .catch((error) => {
      Alert.alert('Erro', 'Não foi possível realizar o login.');
      console.error(error);
    });
  };

  return (
    <SafeAreaView style={NativeScreen.safeAreaView}>
      <ScrollView style={NativeScreen.scrollView}>
        <View style={NativeScreen.View}></View>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text style={explanation.bigExplanation}>{"WAY"}</Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text style={explanation.bigExplanation}>{"LOGIN"}</Text>
        <Text style={explanation.littleEx}>{"Entre usando seu email e senha!"}</Text>

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
          <TextInput
            style={Entrada.inputText}
            placeholder={isPasswordFocused ? '' : 'senha'}
            value={password}
            onFocus={() => setPasswordFocused(true)}
            onBlur={() => setPasswordFocused(false)}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        <TouchableOpacity onPress={handleLogin} style={button.darkButton}>
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
