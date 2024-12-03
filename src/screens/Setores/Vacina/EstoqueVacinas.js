// src/screens/Setores/Vacina/EstoqueVacinas.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { salvarDados, carregarDados, removerDados } from '../../../services/asyncStorage'; // Importação do AsyncStorage

const EstoqueVacinas = () => {
  const [produto, setProduto] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [estoque, setEstoque] = useState([]);

  const adicionarProduto = () => {
    if (produto && quantidade) {
      setEstoque([...estoque, { nome: produto, quantidade }]);
      setProduto('');
      setQuantidade('');
    }
  };

  const finalizarEstoque = () => {
    // Aqui você pode adicionar a lógica de salvar ou gerar PDF do estoque.
    console.log('Estoque finalizado:', estoque);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Estoque de Vacinas</Text>
      
      <View style={styles.formulario}>
        <TextInput
          style={styles.input}
          placeholder="Nome da vacina"
          value={produto}
          onChangeText={setProduto}
        />
        <TextInput
          style={styles.input}
          placeholder="Quantidade"
          value={quantidade}
          onChangeText={setQuantidade}
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.botao} onPress={adicionarProduto}>
          <Text style={styles.botaoTexto}>Adicionar ao Estoque</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={estoque}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.nome} - Quantidade: {item.quantidade}</Text>
          </View>
        )}
      />

      <TouchableOpacity style={styles.botaoFinalizar} onPress={finalizarEstoque}>
        <Text style={styles.botaoTexto}>Finalizar Estoque</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  formulario: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
  },
  botao: {
    backgroundColor: '#28a745',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  botaoTexto: {
    color: 'white',
    fontWeight: 'bold',
  },
  botaoFinalizar: {
    backgroundColor: '#007bff',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  item: {
    backgroundColor: '#f8f9fa',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default EstoqueVacinas;
