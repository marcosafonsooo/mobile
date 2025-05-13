import { FontAwesome6 } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Keyboard, StyleSheet, Text, TextInput, View, Alert, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function buscaCep() {
  const [cep, setCep] = useState('');
  interface Endereco {
    logradouro: string;
    bairro: string;
    localidade: string;
    uf: string;
  }

  const [enderecos, setEnderecos] = useState<Endereco[]>([]);

  async function buscarCEP() {
    if (cep.length !== 8) {
      Alert.alert('CEP inválido', 'O CEP deve conter exatamente 8 números.');
      return;
    }

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const dados = await response.json();

      if (dados.erro) {
        Alert.alert('Erro', 'CEP não encontrado.');
      } else {
        setEnderecos((prev) => [...prev, dados]);

        Keyboard.dismiss(); // Fecha o teclado após a busca
      }
    } catch (error) {
      Alert.alert('Erro de conexão', 'Não foi possível buscar o CEP. Tente novamente.');
    }


    
  }

  function removerEndereco(index: number) {
    setEnderecos((prev) => prev.filter((_, i) => i !== index));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}><strong>Ache o endereço de alguma arte!</strong></Text>

    <View style={styles.infoContainer}>
        <TextInput
            style={styles.textinput}
            placeholder="Digite o CEP (somente números)"
            value={cep}
            onChangeText={setCep}
            keyboardType="numeric"
            maxLength={8}
        />
        <TouchableOpacity onPress={buscarCEP} style={styles.lupa}>
            <AntDesign name="search1" size={24} color="#49093e" />
        </TouchableOpacity>
    </View>


    {enderecos.map((endereco, index) => (
  <View key={index} style={styles.card}>
    <View style={styles.cardContent}>
      <View>
        <Text style={styles.label}>📍 Logradouro: <Text style={styles.value}>{endereco.logradouro}</Text></Text>
        <Text style={styles.label}>🏘️ Bairro: <Text style={styles.value}>{endereco.bairro}</Text></Text>
        <Text style={styles.label}>🌆 Cidade: <Text style={styles.value}>{endereco.localidade}</Text></Text>
        <Text style={styles.label}>🗺️ Estado: <Text style={styles.value}>{endereco.uf}</Text></Text>
      </View>
      <TouchableOpacity onPress={() => removerEndereco(index)}>
        <AntDesign name="delete" size={24} color="#a00" />
      </TouchableOpacity>
    </View>
  </View>
))}


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe7fa',
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
    lupa: {
        verticalAlign: 'middle',
        alignSelf: 'center',
    },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#49093e',
    alignSelf: 'center',
  },
  textinput: {
    flex: 1, 
    borderWidth: 1,
    borderColor: '#ccc', 
    padding: 10, 
    borderRadius: 5, 
    marginRight: 10, 
    color: ''
  },
  result: {
    marginTop: 20,
    color: '#49093e',
    alignItems: 'flex-start',
    // fontSize: 50,
    width: '100%',
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  
  label: {
    fontSize: 16,
    color: '#49093e',
    marginBottom: 6,
    fontWeight: 'bold',
  },
  
  value: {
    fontWeight: 'normal',
    color: '#333',
  },
  
});
