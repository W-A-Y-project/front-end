import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView, ScrollView, KeyboardAvoidingView, StyleSheet, Dimensions } from "react-native";
import axios from "axios";
import ChatHeaderComponent from "../components/ChatHeader";
import InputChatBarComponent from "../components/InputChatBar";
import ChatBackgroundComponent from "../components/ChatBackground";
import { NativeScreen } from "../styles/styles";
import MyMessageComponent from "../components/MyMessageComponent";
import TheymessageComponent from "../components/TheymessageComponent";

const { height } = Dimensions.get("window");

const Chat = () => {
  const [messages, setMessages] = useState([]); // Mensagens exibidas
  const [newMessage, setNewMessage] = useState(""); // Texto da nova mensagem
  const [userCPF, setUserCPF] = useState(""); // CPF do usuário logado
  const scrollViewRef = useRef();

  const chatID = "123"; // ID do chat

  // Obter o CPF do usuário logado
  const fetchUserCPF = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/user-info");
      setUserCPF(response.data.cpf); // Define o CPF do usuário logado
    } catch (error) {
      console.error("Erro ao buscar CPF do usuário:", error);
    }
  };

  // Função para buscar mensagens do servidor
  const fetchMessages = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/messages/${chatID}`);
      setMessages(response.data); // Define as mensagens recebidas
    } catch (error) {
      console.error("Erro ao buscar mensagens:", error);
    }
  };

  // Função para enviar uma nova mensagem
  const sendMessage = async (messageText) => {
    if (messageText.trim() === "") return; // Evita enviar mensagens vazias

    try {
      await axios.post("http://localhost:3000/api/messages", {
        chatID,
        senderCPF: userCPF,
        text: messageText,
      });

      fetchMessages(); // Atualiza as mensagens após o envio
      setNewMessage(""); // Limpa o campo de entrada
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
    }
  };

  // Buscar mensagens e CPF ao carregar a tela
  useEffect(() => {
    fetchUserCPF(); // Busca o CPF do usuário
    fetchMessages(); // Busca as mensagens do chat
  }, []);

  return (
    <SafeAreaView style={NativeScreen.safeAreaView}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
        <ChatHeaderComponent />
        <ChatBackgroundComponent />

        {/* Exibição de mensagens */}
        <ScrollView
          contentContainerStyle={{ padding: 16 }}
          keyboardShouldPersistTaps="handled"
          ref={scrollViewRef}
          onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
        >
          {messages.map((msg, index) => (
            msg.senderCPF === userCPF ? (
              <MyMessageComponent key={index} text={msg.text} />
            ) : (
              <TheymessageComponent key={index} text={msg.text} />
            )
          ))}
        </ScrollView>

        {/* Barra de entrada de mensagem */}
        <InputChatBarComponent
          value={newMessage}
          onChangeText={setNewMessage}
          onSend={() => sendMessage(newMessage)}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Chat;
