import { useState, useRef } from "react";

import { Text, View, StyleSheet, Dimensions, TouchableOpacity, Animated } from "react-native";
import { Image } from "expo-image";
import EyesComponent from '../components/Eyes';
import PointComponent from "./Point";

const { width, height } = Dimensions.get('window');

const ComponentPost = StyleSheet.create({
  Color: {
    colorGhostwhite: "#f8f8ff",
    backgroundColor: "#363851"
  },

  FontFamily: {
    judsonRegular: "Judson-Regular",
  },

  Container: {//esse é o container que fica ao lado...
    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-evenly',
    width: width * 1.4,
  },
  
  ExpandedContainer:{//esse é o container expandido
    left: 10,
    width: width * 0.97,
    justifyContent: 'space-evenly',
    top: 270,
    position: "absolute",
  },

  ExpandedText:{
    textAlign: 'left',
    fontSize: 20,
    width: width * 0.95,
    color: "#f8f8ff",
    marginBottom: 10,
    justifyContent: "space-around",
  },

  nameText: {
    fontSize: 20,
    color: "#f8f8ff",
    fontFamily: "Judson-Regular",
    textAlign: 'center',
    marginBottom: 10,
  },

  sexo: {
    fontSize: 18,
    textAlign: 'center',
    color: "#f8f8ff",
    fontFamily: "Judson-Regular",
    marginBottom: 10,
  },

  Age: {
    fontSize: 20,
    textAlign: 'center',
    color: "#f8f8ff",
    fontFamily: "Judson-Regular",
    marginBottom: 10,
  },

  LastView: {
    fontSize: 14,
    textAlign: 'center',
    width: 160,
    color: "#f8f8ff",
    fontFamily: "Judson-Regular",
    marginBottom: 10,
  },

  dateMiss: {
    textAlign: 'center',
    fontSize: 15,
    color: "#f8f8ff",
    fontFamily: "Judson-Regular",
    marginBottom: 10,
  },

  AddressTextStyle: {
    textAlign: 'center',
    width: 150,
    color: "#f8f8ff",
    fontSize: 14,
    fontFamily: "Judson-Regular",
    marginBottom: 10,
  },

  frameChild: {
    left: 10,
    width: width * 0.45,
    height: 238,
    top: 7,
    position: "absolute",
  },

  postActionsChild: {
    width: 35,
    height: 35,
    overflow: "hidden",
  },

  postActions: {
    top: 219,
    left: 65,
    width: 70,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    backgroundColor: "#2f4f4f",
  },

  PostComponent: {//esse é o componente do post completo
    borderRadius: 23,
    width: width * 0.97,
    height: 250,
    overflow: "hidden",
    backgroundColor: "#363851",
    marginHorizontal: 5,
  },

});

const Post = ({name, sexo, age, lastView, dateMiss, address, skin, eyesColor, characteristics, hair, illness, vehicle, clothes}) => {
  const [expanded, setExpanded] = useState(false); // Estado para controlar expansão
  const animation = useRef(new Animated.Value(0)).current; // Valor animado para a expansão

  
  const handlePress = () => {
    console.log('Post pressed'); // Confirma que a função é chamada
    const toValue = expanded ? 0 : 1;
    setExpanded(!expanded);
    Animated.timing(animation, {
      toValue,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };





  const interpolatedWidth = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [width * 0.97, width-10], // Expande para a largura total
  });

  const interpolatedHeight = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [250, height-100], // Expande para a altura total
  });






  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={1}>
      <Animated.View
        style={[
          ComponentPost.PostComponent,
          {
            width: interpolatedWidth,
            height: interpolatedHeight,
            marginBottom: 5,  // Espaçamento entre os posts
          },
        ]}
      >
        <View style={ComponentPost.Container}>
          <Text style={ComponentPost.nameText} numberOfLines={1} ellipsizeMode='tail'>{name}</Text>
          <Text style={ComponentPost.sexo} numberOfLines={2}>{sexo}</Text>
          <Text style={ComponentPost.Age}>{age} anos</Text>
          <Text style={ComponentPost.LastView} numberOfLines={2} ellipsizeMode="tail">Visto por último em: {lastView}</Text>
          <Text style={ComponentPost.dateMiss}>{dateMiss}</Text>
          <Text style={ComponentPost.AddressTextStyle} numberOfLines={2} ellipsizeMode="tail">{address}</Text>

          {expanded &&(
            <View style={ComponentPost.ExpandedContainer}>
              <Text style={ComponentPost.ExpandedText} numberOfLines={2} ellipsizeMode="tail">Cor da pele: {skin}</Text>
              <Text style={ComponentPost.ExpandedText} numberOfLines={2} ellipsizeMode="tail">cor dos olhos: {eyesColor}</Text>
              <Text style={ComponentPost.ExpandedText} numberOfLines={3} ellipsizeMode="tail">características: {characteristics}</Text>
              <Text style={ComponentPost.ExpandedText} numberOfLines={2} ellipsizeMode="tail">tipo e cor de cabelo: {hair}</Text>
              <Text style={ComponentPost.ExpandedText} numberOfLines={3} ellipsizeMode="tail">Deficiência: {illness}</Text>
              <Text style={ComponentPost.ExpandedText} numberOfLines={2} ellipsizeMode="tail">Veículo: {vehicle}</Text>
              <Text style={ComponentPost.ExpandedText} numberOfLines={5} ellipsizeMode="tail">Roupas que estava vestindo: {clothes}</Text>
            </View>//mapa futuramente aqui skksksks
              
          )}
        </View>
        <Image
          style={ComponentPost.frameChild}
          contentFit="cover"
          source={require("../../assets/picMissing.png")}
        />

        <View style={ComponentPost.postActions}>
          <EyesComponent/>
          <PointComponent/>
        </View>
      
      </Animated.View>
    </TouchableOpacity>
  );
};

export default Post;