import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function Vacinas({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vacinas</Text>

      {/* Botões de navegação */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('PedidosVacinas')}
        >
          <Text style={styles.buttonText}>Pedidos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('EstoqueVacinas')}
        >
          <Text style={styles.buttonText}>Estoque</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#28a745' }]} // tom de verde diferente
          onPress={() => navigation.navigate('DuvidasVacinas')}
        >
          <Text style={styles.buttonText}>Dúvidas</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 20,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    width: '80%',
    marginBottom: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
