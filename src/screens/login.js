import React, { useState } from "react";
import { SafeAreaView, View, ScrollView, Text, TextInput, TouchableOpacity, Alert } from "react-native";

import { Entrada, divider, explanation, button, NativeScreen } from "../styles/styles"; 
import { cadastroRedirect, feedRedirect } from '../functions/functions'; 

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailFocused, setEmailFocused] = useState(false);
  const [isPasswordFocused, setPasswordFocused] = useState(false);


  return (
    <SafeAreaView style={NativeScreen.safeAreaView}>
      <ScrollView style={NativeScreen.scrollView}>
        <View style={NativeScreen.View}>
          {/* Adicione outros componentes aqui se necessário */}
        </View>
              <Text></Text>
              <Text></Text>
              <Text></Text>      
              <Text style={explanation.bigExplanation}>
                  {"WAY"}
              </Text>
              <Text></Text>
              <Text></Text>
              <Text></Text>
              <Text style={explanation.bigExplanation}>
                  {"LOGIN"}
              </Text>
              <Text style={explanation.littleEx}>
                  {"Entre usando seu CPF e senha!"}
              </Text>

        {/* input de e-mail */}
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

        {/* input de senha */}
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

        {/* BOTÃO DE ENTRAR */}
        <TouchableOpacity onPress={() => feedRedirect(navigation, email, password)} style={button.darkButton}>
          <Text style={button.text}>
            {"ENTRAR"}
          </Text>
        </TouchableOpacity>
        {/* FIM DO BOTÃO DE ENTRAR */}





        <View style={{ flexDirection: "row", alignItems: "center", marginHorizontal: 24, marginBottom: 23 }}>
          <View style={{ flex: 1, height: 1, backgroundColor: "#363851" }} />
          <Text style={{ marginHorizontal: 10, color: "#363851" }}>ou</Text>
          <View style={{ flex: 1, height: 1, backgroundColor: "#363851" }} />
        </View>






        {/* botão de não tenho cadastro */}
        <TouchableOpacity onPress={() => cadastroRedirect(navigation)} style={button.clearButton}>
          <Text style={button.clearText}>
            {"não tenho cadastro!"}
          </Text>
        </TouchableOpacity>
        {/* fim do botão */}

        <Text
          style={{
            fontSize: 12,
            marginBottom: 202,
            marginHorizontal: 32,
            width: 311,
          }}>
          {"By clicking continue, you agree to our Terms of Service and Privacy Policy"}
        </Text>
        <View
          style={{
            backgroundColor: "#000000",
            borderRadius: 100,
            marginHorizontal: 120,
          }}>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
