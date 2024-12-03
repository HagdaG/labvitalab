import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Alert } from 'react-native';
import { salvarDados, carregarDados, removerDados } from '../../../services/asyncStorage'; // Caminho corrigido para asyncStorage.js
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Importa os ícones
import * as Print from 'expo-print';
import { FontAwesome } from '@expo/vector-icons';

export default function EstoqueRecepcao({ navigation }) {
  const [produtos, setProdutos] = useState([
    { id: '1', nome: 'Papel A4', quantidade: 10 },
    { id: '2', nome: 'Pastas', quantidade: 5 },
    { id: '3', nome: 'Canetas', quantidade: 20 },
  ]);
  const [novoProduto, setNovoProduto] = useState('');
  const [novaQuantidade, setNovaQuantidade] = useState('');

  const adicionarProduto = () => {
    if (novoProduto && novaQuantidade) {
      const novoItem = { id: (produtos.length + 1).toString(), nome: novoProduto, quantidade: parseInt(novaQuantidade) };
      setProdutos([...produtos, novoItem]);
      setNovoProduto('');
      setNovaQuantidade('');
    } else {
      Alert.alert('Preencha todos os campos para adicionar um produto.');
    }
  };

  const editarQuantidade = (id, quantidade) => {
    const produtosAtualizados = produtos.map((produto) =>
      produto.id === id ? { ...produto, quantidade: parseInt(quantidade) } : produto
    );
    setProdutos(produtosAtualizados);
  };

  const gerarPDF = async () => {
    const html = `
      <html>
        <body>
          <h1>Estoque Recepção</h1>
          <table border="1" cellpadding="10">
            <thead>
              <tr>
                <th>Produto</th>
                <th>Quantidade</th>
              </tr>
            </thead>
            <tbody>
              ${produtos
                .map(
                  (produto) => `
                    <tr>
                      <td>${produto.nome}</td>
                      <td>${produto.quantidade}</td>
                    </tr>
                  `
                )
                .join('')}
            </tbody>
          </table>
        </body>
      </html>
    `;
    await Print.printAsync({ html });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Estoque Recepção</Text>
      
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.nome}</Text>
            <TextInput
              style={styles.quantidadeInput}
              value={String(item.quantidade)}
              keyboardType="numeric"
              onChangeText={(text) => editarQuantidade(item.id, text)}
            />
          </View>
        )}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Novo Produto"
        value={novoProduto}
        onChangeText={setNovoProduto}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantidade"
        value={novaQuantidade}
        keyboardType="numeric"
        onChangeText={setNovaQuantidade}
      />

      <TouchableOpacity style={styles.finalizarButton} onPress={adicionarProduto}>
          <Text style={styles.finalizarButtonText}>Adicionar Produto</Text>
        </TouchableOpacity>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.voltarButton} onPress={() => navigation.goBack()}>
          <FontAwesome name="arrow-left" size={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.finalizarButton} onPress={gerarPDF}>
          <Text style={styles.finalizarButtonText}>Finalizar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemText: {
    fontSize: 18,
  },
  quantidadeInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 5,
    width: 60,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  voltarButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  finalizarButton: {
    backgroundColor: '#28a745',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  finalizarButtonText: {
    color: 'white',
    fontSize: 18,
  },
});