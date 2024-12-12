import { useState, useRef, useEffect } from "react";
import { Text, View, Image,Linking, StyleSheet, Dimensions, TouchableOpacity, Animated, Alert, ActivityIndicator } from "react-native";

import EyesComponent from '../components/Eyes';
import PointComponent from "./Point";

const { width, height } = Dimensions.get('window');

const ComponentPost = StyleSheet.create({
  Color: {
    colorGhostwhite: "#f8f8ff",
    backgroundColor: "#363851",
  },

  Container: {
    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-evenly',
    width: width * 0.97,
  },

  ExpandedContainer: {
    padding: 10,
    width: width * 0.95,
  },

  nameText: {
    fontSize: 20,
    color: "#f8f8ff",
    textAlign: 'center',
    marginBottom: 5,
  },

  ageText: {
    fontSize: 18,
    textAlign: 'center',
    color: "#f8f8ff",
    marginBottom: 10,
  },

  ExpandedText: {
    fontSize: 16,
    color: "#f8f8ff",
    marginBottom: 5,
  },

  postImage: {
    width: width * 0.6,  // Increased width
    height: 300,  // Increased height
    borderRadius: 10,
    marginBottom: 10,
    alignSelf: 'center',
  },
  
  PostComponent: {
    borderRadius: 23,
    width: width * 1,
    overflow: "hidden",
    backgroundColor: "#363851",
    marginBottom: 10,
    alignSelf: 'center',
  },

  loadingIndicator: {
    width: width * 0.8, 
    height: 300, 
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#ddd', // Gray background while loading
  }
});

const Post = ({
  name,
  gender,
  age,
  lastView,
  dateMiss,
  address,
  skin,
  eyesColor,
  characteristics,
  hair,
  illnessDescription,
  vehicleDescription,
  clothes,
  photoUri, // Use this as the prop for the image URI
}) => {
  const [expanded, setExpanded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [imageError, setImageError] = useState(null);
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    console.log('Post Component - PhotoURI:', photoUri);
  }, [photoUri]);



  const handlePress = () => {
    const toValue = expanded ? 0 : 1;
    setExpanded(!expanded);
    Animated.timing(animation, {
      toValue,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const handleImageError = (error) => {
    console.log('Image load error - Full Error:', JSON.stringify(error.nativeEvent));
    setImageError(error.nativeEvent.error);
    setLoading(false);

    Alert.alert('Erro de Imagem', `Detalhes: ${JSON.stringify(error.nativeEvent)}`, [
      { text: 'OK', onPress: () => console.log('Image Error Alert Dismissed') }
    ]);
  };

  const handleImageLoad = () => {
    setLoading(false);
    setImageError(null);
  };

  const handleAddressPress = () => {
    const encodedAddress = encodeURIComponent(`${address}`);
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    Linking.openURL(googleMapsUrl);
  };
  
  const interpolatedHeight = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [250, height * 0.8],
  });
  
  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.9}>
      <Animated.View
        style={[ComponentPost.PostComponent, { height: interpolatedHeight }]}>
        
        {photoUri ? (  
          <View style={{ alignItems: 'center' }}>
            <Image
              source={{ 
                uri: photoUri,
                cache: 'reload'
              }} 
              style={{ 
                width: 200, 
                height: 200, 
                marginVertical: 10,
                borderRadius: 10 
              }}
              resizeMode="cover"
              onError={(e) => {
                console.error('Image load error for URI:', photoUri);
                console.error('Full error:', e.nativeEvent);
              }}
              onLoad={() => console.log('Image loaded successfully:', photoUri)}
            />
          </View>
        ) : (
          <View style={ComponentPost.loadingIndicator}>
            <Text>Sem imagem disponível</Text>
          </View>
        )}

        <Text style={ComponentPost.nameText}>{name}</Text>
        <Text style={ComponentPost.ageText}>{age} anos</Text>

        {expanded && (
          <View style={ComponentPost.ExpandedContainer}>
            <Text style={ComponentPost.ExpandedText}>Gênero: {gender}</Text>
            <Text style={ComponentPost.ExpandedText}>Última vez visto: {lastView}</Text>
            <Text style={ComponentPost.ExpandedText}>Data de desaparecimento: {dateMiss}</Text>
            <TouchableOpacity onPress={handleAddressPress}>
              <Text style={[ComponentPost.ExpandedText, ComponentPost.addressText]}>
                Endereço: {address}
              </Text>
            </TouchableOpacity>
            <Text style={ComponentPost.ExpandedText}>Cor da pele: {skin}</Text>
            <Text style={ComponentPost.ExpandedText}>Cor dos olhos: {eyesColor}</Text>
            <Text style={ComponentPost.ExpandedText}>Características: {characteristics}</Text>
            <Text style={ComponentPost.ExpandedText}>Cabelo: {hair}</Text>
            <Text style={ComponentPost.ExpandedText}>Doenças: {illnessDescription}</Text>
            <Text style={ComponentPost.ExpandedText}>Veículo: {vehicleDescription}</Text>
            <Text style={ComponentPost.ExpandedText}>Roupas: {clothes}</Text>
          </View>
        )}
      </Animated.View>
    </TouchableOpacity>
  );
};

export default Post;