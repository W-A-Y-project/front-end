
import React, { useState } from "react";
import {TextInputMask} from 'react-native-masked-text';
/*import RNPickerSelect from 'react-native-picker-select;' PRECISA ARRUMAR ISSO AQ*/
import { SafeAreaView, View, ScrollView, Text, TextInput, TouchableOpacity, Alert } from "react-native";

import {Entrada, divider, explanation, button, NativeScreen, Arrow } from "../styles/styles";
import { cadastroForm } from "../functions/functions";
import { filtraUf, states } from "../functions/functions";
import {ArrowComponent, SameLine} from "../components/Arrow";

const Cadastro =({navigation, props}) => {

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


    return (
        <SafeAreaView 
			style = {NativeScreen.SafeAreaView}>
			<ScrollView  
				style = {NativeScreen.ScrollView}>
        
        <Text></Text>
        <View>
          <SameLine/>
        </View>
        <Text></Text>
        <Text></Text>

        <View style={Entrada.inputBox}>
          <TextInputMask
            style={Entrada.inputText}
            placeholder={isCPFFocused ? '' : 'CPF'}
            value={CPF}
            onFocus={() => setCPFFocused(true)}
            onBlur={() => setCPFFocused(false)}
            onChangeText={setCPF}
            autoCapitalize="none"
            keyboardType = {"number-pad"}
            type={'cpf'}
          />
        </View>

				<View style = {Entrada.inputBox}>
					<TextInput 
          style = {Entrada.inputText}
          placeholder={isNameFocused ? '' : 'Nome completo'}
          value={name}
          onFocus={() => setNameFocused(true)}
          onBlur={() => setNameFocused(false)}
          onChangeText={setName}
          autoCapitalize="none">	
					</TextInput>
				</View>


				<View style = {Entrada.inputBox}>
					<TextInputMask 
          style = {Entrada.inputText}
          placeholder={isPhoneFocused ? '' : '(00) 1234-4321'}
          value={phone}
          onFocus={() => setPhoneFocused(true)}
          onBlur={() => setPhoneFocused(false)}
          onChangeText={setPhone}
          autoCapitalize="none"
          type={'cel-phone'}
          options={{maskType: 'BRL', withDDD: true, dddMask: '(99)'}}
          keyboardType = {"number-pad"}>	
					</TextInputMask>
				</View>




				<View style = {Entrada.inputBox}>
					<TextInput 
          style = {Entrada.inputText}
          placeholder={isEmailFocused ? '' : 'exemplo@email.com'}
          value={email}
          onFocus={() => setEmailFocused(true)}
          onBlur={() => setEmailFocused(false)}
          onChangeText={setEmail}
          autoCapitalize="none">	
					</TextInput>
				</View>
        
        
				<View style = {Entrada.inputBox}>
					<TextInputMask 
          style = {Entrada.inputText}
          placeholder={isCEPFocused ? '' : 'CEP'}
          value={CEP}
          onFocus={() => setCEPFocused(true)}
          onBlur={() => setCEPFocused(false)}
          onChangeText={setCEP}
          autoCapitalize="none"
          type={'zip-code'}
          keyboardType = {"number-pad"}>	
					</TextInputMask>
				</View>



				<View style = {Entrada.inputBox}>
					<TextInput 
          style = {Entrada.inputText}
          placeholder={isCityFocused ? '' : 'Cidade'}
          value={city}
          onFocus={() => setCityFocused(true)}
          onBlur={() => setCityFocused(false)}
          onChangeText={setCity}
          autoCapitalize="none">	
					</TextInput>
				</View>

				<View style = {Entrada.inputBox}>
					<TextInput 
          style = {Entrada.inputText}
          placeholder={isStateFocused ? '' : 'Estado'}
          value={state}
          onFocus={() => setStateFocused(true)}
          onBlur={() => setStateFocused(false)}
          onChangeText={setState}
          autoCapitalize="none">	
					</TextInput>
				</View>
        
				
        <View style = {Entrada.inputBox}>
					<TextInput 
          style = {Entrada.inputText}
          placeholder={isPasswordFocused ? '' : 'senha'}
          value={password}
          onFocus={() => setPasswordFocused(true)}
          onBlur={() => setPasswordFocused(false)}
          onChangeText={setPassword}
          autoCapitalize="none"
          secureTextEntry>	
					</TextInput>
				</View>


				<View style = {Entrada.inputBox}>
					<TextInput 
          style = {Entrada.inputText}
          placeholder={isConfirmPasswordFocused ? '' : 'confirme a senha'}
          value={confirmPassword}
          onFocus={() => setConfirmPasswordFocused(true)}
          onBlur={() => setConfirmPasswordFocused(false)}
          onChangeText={setConfirmPassword}
          autoCapitalize="none"
          secureTextEntry>	
					</TextInput>
				</View>



        <TouchableOpacity onPress={() =>cadastroForm(navigation, CPF, name, phone, email, CEP, city, state, password, confirmPassword)} style={button.darkButton}>   
          <Text style={button.text}>
            {"ENTRAR"}
          </Text>
        </TouchableOpacity>
              
				<View 
					style = {{
						backgroundColor: "#000000",
						borderRadius: 100,
						marginHorizontal: 120,
					}}>
				</View>
			</ScrollView>
		</SafeAreaView>
    )
}
export default Cadastro;

