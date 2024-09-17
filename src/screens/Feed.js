import React, { useState } from "react";
import { View, ScrollView, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entrada, divider, explanation, button, NativeScreen, Responsive } from "../styles/styles"; 
import { cadastroRedirect, verifyLogin } from '../functions/functions'; 
import Post from "../components/Post";
import PointComponent from "../components/Point";
import SearchBarComponent from "../components/searchBar";

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

  },

  {
    id: 2,
    name: "João John",
    sexo: "masculino",
    age: 86,
    lastView: "Casa de apoio a idosos",
    dateMiss: "12/02/24",
    address: "rua dos idosos preeguiçosos/SP"
  },
  
  {
    id: 3,
    name: "asdasdsdfasd",
    sexo: "masculino",
    age: 823,
    lastView: "Casa de apoio a idosos",
    dateMiss: "12/04/1345",
    address: "rua dos idosos preeguiçosos/SP"
  },
  
  {
    id: 3,
    name: "ladorica",
    sexo: "feminino",
    age: 11,
    lastView: "Casa de apoio a kids",
    dateMiss: "12/02/24",
    address: "rua das crianças perdidas/SP"
  }

]

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailFocused, setEmailFocused] = useState(false);
  const [isPasswordFocused, setPasswordFocused] = useState(false);


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
          address={person.address}/>
        
        ))}
        
      </ScrollView>
    </SafeAreaView>
  );
};

export default Feed;
