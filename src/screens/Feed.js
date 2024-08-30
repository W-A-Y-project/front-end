import React, { useState } from "react";
import { View, ScrollView, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entrada, divider, explanation, button, NativeScreen, Responsive } from "../styles/styles"; 
import { cadastroRedirect, verifyLogin } from '../functions/functions'; 
import Post from "../components/Post";
import PointComponent from "../components/Point";
import SearchBarComponent from "../components/searchBar";

const Feed = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailFocused, setEmailFocused] = useState(false);
  const [isPasswordFocused, setPasswordFocused] = useState(false);


  return (
    <SafeAreaView style={[NativeScreen.safeAreaView]}>
      <ScrollView style={[NativeScreen.scrollView]}>
      <SearchBarComponent/>
        <View style={[NativeScreen.View]}></View>
          <Post/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Feed;
