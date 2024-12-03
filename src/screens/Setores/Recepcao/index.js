import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../Recepcao/style';

export default function Recepcao({ navigation }) {
  return (
    <View style={styles.container}>
      
      {/* Faixa verde com título dinâmico */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Recepção</Text> {/* O título da tela é fixo para Recepção */}
      </View>

      {/* Conteúdo principal */}
      <View style={styles.mainContent}>
        <Text style={styles.welcomeText}>Bem-vindo ao setor Recepção</Text>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => navigation.navigate('EstoqueRecepcao')}>
            <Text style={styles.buttonText}>Estoque</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.button} 
            onPress={() => navigation.navigate('PedidosRecepcao')}>
            <Text style={styles.buttonText}>Pedido</Text>
          </TouchableOpacity>
        </View>
        </View>

      {/* Rodapé com os botões de "Conta" e "Sobre" */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('Conta')}>
          <Text>Conta</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Sobre')}>
          <Text>Sobre</Text>
        </TouchableOpacity>
      </View>

      {/* Botão de voltar */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>
    </View>

      

  );
}