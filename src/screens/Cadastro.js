import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import RNPickerSelect from 'react-native-picker-select';
import { SafeAreaView } from 'react-native-safe-area-context';
import api from '../services/api';
import { Entrada, explanation, button, NativeScreen } from '../styles/styles';

const Cadastro = ({ navigation }) => {
  const [name, setName] = useState('');
  const [CPF, setCPF] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //const [confirmPassword, setConfirmPassword] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  const handleSubmit = async () => {
   // if (password !== confirmPassword) {
     // Alert.alert('Erro', 'As senhas não coincidem');
      //return;
    //}

    const cleanCPF = CPF.replace(/\D/g, '');
    const cleanPhone = phone.replace(/\D/g, '');
    const cleanPostalCode = postalCode.replace(/\D/g, '');

    try {
      const response = await api.post('/register', {
        cpf: cleanCPF,
        fullName: name,
        email: email,
        phone: cleanPhone,
        postalCode: cleanPostalCode,
        city: city,
        state: state,
        password: password,
      });

      const { _id } = response.data;
      console.log(_id);
      console.log('Resposta do servidor:', response);
      console.log('Dados da resposta:', response.data);
  
        // Verifica se o token está presente na resposta antes de tentar armazená-lo
        if (response.status === 201) {
          //Alert.alert('Sucesso', 'Usuário cadastrado com sucesso');
          navigation.navigate('Login'); // Navega para a tela de Login após o cadastro
        } else {
          Alert.alert('Erro', 'Não foi possível realizar o cadastro. Tente novamente.');
        }
      
    }catch (error) {
        console.error('Erro ao fazer cadastro:', error.response ? error.response.data : error.message);
        Alert.alert('Erro', 'Ocorreu um erro ao tentar realizar o cadastro.');
      }
    };

    
      const cidadesPorEstado = {
        AC: [
          'Rio Branco', 'Cruzeiro do Sul', 'Senador Guiomard', 'Brasileia', 'Epitaciolândia',
          'Plácido de Castro', 'Xapuri', 'Capixaba', 'Assis Brasil', 'Senador Guiomard'
        ],
        AL: [
          'Maceió', 'Arapiraca', 'Palmeira dos Índios', 'Rio Largo', 'Delmiro Gouveia',
          'Penedo', 'Satuba', 'Ibiporã', 'Arapiraca', 'Joaçaba', 'Joaçaba', 'Marechal Deodoro',
          'São Miguel dos Campos', 'Pilar', 'Capela', 'Traipu', 'Olho d’Água das Flores',
          'Boca da Mata', 'Teotônio Vilela', 'Campo Alegre', 'Atalaia', 'Messias',
          'Maragogi', 'São Sebastião', 'Paripueira', 'Joaçaba'
        ],
        AP: [
          'Macapá', 'Santana', 'Laranjal do Jari', 'Tartarugalzinho', 'Oiapoque',
          'Porto Grande', 'Amapá', 'Mazagão', 'Cutias', 'Ferreira Gomes', 'Calçoene',
          'Pracuúba', 'Serra do Navio', 'Amapá', 'Laranjal do Jari', 'Oiapoque'
        ],
        AM: [
          'Manaus', 'Parintins', 'Itacoatiara', 'Coari', 'Manacapuru',
          'Tefé', 'Maués', 'Benjamin Constant', 'Iranduba', 'Presidente Figueiredo',
          'Novo Airão', 'São Gabriel da Cachoeira', 'Rio Preto da Eva', 'Barcelos',
          'Humaitá', 'Tupé', 'Tapauá', 'Jutaí', 'Boca do Acre'
        ],
        BA: [
          'Salvador', 'Feira de Santana', 'Vitória da Conquista', 'Camaçari', 'Ilhéus',
          'Itabuna', 'Juazeiro', 'Lauro de Freitas', 'Valença', 'Teixeira de Freitas',
          'Simões Filho', 'Barreiras', 'Porto Seguro', 'Eunápolis', 'São Francisco do Conde',
          'Candeias', 'Alagoinhas', 'Itapetinga', 'Jacobina', 'Senhor do Bonfim',
          'Laje', 'Santo Antônio de Jesus', 'Brumado', 'Ibotirama', 'Pojuca',
          'São Sebastião do Passé', 'Conceição do Coité', 'Riachão do Jacuípe'
        ],
        CE: [
          'Fortaleza', 'Caucaia', 'Juazeiro do Norte', 'Maracanaú', 'Sobral',
          'Crato', 'Itapipoca', 'Aquiraz', 'Quixadá', 'Icó', 'Russas', 'Limoeiro do Norte',
          'Jaguaribe', 'Barbalha', 'Caririaçu', 'Pacajus', 'Senador Pompeu', 'Morada Nova',
          'Quixeramobim', 'Aracati', 'Moraújo', 'Camocim', 'Acaraú'
        ],
        DF: [
          'Brasília', 'Gama', 'Taguatinga', 'Ceilândia', 'Samambaia',
          'Águas Claras', 'Planaltina', 'Recanto das Emas', 'São Sebastião', 'Sobradinho',
          'Núcleo Bandeirante', 'Riacho Fundo', 'Santa Maria', 'Guará', 'Lago Sul',
          'Lago Norte', 'Jardim Botânico', 'Sudoeste', 'Varjão', 'Águas Claras'
        ],
        ES: [
          'Vitória', 'Vila Velha', 'Cariacica', 'Serra', 'Colatina',
          'Linhares', 'São Mateus', 'Guarapari', 'Anchieta', 'São Gabriel da Palha',
          'Itapemirim', 'Aracruz', 'Montes Claros', 'Nova Venécia', 'Marechal Floriano',
          'Domingos Martins', 'Apiacá', 'Rio Bananal', 'Cachoeiro de Itapemirim', 'Conceição da Barra'
        ],
        GO: [
          'Goiânia', 'Aparecida de Goiânia', 'Anápolis', 'Rio Verde', 'Gurupi',
          'Catalão', 'Jataí', 'Itumbiara', 'Formosa', 'Inhumas', 'Morrinhos', 'Trindade',
          'Águas Lindas de Goiás', 'Senador Canedo', 'Nerópolis', 'Ceres', 'Cidade Ocidental',
          'Brazlândia', 'Pirenópolis', 'Goiatuba', 'Cristalina', 'Campo Limpo de Goiás'
        ],
        MA: [
          'São Luís', 'Imperatriz', 'Caxias', 'Timon', 'Paço do Lumiar',
          'São José de Ribamar', 'Codó', 'Açailândia', 'Bacabal', 'Buriticupu',
          'Santa Inês', 'Barra do Corda', 'Altamira do Maranhão', 'Pedreiras', 'Rosário',
          'São Mateus do Maranhão', 'Itapecuru Mirim', 'Matões', 'Icatu', 'Paulo Ramos'
        ],
        MT: [
          'Cuiabá', 'Várzea Grande', 'Rondonópolis', 'Sinop', 'Lucas do Rio Verde',
          'Tangará da Serra', 'Sorriso', 'Primavera do Leste', 'Chapada dos Guimarães', 'Campo Verde',
          'Jaciara', 'Alta Floresta', 'Cáceres', 'Diamantino', 'Nova Mutum',
          'Santo Antônio de Leverger', 'Barra do Garças', 'Tangará da Serra', 'Rondonópolis', 'Poconé'
        ],
        MS: [
          'Campo Grande', 'Dourados', 'Três Lagoas', 'Corumbá', 'Ponta Porã',
          'Rio Brilhante', 'Sidrolândia', 'Naviraí', 'Jardim', 'Terenos',
          'Maracaju', 'Bandeirantes', 'Cassilândia', 'Paranaíba', 'Ivinhema',
          'Nova Andradina', 'Coxim', 'Aparecida do Taboado', 'Selvíria', 'Porto Murtinho'
        ],
        MG: [
          'Belo Horizonte', 'Uberlândia', 'Contagem', 'Juiz de Fora', 'Betim',
          'Montes Claros', 'Governador Valadares', 'Sete Lagoas', 'Divinópolis', 'Poços de Caldas',
          'Teófilo Otoni', 'Uberaba', 'Santa Luzia', 'Itabira', 'Muriae',
          'Varginha', 'Patos de Minas', 'Pato de Minas', 'Lavras', 'Santa Rita do Sapucaí'
        ],
        PA: [
          'Belém', 'Ananindeua', 'Santarém', 'Marabá', 'Altamira',
          'Castanhal', 'Bragança', 'Parauapebas', 'Itaituba', 'Benevides',
          'Cametá', 'Barcarena', 'Capanema', 'Tailândia', 'Conceição do Araguaia',
          'Rurópolis', 'Tucuruí', 'São Domingos do Araguaia', 'Santa Izabel do Pará', 'Nova Ipixuna'
        ],
        PB: [
          'João Pessoa', 'Campina Grande', 'Patos', 'Santa Rita', 'Bayeux',
          'Sousa', 'Cabedelo', 'Alhandra', 'Cajazeiras', 'Itabaiana',
          'Rio Tinto', 'Esperança', 'Pato', 'Queimadas', 'São Bento',
          'Serra Branca', 'Santa Luzia', 'Picuí', 'Conde', 'Taperoá'
        ],
        PR: [
          'Curitiba', 'Londrina', 'Maringá', 'Ponta Grossa', 'Cascavel',
          'Foz do Iguaçu', 'São José dos Pinhais', 'Toledo', 'Colombo', 'Araucária',
          'Guarapuava', 'Paranaguá', 'Campo Largo', 'Pato Branco', 'Cerro Azul',
          'Lapa', 'São Mateus do Sul', 'Apucarana', 'União da Vitória', 'Laranjeiras do Sul'
        ],
        PE: [
          'Recife', 'Olinda', 'Jaboatão dos Guararapes', 'Caruaru', 'Petrolina',
          'Cabo de Santo Agostinho', 'São Lourenço da Mata', 'Garanhuns', 'Santa Cruz do Capibaribe', 'Igarassu',
          'Ouricuri', 'Salgueiro', 'Goiana', 'Gravatá', 'Pombos',
          'Altinho', 'Pesqueira', 'Belo Jardim', 'Surubim', 'São Joaquim do Monte'
        ],
        PI: [
          'Teresina', 'Parnaíba', 'Picos', 'Floriano', 'Oeiras',
          'Campo Maior', 'União', 'São Raimundo Nonato', 'José de Freitas', 'Piripiri',
          'Cocal', 'Buriti dos Lopes', 'Pedro II', 'Beneditinos', 'Demerval Lobão',
          'Cajazeiras do Piauí', 'Pavussú', 'Regeneração', 'Amarante', 'Jatobá do Piauí'
        ],
        RJ: [
          'Rio de Janeiro', 'Niterói', 'São Gonçalo', 'Duque de Caxias', 'Nova Iguaçu',
          'Teresópolis', 'Petrópolis', 'Volta Redonda', 'Macaé', 'Cabo Frio',
          'Resende', 'Angra dos Reis', 'Itaboraí', 'Nilópolis', 'Belford Roxo',
          'Queimados', 'São João de Meriti', 'Mesquita', 'São Pedro da Aldeia', 'Araruama'
        ],
        RN: [
          'Natal', 'Mossoró', 'Parnamirim', 'São Gonçalo do Amarante', 'Caicó',
          'Currais Novos', 'Santa Cruz', 'Açu', 'Cerro Corá', 'Pau dos Ferros',
          'João Câmara', 'São Miguel', 'Nova Cruz', 'São Paulo do Potengi', 'Nísia Floresta',
          'Macau', 'Patu', 'Serra do Mel', 'Tangará', 'Ipanguaçu'
        ],
        RS: [
          'Porto Alegre', 'Caxias do Sul', 'Pelotas', 'Santa Maria', 'Gravataí',
          'Bagé', 'Rio Grande', 'São Leopoldo', 'Novo Hamburgo', 'Bento Gonçalves',
          'Ijuí', 'Uruguaiana', 'Erechim', 'Sapucaia do Sul', 'Guaíba',
          'Canela', 'Santo Ângelo', 'Veranópolis', 'Bandeirantes', 'São Borja'
        ],
        SC: [
          'Florianópolis', 'Joinville', 'Blumenau', 'Chapecó', 'São José',
          'Criciúma', 'Itajaí', 'Lages', 'Jaraguá do Sul', 'Tubarão',
          'Balneário Camboriú', 'Brusque', 'Camboriú', 'Rio do Sul', 'Palhoça',
          'São Bento do Sul', 'Nova Trento', 'Caçador', 'Canoinhas', 'Araranguá'
        ],
        SE: [
          'Aracaju', 'Lagarto', 'Itabaiana', 'Nossa Senhora do Socorro', 'Estância',
          'São Cristóvão', 'Tobias Barreto', 'Laranjeiras', 'Barra dos Coqueiros', 'Simão Dias',
          'Campo do Brito', 'Aquidabã', 'Itaporanga d’Ajuda', 'Propriá', 'Neópolis',
          'Riachuelo', 'São Domingos', 'Telha', 'Boquim', 'Pacatuba'
        ],
        SP: [
          'São Paulo', 'Guarulhos', 'Campinas', 'São Bernardo do Campo', 'São José dos Campos',
          'Santos', 'Ribeirão Preto', 'São Vicente', 'Mauá', 'Osasco',
          'Diadema', 'Sorocaba', 'Jundiaí', 'Itapevi', 'Taboão da Serra',
          'São Caetano do Sul', 'Bauru', 'Carapicuíba', 'Piracicaba', 'Franca'
        ],
        TO: [
          'Palmas', 'Araguaína', 'Gurupi', 'Tocantinópolis', 'Paraíso do Tocantins',
          'Porto Nacional', 'São Sebastião do Tocantins', 'Miracema do Tocantins', 'Formoso do Araguaia', 'Colinas do Tocantins',
          'Caminha', 'Silvanópolis', 'Santa Rita do Tocantins', 'Juarina', 'São Valério da Natividade',
          'Caxias do Sul', 'Lagoa da Confusão', 'Dianópolis', 'Aliança do Tocantins', 'Nova Olinda'
        ]
      };
    
  return (
    <SafeAreaView style={NativeScreen.safeAreaView}>
      <ScrollView style={NativeScreen.scrollView}>
        <View style={NativeScreen.View}></View>
        <Text style={explanation.bigExplanation}>{"WAY"}</Text>
        <Text style={explanation.bigExplanation}>{"Cadastro"}</Text>
        <Text style={explanation.littleEx}>{"Insira seus dados corretamente!"}</Text>
        
        <View style={Entrada.inputBox}>
          <TextInputMask
            style={Entrada.inputText}
            value={CPF}
            onChangeText={text => setCPF(text)}
            placeholder={'CPF'}
            keyboardType="numeric"
            autoCapitalize="none"
              autoCorrect={false}
          />
        </View>

        <View style={Entrada.inputBox}>
          <TextInput
            style={Entrada.inputText}
            placeholder={'Nome completo'}
            value={name}
            onChangeText={text => setName(text)}
            autoCapitalize="none"
              autoCorrect={false}
          />
        </View>

        <View style={Entrada.inputBox}>
          <TextInput
            style={Entrada.inputText}
            placeholder={'Seu e-mail'}
            value={email}
            onChangeText={text => setEmail(text)}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>

        <View style={Entrada.inputBox}>
          <TextInputMask
            style={Entrada.inputText}
            placeholder="(00) 1234-4321"
            value={phone}
            onChangeText={text => setPhone(text)}
            keyboardType="numeric"
          />
        </View>

        <View style={Entrada.inputBox}>
          <TextInputMask
            type={'zip-code'}
            value={postalCode}
            onChangeText={text => setPostalCode(text)}
            style={Entrada.inputText}
            placeholder={'CEP'}
            keyboardType="numeric"
          />
        </View>

        <View style={Entrada.inputAndroid}>
          <RNPickerSelect
            onValueChange={text => setState(text)}
            placeholder={{
              label: 'Estado',
              value: null,
              color: '#9EA0A4',
            }}
            style={{
              inputAndroid: {
                color: '#9EA0A4',
                fontSize: 16,
                paddingHorizontal: 8,
                paddingVertical: 2,
              },
              placeholder: {
                color: '#9EA0A4',
                fontSize: 60,
              },
            }}
            items={[
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
            ]}
          />
        </View>

        <View style={Entrada.inputAndroid}>
        <RNPickerSelect
          onValueChange={text => setCity(text)}
          placeholder={{
            label: 'Cidade',
            value: null,
            color: '#9EA0A4',
          }}
          style={{
            inputAndroid: {
              color: '#9EA0A4',
              fontSize: 16,
              paddingHorizontal: 8,
              paddingVertical: 2,
            },
            placeholder: {
              color: '#9EA0A4',
              fontSize: 60,
            },
          }}
          items={
            state ? cidadesPorEstado[state].map(cidade => ({ label: cidade, value: cidade })) : []
          }
        />
      </View>
        

        <View style={Entrada.inputBox}>
          <TextInput
            style={Entrada.inputText}
            placeholder={'Senha'}
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry
          />
        </View>


        <TouchableOpacity onPress={handleSubmit} style={button.darkButton}>
          <Text style={button.text}>{"CADASTRAR"}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={button.clearButton}>
          <Text style={button.clearText}>{"Já tenho cadastro"}</Text>
        </TouchableOpacity>

        <Text style={{ fontSize: 12, marginBottom: 202, marginHorizontal: 32, width: 311 }}>
          {"Ao continuar, você concorda com nossos Termos de Serviço e Política de Privacidade"}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Cadastro; 