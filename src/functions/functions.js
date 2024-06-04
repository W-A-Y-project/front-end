
export function cadastroRedirect(navigation){
  navigation.navigate('Cadastro');
}

export function feedRedirect(navigation, email, password){
  if((email == 'rafaela.ferreiras997@gmail.com') || (password == '100306')){
    navigation.navigate('Feed');
  } else {
    Alert.alert("Erro", "Email ou seja incorretos.")
  }
}
