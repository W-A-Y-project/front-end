import React, { useState, useEffect } from "react";
import { View, ScrollView, style, Dimensions, StyleSheet, Text, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Post from "../components/Post";
import SearchBarComponent from "../components/searchBar";
import TabBarComponent from "../components/TabBar";
import api from '../services/api';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  searchBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    backgroundColor: '#FFFFFF', // Cor de fundo da SearchBar
  },
  scrollView: {
    flexGrow: 1,
    paddingTop: 70, // Espaço para a SearchBar
    paddingBottom: 70, // Espaço para a TabBar
  },
  tabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    backgroundColor: '#FFFFFF',
  },
});

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
        const response = await api.get('/disappeared');
        console.log('Raw response:', response.data); // Log the raw data
        
        const processedPosts = response.data.map(post => {
          console.log('Individual post:', post); // Log each post
          return {
            ...post,
            photoUri: post.photoUri 
              ? post.photoUri 
              : null,
          };
        });
        
        console.log('Processed posts:', processedPosts);
        setPostData(processedPosts);
        setIsLoading(false);
      } catch (error) {
        console.error('Detailed error:', error.response ? error.response.data : error);
        setError('Não foi possível carregar os posts');
        setIsLoading(false);
        
        // Opcional: mostrar um alerta de erro
        Alert.alert('Erro', 'Não foi possível carregar os posts');
      }
    };

    fetchPosts();
  }, [route.params?.newPost]); // Observa alterações em "newPost" no route params

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBar}>
        <SearchBarComponent />
      </View>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {postData.length > 0 ? (
          postData.map((person) => (
            <Post
              key={person.Cpf} // Usando CPF como chave única
              id={person.Cpf}
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
      <View style={styles.tabBar}>
        <TabBarComponent />
      </View>
    </SafeAreaView>
  );
};

export default Feed;