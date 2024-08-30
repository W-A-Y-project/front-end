import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { componentPost } from "../styles/styles";
import EyesComponent from '../components/Eyes';
import PointComponent from "./Point";

const Post = () => {
  return (
    <View style={componentPost.PostComponent}>
      <View style={componentPost.Container}>
        <Text style={componentPost.nameText} numberOfLines={1} ellipsizeMode='tail'>Raphael Silva Costa</Text>
        <Text style={componentPost.sexo}numberOfLines={2}>sexo: feminino</Text>
      <Text style={componentPost.Age}>22 anos</Text>
      <Text
        style={componentPost.LastView} numberOfLines={2} ellipsizeMode="tail">Visto pela última vez em: Higa Atacado</Text>
        <Text style={componentPost.dateMiss}>10/10/2010</Text>
      <Text
        style={componentPost.AddressTextStyle} numberOfLines={2} ellipsizeMode="tail">Mora na rua Culto a Ciencia-Campinas/SP</Text>
      </View>
      <Image
        style={componentPost.frameChild}
        contentFit="cover"
        source={require("../../assets/picMissing.png")}
      />
      <View style={componentPost.postActions}>
        <EyesComponent></EyesComponent>
        <PointComponent></PointComponent>
      </View>
      <View
        style={componentPost.point}>

      </View>
    </View>
  );
};

export default Post;
