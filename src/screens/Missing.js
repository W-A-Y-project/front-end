import React, { useState } from "react";
import { SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, Alert, View, KeyboardAvoidingView, Image, Platform } from "react-native";
import { TextInputMask } from 'react-native-masked-text';
import * as ImagePicker from 'expo-image-picker';
import * as DocumentPicker from 'expo-document-picker';
import api from '../services/api';
import { Entrada, NativeScreen, button, explanation } from "../styles/styles";
import CheckboxComponent from "../components/checkBox";
import * as FileSystem from 'expo-file-system';


const Missing = ({navigation}) => {
  const [CPF, setCPF] = useState('');
  const [fullName, setFullName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [gender, setGender] = useState('');
  const [lastSeenLocation, setLastSeenLocation] = useState('');
  const [lastSeenDate, setLastSeenDate] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [skinColor, setSkinColor] = useState('');
  const [eyeColor, setEyeColor] = useState('');
  const [characteristics, setCharacteristics] = useState('');
  const [hair, setHair] = useState('');
  const [illness, setIllness] = useState(false);
  const [illnessDescription, setIllnessDescription] = useState('');
  const [clothingWorn, setClothingWorn] = useState('');
  const [vehicle, setVehicle] = useState(false);
  const [vehicleDescription, setVehicleDescription] = useState('');
  const [photo, setPhoto] = useState('');
  const [boDocument, setBoDocument] = useState('');
  const [boVerified, setBoVerified] = useState(true);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permissão necessária', 'Desculpe, precisamos de permissão para acessar as fotos.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      
    });

    if (!result.canceled) {
      // Verifica o tamanho do arquivo
      const fileInfo = await FileSystem.getInfoAsync(result.assets[0].uri);
      const fileSizeMB = fileInfo.size / 1024 / 1024;

      if (fileSizeMB > 5) {
        Alert.alert('Erro', 'O arquivo deve ter no máximo 5MB');
        return;
      }

      setPhoto(result.assets[0]);
    }
  };

  const pickBoDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({ 
        type: 'application/pdf',
        copyToCacheDirectory: true 
      });
      
      if (!result.canceled) {
        // Verifica o tamanho do arquivo PDF
        const fileInfo = await FileSystem.getInfoAsync(result.assets[0].uri);
        const fileSizeMB = fileInfo.size / 1024 / 1024;
  
        if (fileSizeMB > 10) {
          Alert.alert('Erro', 'O arquivo PDF deve ter no máximo 10MB');
          return;
        }
  
        // Use result.assets[0] instead of status
        setBoDocument(result.assets[0]);
      }
    } catch (error) {
      console.error('Erro ao selecionar documento:', error);
      Alert.alert('Erro', 'Não foi possível selecionar o documento');
    }
  };

  const handleSubmit = async () => {
    console.log('Photo:', photo);
    console.log('BO Document:', boDocument);

    const formattedBirthDate = formatDate(birthDate);
    const formattedLastSeenDate = formatDate(lastSeenDate);

    if (!formattedBirthDate || !formattedLastSeenDate) {
      Alert.alert('Erro', 'Por favor, preencha corretamente as datas');
      return;
    }

    const formData = new FormData();

    // Append all text fields
    formData.append('CPF', CPF.replace(/\D/g, ''));
    formData.append('FullName', fullName);
    formData.append('BirthDate', formattedBirthDate);
    formData.append('Gender', gender);
    formData.append('LastSeenLocation', lastSeenLocation);
    formData.append('LastSeenDate', formattedLastSeenDate);
    formData.append('City', city);
    formData.append('State', state);
    formData.append('PostalCode', postalCode.replace(/\D/g, ''));
    formData.append('SkinColor', skinColor);
    formData.append('EyeColor', eyeColor);
    formData.append('Characteristics', characteristics);
    formData.append('Hair', hair);
    formData.append('ClothingWorn', clothingWorn);
    formData.append('BoVerified', boVerified)
    
    // Conditional fields
    formData.append('Illness', illness ? '1' : '0');
    if (illness) formData.append('IllnessDescription', illnessDescription);
    
    formData.append('Vehicle', vehicle ? '1' : '0');
    if (vehicle) formData.append('VehicleDescription', vehicleDescription);
    
    let photoFile = null
    if (photo && photo.uri) {
      photoFile = {
      uri: photo.uri,
      type: 'image/jpeg',
      name: `missing_person_photo_${Date.now()}.jpg`
    }
    formData.append('photo', photoFile);
  }
  
    let boDocumentFile = null
    if(boDocument && boDocument.uri) {
      boDocumentFile = {
        uri: boDocument.uri,
        type: 'application/pdf',
        name: `missing_person_bo_${Date.now()}.pdf`
    };
    formData.append('boDocument', boDocumentFile);
  }

    try {
      const response = await api.post('/create-disappeared', formData, {
        headers: { 
          'Content-Type': 'multipart/form-data',
        },
        transformRequest: [data => data] // Prevent automatic JSON transformation
      });

      if (response.status === 201) {
        Alert.alert('Sucesso', 'Desaparecido cadastrado com sucesso');

        const newPost = {
          name: fullName,
          gender: gender,
          age: calculateAge(birthDate),
          lastView: lastSeenLocation,
          dateMiss: formatDate(lastSeenDate),
          address: `${city} - ${state}, ${postalCode}`,
          skin: skinColor,
          eyesColor: eyeColor,
          characteristics: characteristics,
          hair: hair,
          illnessDescription: illnessDescription,
          vehicleDescription: vehicleDescription,
          clothes: clothingWorn,
          photoUri: response.data.disappeared.photo.uri,  
      };
        navigation.navigate('Feed', {newPost});
      } else {
        Alert.alert('Erro', 'Não foi possível cadastrar o desaparecido');
      }
    } catch (error) {
      console.error('Erro no cadastro:', error.response ? error.response.data : error);
      Alert.alert('Erro', `Ocorreu um erro: ${error.response ? error.response.data.message : error.message}`);
    }
  };
  const formatDate = (date) => {
    const dateParts = date.split('/');
    if (dateParts.length === 3) {
      const [day, month, year] = dateParts.map(Number);
      if (day > 0 && day <= 31 && month > 0 && month <= 12 && year > 1900) {
        return `${String(day).padStart(2, '0')}/${String(month).padStart(2, '0')}/${year}`;
      }
    }
    return null; // Inválido
  };
  
  
  const calculateAge = (birthDate) => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
  
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDifference = today.getMonth() - birthDateObj.getMonth();
  
    // Ajuste a idade se o aniversário ainda não aconteceu neste ano
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDateObj.getDate())) {
      age--;
    }
  
    return age;
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>  {/* Garantir que a tela tenha fundo branco */}
      <KeyboardAvoidingView 
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
      >
        <ScrollView 
          style={NativeScreen.ScrollView}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ 
            paddingBottom: 100,  // Espaço extra no final
            paddingHorizontal: 20 // Adiciona padding horizontal
          }}
          showsVerticalScrollIndicator={false} // Esconde a barra de rolagem
        >
          <View style={{ paddingTop: 20 }}>
            <Text style={explanation.bigExplanation}>Informações sobre o desaparecido</Text>
        
        
          {/* Seleção de Foto com mais detalhes */}
          <TouchableOpacity 
            onPress={pickImage} 
            style={button.darkButton}
          >
            <Text style={button.text}>
              {photo ? "Alterar Foto" : "Selecionar Foto"}
            </Text>
          </TouchableOpacity>
  
          {photo && (
            <View style={{ alignItems: 'center' }}>
              <Image
                source={{ uri: photo.uri }}
                style={{ 
                  width: 200, 
                  height: 200, 
                  marginVertical: 10,
                  borderRadius: 10 // Adiciona bordas arredondadas
                }}
                resizeMode="cover"
              />
              <TouchableOpacity 
                onPress={() => setPhoto()} 
                style={{
                  backgroundColor: 'red', 
                  padding: 10, 
                  borderRadius: 5, 
                  marginTop: 5
                }}
              >
                <Text style={{ color: 'white' }}>Remover Foto</Text>
              </TouchableOpacity>
            </View>
          )}

          {/* Inputs para cada campo */}
          <TextInput
            style={Entrada.inputBox}
            value={CPF}
            onChangeText={setCPF}
            placeholder="CPF"
            keyboardType="numeric"
          />
          <TextInput
            style={Entrada.inputBox}
            placeholder="Nome completo"
            value={fullName}
            onChangeText={setFullName}
          />
          <TextInputMask
            style={Entrada.inputBox}
            placeholder="Data de nascimento"
            type="datetime"
            options={{ format: "DD/MM/YYYY" }}
            value={birthDate}
            onChangeText={setBirthDate}
          />
          <TextInput
            style={Entrada.inputBox}
            placeholder="Gênero"
            value={gender}
            onChangeText={setGender}
          />
          <TextInput
            style={Entrada.inputBox}
            placeholder="Última localização vista"
            value={lastSeenLocation}
            onChangeText={setLastSeenLocation}
          />
          <TextInputMask
            style={Entrada.inputBox}
            placeholder="Data última vez vista"
            type="datetime"
            options={{ format: "DD/MM/YYYY" }}
            value={lastSeenDate}
            onChangeText={setLastSeenDate}
          />
          <TextInput
            style={Entrada.inputBox}
            placeholder="Cidade"
            value={city}
            onChangeText={setCity}
          />
          <TextInput
            style={Entrada.inputBox}
            placeholder="Estado"
            value={state}
            onChangeText={setState}
          />
          <TextInput
            style={Entrada.inputBox}
            placeholder="CEP"
            value={postalCode}
            onChangeText={setPostalCode}
            keyboardType="numeric"
          />
          <TextInput
            style={Entrada.inputBox}
            placeholder="Cor da pele"
            value={skinColor}
            onChangeText={setSkinColor}
          />
          <TextInput
            style={Entrada.inputBox}
            placeholder="Cor dos olhos"
            value={eyeColor}
            onChangeText={setEyeColor}
          />
          <TextInput
            style={Entrada.inputBox}
            placeholder="Roupas que utilizava"
            value={clothingWorn}
            onChangeText={setClothingWorn}
          />
          <TextInput
            style={Entrada.inputBox}
            placeholder="Características físicas"
            value={characteristics}
            onChangeText={setCharacteristics}
          />
          <TextInput
            style={Entrada.inputBox}
            placeholder="Cabelo"
            value={hair}
            onChangeText={setHair}
          />
          <CheckboxComponent
        label="Doença?"
        isChecked={illness}
        toggleCheckbox={() => setIllness(!illness)}
      />
      {illness && (
            <TextInput
              style={Entrada.inputBox}
              placeholder="Descrição da doença"
              value={illnessDescription}
              onChangeText={setIllnessDescription}
            />
          )}

      <CheckboxComponent
        label="Estava em um veículo?"
        isChecked={vehicle}
        toggleCheckbox={() => setVehicle(!vehicle)}
      />
          {vehicle && (
            <TextInput
              style={Entrada.inputBox}
              placeholder="Descrição do veículo"
              value={vehicleDescription}
              onChangeText={setVehicleDescription}
            />
          )}

  <TouchableOpacity 
          onPress={pickBoDocument} 
          style={button.darkButton}
        >
          <Text style={button.text}>
            {boDocument ? "Alterar Documento BO" : "Selecionar Documento BO"}
          </Text>
        </TouchableOpacity>

        {boDocument && (
  <View style={{ marginVertical: 10, alignItems: 'center' }}>
    <Text style={{ color: "blue", marginBottom: 10 }}>
      Arquivo selecionado: {boDocument.name || "Documento.pdf"}
    </Text>
    
    {/* Botões para visualizar e remover o BO */}
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      
   {/*   <TouchableOpacity
        onPress={() => {
          // Função para visualizar o documento (se for PDF, etc.)
          Alert.alert('Visualização', 'Funcionalidade de visualização de PDF a ser implementada');
        }}
        style={[button.lightButton, { marginRight: 10 }]}
      >
        <Text style={button.text}>Visualizar</Text>
      </TouchableOpacity>
      */}
      
      <TouchableOpacity
        onPress={() => setBoDocument(null)} // Limpa o estado do boDocument
        style={[button.darkButton, { backgroundColor: 'red' }]}
      >
        <Text style={button.text}>Remover</Text>
      </TouchableOpacity>
            </View>
          </View>
        )}

        {/* Botão de Cadastro */}
        <TouchableOpacity 
          onPress={handleSubmit} 
          style={[
            button.darkButton, 
            { 
              marginTop: 20, 
              opacity: (!CPF || !fullName || !birthDate || !gender || !lastSeenLocation || !lastSeenDate || !city || !state || !postalCode || !skinColor || !eyeColor || !hair || !photo || !boDocument) ? 0.5 : 1 
            }
          ]}
          disabled={!CPF || !fullName || !birthDate || !gender || !lastSeenLocation || !lastSeenDate || !city || !state || !postalCode || !skinColor || !eyeColor || !hair || !photo || !boDocument}
        >
          <Text style={button.text}>Cadastrar</Text>
        </TouchableOpacity>

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  </SafeAreaView>
);
}
export default Missing;
