import React, { useState } from "react";
import { SafeAreaView, View, ScrollView, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Image } from "react-native";
import { TextInputMask } from 'react-native-masked-text';
import * as ImagePicker from 'expo-image-picker'; // Certifique-se de importar corretamente
import * as DocumentPicker from 'expo-document-picker'; // Certifique-se de importar corretamente
import { Entrada, NativeScreen, button, explanation } from "../styles/styles";
import { isFormValid } from "../functions/functions";
import { ArrowComponent, SameLine } from "../components/Arrow";
import CheckboxComponent from "../components/checkBox";

const InputField = ({ placeholder, value, setValue, isMasked, maskType, keyboardType }) => {
  return (
    <View style={Entrada.inputBox}>
      {isMasked ? (
        <TextInputMask
          style={Entrada.inputText}
          placeholder={placeholder}
          autoCapitalize="none"
          keyboardType={keyboardType}
          type={maskType}
          value={value}
          onChangeText={setValue}
        />
      ) : (
        <TextInput
          style={Entrada.inputText}
          placeholder={placeholder}
          autoCapitalize="none"
          keyboardType={keyboardType}
          value={value}
          onChangeText={setValue}
        />
      )}
    </View>
  );
};

const Missing = ({ navigation }) => {

  // Estados para os campos do formulário
  const [fullName, setFullName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [gender, setGender] = useState('');
  const [motherName, setMotherName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [skinColor, setSkinColor] = useState('');
  const [eyeColor, setEyeColor] = useState('');
  const [characteristics, setCharacteristics] = useState('');
  const [clothingWorn, setClothingWorn] = useState('');
  const [phone, setPhone] = useState('');
  const [vehicleDescription, setVehicleDescription] = useState('');

  const [photo, setPhoto] = useState(null); // Estado para a foto
  const [boDocument, setBoDocument] = useState(null); // Estado para o PDF

  const [isDisabledChecked, setIsDisabledChecked] = useState(false);
  const [disabilityDescription, setDisabilityDescription] = useState('');

  const [hasSocialMedia, setHasSocialMedia] = useState(false);
  const [socialMedia, setSocialMedia] = useState('');

  const [hadPhoneChecked, setHadPhoneChecked] = useState(false);
  const [wasDrivingChecked, setWasDrivingChecked] = useState(false);

  const handleSubmit = () => {
    // Simulação de envio para o banco de dados
    const data = {
      fullName,
      birthDate,
      gender,
      skinColor,
      eyeColor,
      characteristics,
      clothingWorn,
      phone: hadPhoneChecked ? phone : '',
      vehicle: wasDrivingChecked,
      vehicleDescription,
      disability: isDisabledChecked,
      disabilityDescription: isDisabledChecked ? disabilityDescription : '',
      socialMedia: hasSocialMedia ? socialMedia : '',
      photo,
      boDocument,
    };

    console.log("Dados enviados:", data);
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setPhoto(result.uri);
    }
  };

  const pickBoDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({
      type: "application/pdf",
    });

    if (result.type !== "cancel") {
      setBoDocument(result.uri);
    }
  };

  return (
    <SafeAreaView style={NativeScreen.SafeAreaView}>
      <ScrollView style={NativeScreen.ScrollView}>
        <KeyboardAvoidingView>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('Feed')}>
              <SameLine />
            </TouchableOpacity>
            <Text style={explanation.bigExplanation}>
              {"Informações pessoais do desaparecido"}
            </Text>
          </View>

          <InputField placeholder="Nome do desaparecido" value={fullName} setValue={setFullName} isMasked={false} keyboardType="default" />
          <InputField placeholder="Data de nascimento" value={birthDate} setValue={setBirthDate} isMasked={true} maskType="datetime" keyboardType="number-pad" />
          <InputField placeholder="Sexo" value={gender} setValue={setGender} isMasked={false} keyboardType="default" />
          <InputField placeholder="Nome da mãe" value={motherName} setValue={setMotherName} isMasked={false} keyboardType="default" />
          <InputField placeholder="Nome do pai" value={fatherName} setValue={setFatherName} isMasked={false} keyboardType="default" />
          <InputField placeholder="Cor da pele" value={skinColor} setValue={setSkinColor} isMasked={false} keyboardType="default" />
          <InputField placeholder="Cor dos olhos" value={eyeColor} setValue={setEyeColor} isMasked={false} keyboardType="default" />
          <InputField placeholder="Sinais particulares. Ex: tatuagem, cicatriz" value={characteristics} setValue={setCharacteristics} isMasked={false} keyboardType="default" />
          <InputField placeholder="Roupas que o desaparecido estava vestindo" value={clothingWorn} setValue={setClothingWorn} isMasked={false} keyboardType="default" />

          <TouchableOpacity onPress={pickImage} style={button.darkButton}>
            <Text style={button.text}>Selecionar Foto</Text>
          </TouchableOpacity>
          {photo && <Image source={{ uri: photo }} style={{ width: 100, height: 100 }} />}

          <TouchableOpacity onPress={pickBoDocument} style={button.darkButton}>
            <Text style={button.text}>Selecionar Boletim de Ocorrência (PDF)</Text>
          </TouchableOpacity>
          {boDocument && <Text>{boDocument}</Text>}

          <CheckboxComponent
            label="É pessoa com deficiência mental"
            isChecked={isDisabledChecked}
            toggleCheckbox={() => setIsDisabledChecked(!isDisabledChecked)}
          />
          {isDisabledChecked && (
            <TextInput
              style={Entrada.inputBox}
              placeholder="Qual é a deficiência?"
              value={disabilityDescription}
              onChangeText={setDisabilityDescription}
            />
          )}
           <CheckboxComponent
            label="Tem redes sociais"
            isChecked={hasSocialMedia}
            toggleCheckbox={() => setHasSocialMedia(!hasSocialMedia)}
          />
          {hasSocialMedia && (
            <TextInput
              style={Entrada.inputBox}
              placeholder="Digite as redes sociais"
            />
          )}

          <CheckboxComponent
            label="Estava com telefone quando desapareceu"
            isChecked={hadPhoneChecked}
            toggleCheckbox={() => setHadPhoneChecked(!hadPhoneChecked)}
          />
          {hadPhoneChecked && (
            <TextInput
              style={Entrada.inputBox}
              placeholder="Digite o número do telefone"
              keyboardType="phone-pad"
            />
          )}

          <CheckboxComponent
            label="Dirigia algum veículo quando desapareceu"
            isChecked={wasDrivingChecked}
            toggleCheckbox={() => setWasDrivingChecked(!wasDrivingChecked)}
          />
          {wasDrivingChecked && (
            <TextInput
              style={Entrada.inputBox}
              placeholder="Digite a placa do veículo"
            />
          )}

          <TouchableOpacity onPress={handleSubmit} style={button.darkButton}>
            <Text style={button.text}>Próximo</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Missing;
