import React, { useState } from "react";
import { SafeAreaView, View, ScrollView, Text, TextInput, TouchableOpacity, Alert } from "react-native";

import { Entrada, divider, explanation, button, NativeScreen } from "../styles/styles"; 
import { cadastroRedirect, verifyLogin } from '../functions/functions'; 

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
                  {"LOGIN REALIZADO COM SUCESSO!"}
              </Text>
              <Text style={explanation.littleEx}>
                  {"Esta página ainda será configurada, aguarde!!"}
              </Text>

      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
