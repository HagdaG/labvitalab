import React, { useState, useEffect } from 'react'; 
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Alert } from 'react-native'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';


export default function PedidoRecepcao({ navigation }) {
  const [pedidos, setPedidos] = useState([]);
  const [novoPedido, setNovoPedido] = useState('');

  useEffect(() => {
    carregarPedidos();
  }, []);

  useEffect(() => {
    salvarPedidos();
  }, [pedidos]);

  const carregarPedidos = async () => {
    try {
      const dadosCarregados = await AsyncStorage.getItem('@estoque_pedidos');
      if (dadosCarregados != null) {
        setPedidos(JSON.parse(dadosCarregados));
      }
    } catch (error) {
      console.log('Erro ao carregar pedidos:', error);
    }
  };

  const salvarPedidos = async () => {
    try {
      await AsyncStorage.setItem('@estoque_pedidos', JSON.stringify(pedidos));
    } catch (error) {
      console.log('Erro ao salvar pedidos:', error);
    }
  };

  const adicionarPedido = () => {
    if (novoPedido.trim() !== '') {
      const novoItem = {
        id: (pedidos.length + 1).toString(),
        nome: novoPedido,
        quantidade: '0',
      };
      setPedidos([...pedidos, novoItem]);
      setNovoPedido('');
    }
  };

  const removerPedido = async (id) => {
    const listaAtualizada = pedidos.filter((pedido) => pedido.id !== id);
    setPedidos(listaAtualizada);

    try {
      await AsyncStorage.setItem('@estoque_pedidos', JSON.stringify(listaAtualizada));
      Alert.alert('Produto excluído', 'O produto foi removido da lista.');
    } catch (error) {
      console.log('Erro ao remover pedido:', error);
    }
  };

  const gerarPDF = async () => {
    try {
      const htmlContent = `
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; padding: 20px; }
              h1 { text-align: center; }
              table { width: 100%; border-collapse: collapse; margin-top: 20px; }
              th, td { border: 1px solid #ddd; text-align: left; padding: 8px; }
              th { background-color: #f2f2f2; }
            </style>
          </head>
          <body>
            <h1>Lista de Pedidos</h1>
            <table>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Quantidade</th>
              </tr>
              ${pedidos
                .map(
                  (pedido) => `
                    <tr>
                      <td>${pedido.id}</td>
                      <td>${pedido.nome}</td>
                      <td>${pedido.quantidade}</td>
                    </tr>`
                )
                .join('')}
            </table>
          </body>
        </html>
      `;
      const { uri } = await Print.printToFileAsync({ html: htmlContent });
      await Sharing.shareAsync(uri);
      Alert.alert('PDF Gerado', 'O arquivo foi salvo e compartilhado com sucesso.');
    } catch (error) {
      console.log('Erro ao gerar PDF:', error);
      Alert.alert('Erro', 'Não foi possível gerar o PDF.');
    }
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pedidos</Text>
      <FlatList
        data={pedidos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.nome}</Text>
            <TextInput
              style={styles.inputQuantidade}
              placeholder="Quantidade"
              keyboardType="numeric"
              value={item.quantidade}
              onChangeText={(text) => {
                const novaLista = pedidos.map((pedido) =>
                  pedido.id === item.id ? { ...pedido, quantidade: text } : pedido
                );
                setPedidos(novaLista);
              }}
            />
            <TouchableOpacity onPress={() => removerPedido(item.id)}>
              <MaterialCommunityIcons name="trash-can" size={24} color="red" />
            </TouchableOpacity>
          </View>
        )}
        ListFooterComponent={
          <View style={styles.footerContainer}>
            <TextInput
              style={styles.inputNovoPedido}
              placeholder="Nome do pedido"
              value={novoPedido}
              onChangeText={setNovoPedido}
            />
            <TouchableOpacity style={styles.botaoAdicionar} onPress={adicionarPedido}>
              <Text style={styles.botaoTexto}>Adicionar</Text>
            </TouchableOpacity>
          </View>
        }
      />
      <View style={styles.botaoContainer}>
        <TouchableOpacity
          style={styles.botaoVoltar}
          onPress={() => navigation.goBack()}>
          <Text style={styles.botaoTexto}>Voltar</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.botaoFinalizar}
        onPress={gerarPDF}>
        <Text style={styles.botaoTexto}>Finalizar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  itemText: {
    flex: 1,
    fontSize: 16,
  },
  inputQuantidade: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 5,
    width: 60,
    textAlign: 'center',
    marginRight: 10,
  },
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  inputNovoPedido: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  botaoAdicionar: {
    backgroundColor: '#006400',
    padding: 10,
    borderRadius: 5,
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
  },
  botaoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  botaoVoltar: {
    backgroundColor: '#555',
    padding: 10,
    borderRadius: 5,
  },
  botaoFinalizar: {
    backgroundColor: '#006400',
    padding: 10,
    borderRadius: 5,
  },
});
