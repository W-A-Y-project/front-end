import React, { useState, useEffect } from "react";
import { View, ScrollView, Text, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Post from "../components/Post";
import SearchBarComponent from "../components/searchBar";
import TabBarComponent from "../components/TabBar";
import api from '../services/api';

const Feed = ({ navigation, route }) => {
  const [postData, setPostData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Verificar se há um novo post enviado pela rota anterior
    if (route.params?.newPost) {
      setPostData(currentPosts => [route.params.newPost, ...currentPosts]);
    }

    // Busca os posts do back-end ao carregar o feed
    const fetchPosts = async () => {
      try {
        setIsLoading(true);

        const response = await api.get('/disappeared');
        
        // Processar os dados recebidos
        const processedPosts = response.data.map(post => {
          const isBase64 = post.photoUri && post.photoUri.startsWith('data:image');
          const isAbsoluteUrl = post.photoUri && post.photoUri.startsWith('http');
        
          return {
            ...post,
            photoUri: isAbsoluteUrl 
              ? post.photoUri 
              : isBase64
              ? post.photoUri 
              : post.photoUri 
              ? `http://192.168.0.101:3000/uploads/${post.photoUri}`
              : null, // Define null se não houver `photoUri`
          };
        });
        
      
        setPostData(processedPosts);
        setIsLoading(false);
      } catch (error) {
        console.error('Erro ao buscar posts:', error);
        setError('Não foi possível carregar os posts');
        setIsLoading(false);
        
        // Opcional: mostrar um alerta de erro
        Alert.alert('Erro', 'Não foi possível carregar os posts');
      }
    };

    fetchPosts();
  }, [route.params?.newPost]); // Observa alterações em "newPost" no route params

  // Renderização condicional
  /*
  if (isLoading) {
    return (
      <SafeAreaView>
        <Text>Carregando posts...</Text>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView>
        <Text>{error}</Text>
      </SafeAreaView>
    );
  }
    */

  return (
    <SafeAreaView>
      <SearchBarComponent />
      <ScrollView>
        {postData.length > 0 ? (
          postData.map((person) => (
            <Post
              key={person.id}
              id={person.id}
              name={person.name}
              gender={person.gender}
              age={person.age}
              lastView={person.lastView}
              dateMiss={person.dateMiss}
              address={person.address}
              skin={person.skin}
              eyesColor={person.eyesColor}
              characteristics={person.characteristics}
              hair={person.hair}
              illnessDescription={person.illnessDescription}
              vehicleDescription={person.vehicleDescription}
              clothes={person.clothes}
              photoUri={person.photoUri}
            />
          ))
        ) : (
          <Text>Nenhum post encontrado</Text>
        )}
      </ScrollView>
      <TabBarComponent />
    </SafeAreaView>
  );
};

export default Feed;
