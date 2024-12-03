// src/screens/Setores/Vacina/PedidosVacinas.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { salvarDados, carregarDados, removerDados } from '../../../services/asyncStorage'; // Importação do AsyncStorage

const PedidosVacinas = () => {
  const [pedido, setPedido] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [itens, setItens] = useState([]);

  const adicionarItem = () => {
    if (pedido && quantidade) {
      setItens([...itens, { nome: pedido, quantidade }]);
      setPedido('');
      setQuantidade('');
    }
  };

  const finalizarPedido = () => {
    // Aqui você pode adicionar a lógica de salvar ou gerar PDF para o pedido.
    console.log('Pedido finalizado:', itens);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Pedidos de Vacinas</Text>
      
      <View style={styles.formulario}>
        <TextInput
          style={styles.input}
          placeholder="Nome da vacina"
          value={pedido}
          onChangeText={setPedido}
        />
        <TextInput
          style={styles.input}
          placeholder="Quantidade"
          value={quantidade}
          onChangeText={setQuantidade}
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.botao} onPress={adicionarItem}>
          <Text style={styles.botaoTexto}>Adicionar ao Pedido</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={itens}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.nome} - Quantidade: {item.quantidade}</Text>
          </View>
        )}
      />

      <TouchableOpacity style={styles.botaoFinalizar} onPress={finalizarPedido}>
        <Text style={styles.botaoTexto}>Finalizar Pedido</Text>
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

export default PedidosVacinas;
