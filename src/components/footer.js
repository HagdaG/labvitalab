// src/components/Footer.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Footer({ navigation }) {
  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity 
        style={styles.footerButton} 
        onPress={() => navigation.navigate('Conta')}>
        <Text style={styles.footerText}>Conta</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.footerButton} 
        onPress={() => navigation.navigate('Sobre')}>
        <Text style={styles.footerText}>Sobre</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.footerButton} 
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.footerText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    position: 'absolute', // Isso deixa o rodapé fixo
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#005566',
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  footerButton: {
    backgroundColor: '#004d4d',
    padding: 10,
    borderRadius: 5,
  },
  footerText: {
    color: '#fff',
    fontSize: 16,
  },
});
