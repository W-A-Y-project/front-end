import React, { useState, useRef } from "react";
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

  Container: {
    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-evenly',
    width: width * 1.4,
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

  PostComponent: {
    borderRadius: 23,
    width: width * 0.97,
    height: 250,
    overflow: "hidden",
    backgroundColor: "#363851",
    marginHorizontal: 5,
  },

});

const Post = () => {
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
          },
        ]}
      >
        <View style={ComponentPost.Container}>
          <Text style={ComponentPost.nameText} numberOfLines={1} ellipsizeMode='tail'>Raphael Silva Costa</Text>
          <Text style={ComponentPost.sexo} numberOfLines={2}>sexo: feminino</Text>
          <Text style={ComponentPost.Age}>22 anos</Text>
          <Text style={ComponentPost.LastView} numberOfLines={2} ellipsizeMode="tail">Visto pela última vez em: Higa Atacado</Text>
          <Text style={ComponentPost.dateMiss}>10/10/2010</Text>
          <Text style={ComponentPost.AddressTextStyle} numberOfLines={2} ellipsizeMode="tail">Mora na rua Culto a Ciencia-Campinas/SP</Text>
        </View>
        <Image
          style={ComponentPost.frameChild}
          contentFit="cover"
          source={require("../../assets/picMissing.png")}
        />
        <View style={ComponentPost.postActions}>
          <EyesComponent />
          <PointComponent />
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default Post;