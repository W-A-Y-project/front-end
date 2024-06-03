import React from "react";
import { SafeAreaView, View, ScrollView, Image, Text, } from "react-native";
import {Entrada, divider, explanation, button, NativeScreen } from "../styles/styles";
export default (props) => {
    return (
        <SafeAreaView 
			style = {NativeScreen.SafeAreaView}>
			<ScrollView  
				style = {NativeScreen.ScrollView}>
        
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>

				<View style = {Entrada.inputBox}>
					<Text style = {Entrada.inputText}>
						CPF
					</Text>
				</View>
				<View style = {Entrada.inputBox}>
					<Text style = {Entrada.inputText}>
						Nome Completo
					</Text>
				</View>
				<View style = {Entrada.inputBox}>
					<Text style = {Entrada.inputText}>
						Telefone
					</Text>
				</View>
				<View style = {Entrada.inputBox}>
					<Text style = {Entrada.inputText}>
						Email
					</Text>
				</View>
				<View style = {Entrada.inputBox}>
					<Text style = {Entrada.inputText}>
						CEP
					</Text>
				</View>
				<View style = {Entrada.inputBox}>
					<Text style = {Entrada.inputText}>
						Cidade
					</Text>
				</View>
				<View style = {Entrada.inputBox}>
					<Text style = {Entrada.inputText}>
						Estado
					</Text>
				</View>
				<View style = {Entrada.inputBox}>
					<Text style = {Entrada.inputText}>
						Senha
					</Text>
				</View>
				<View style = {Entrada.inputBox}>
					<Text style = {Entrada.inputText}>
						Confirme a senha
					</Text>
				</View>



                
				<View style={button.darkButton}>
					<Text style = {button.text}>
						CRIAR CONTA
					</Text>
				</View>
              
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