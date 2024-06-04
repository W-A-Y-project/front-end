
import {Alert} from 'react-native';

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

export function cadastroForm(navigation, CPF, name, phone, email, CEP, city, state, password, confirmPassword){
  Alert.alert("Seu nome é:" + name);
}




/*import RNPickerSelect from 'react-native-picker-select';

export const states = 
[
  { label: 'Acre', value: 'AC' },
  { label: 'Alagoas', value: 'AL' },
  { label: 'Amapá', value: 'AP' },
  { label: 'Amazonas', value: 'AM' },
  { label: 'Bahia', value: 'BA' },
  { label: 'Ceará', value: 'CE' },
  { label: 'Distrito Federal', value: 'DF' },
  { label: 'Espírito Santo', value: 'ES' },
  { label: 'Goiás', value: 'GO' },
  { label: 'Maranhão', value: 'MA' },
  { label: 'Mato Grosso', value: 'MT' },
  { label: 'Mato Grosso do Sul', value: 'MS' },
  { label: 'Minas Gerais', value: 'MG' },
  { label: 'Pará', value: 'PA' },
  { label: 'Paraíba', value: 'PB' },
  { label: 'Paraná', value: 'PR' },
  { label: 'Pernambuco', value: 'PE' },
  { label: 'Piauí', value: 'PI' },
  { label: 'Rio de Janeiro', value: 'RJ' },
  { label: 'Rio Grande do Norte', value: 'RN' },
  { label: 'Rio Grande do Sul', value: 'RS' },
  { label: 'Rondônia', value: 'RO' },
  { label: 'Roraima', value: 'RR' },
  { label: 'Santa Catarina', value: 'SC' },
  { label: 'São Paulo', value: 'SP' },
  { label: 'Sergipe', value: 'SE' },
  { label: 'Tocantins', value: 'TO' },
];

export const filtraUf = () =>{
  if(!uf){
    alert.alert("Erro", "UF inválido!");
    return;
  }
}
CORRIGIR ISSO AQ NO CADASTRO PRA 'STATES-ESTADO' ACEITAR SÓ UF
*/
