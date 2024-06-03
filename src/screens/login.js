
import React from "react";
import { SafeAreaView, View, ScrollView, Image, Text, TouchableOpacity, Alert } from "react-native";

import {Entrada, divider, explanation, button, NativeScreen } from "../styles/styles"; // Ajuste nos imports
import {cadastroRedirect} from './functions/functions';

const Login =({navigation}) => {
  return (
      <SafeAreaView style={NativeScreen.safeAreaView}>
          <ScrollView style={NativeScreen.scrollView}>
              <View style={NativeScreen.View}>
                
                  
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

              {/* input de CPF */}
              <View style={Entrada.inputBox}>
                  <Text style={Entrada.inputText}>
                      {"000.000.000-00"}
                  </Text>
              </View>
              <View style={Entrada.inputBox}>
                  <Text style={Entrada.inputText}>
                      {"senha"}
                  </Text>
              </View>
              {/* input de senha */}

              {/* BOTÃO DE ENTRAR */}
              <TouchableOpacity onPress={() => Alert.alert("Entrando...")} style={button.darkButton}>
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
