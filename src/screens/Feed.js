import React, { useState } from "react";
import { View, ScrollView, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entrada, divider, explanation, button, NativeScreen, Responsive } from "../styles/styles"; 
import { cadastroRedirect, verifyLogin } from '../functions/functions'; 
import Post from "../components/Post";
import PointComponent from "../components/Point";
import Missing from "./Missing";
import SearchBarComponent from "../components/searchBar";
import TabBarComponent from "../components/TabBar";
import Icon from 'react-native-vector-icons/MaterialIcons';


const Feed = ({ navigation }) => {
  const postData = [ 
  {
    id:1,
    name: "Maria Mary Marie",
    sexo: "feminino",
    age: 22,
    lastView: "Shopping das marias",
    dateMiss: "10/10/1010",
    address: "rua marymary 22, Campinas/SP",
    skin: "branca",
    eyesColor: "castanho escuro",
    characteristics: "tatuagem de palhaço nas duas pernas",
    hair: "longo, azul marinho",
    illness: "não",
    vehicle: "moto vermelha: abc-1234",
    clothes: "vestido rosa, blusa de frio azul claro com gorro de trico preto, crocs pink"
  },

  {
    id: 2,
    name: "João John",
    sexo: "masculino",
    age: 86,
    lastView: "Casa de apoio a idosos",
    dateMiss: "12/02/24",
    address: "rua dos idosos preeguiçosos/SP",
    skin: "branca",
    eyesColor: "castanho escuro",
    characteristics: "tatuagem de palhaço nas duas pernas",
    hair: "longo, azul marinho",
    illness: "não",
    vehicle: "moto vermelha: abc-1234",
    clothes: "vestido rosa, blusa de frio azul claro com gorro de trico preto, crocs pink"
  },
  
  {
    id: 3,
    name: "asdasdsdfasd",
    sexo: "masculino",
    age: 823,
    lastView: "Casa de apoio a idosos",
    dateMiss: "12/04/1345",
    address: "rua dos idosos preeguiçosos/SP",
    skin: "branca",
    eyesColor: "castanho escuro",
    characteristics: "tatuagem de palhaço nas duas pernas",
    hair: "longo, azul marinho",
    illness: "não",
    vehicle: "moto vermelha: abc-1234",
    clothes: "vestido rosa, blusa de frio azul claro com gorro de trico preto, crocs pink"
  },
  
  {
    id: 4,
    name: "ladorica",
    sexo: "feminino",
    age: 11,
    lastView: "Casa de apoio a kids",
    dateMiss: "12/02/24",
    address: "rua das crianças perdidas/SP",
    skin: "branca",
    eyesColor: "castanho escuro",
    characteristics: "tatuagem de palhaço nas duas pernas",
    hair: "longo, azul marinho",
    illness: "não",
    vehicle: "moto vermelha: abc-1234",
    clothes: "vestido rosa, blusa de frio azul claro com gorro de trico preto, crocs pink"
  }

]

  return (
    <SafeAreaView style={[NativeScreen.safeAreaView]}>
      <SearchBarComponent/>
      <View style={[NativeScreen.View]}></View>
      <ScrollView style={[NativeScreen.scrollView]}>
        {postData.map((person)=>(
          <Post
          key={person.id}
          name={person.name}
          sexo={person.sexo}
          age={person.age}
          lastView={person.lastView}
          dateMiss={person.dateMiss}
          address={person.address}
          skin={person.skin}
          eyesColor={person.eyesColor}
          characteristics={person.characteristics}
          hair={person.hair}
          illness={person.illness}
          vehicle={person.vehicle}
          clothes={person.clothes}/>
          
        ))
        }
      </ScrollView>


      <TabBarComponent/>

    </SafeAreaView>
  );
};

export default Feed;
