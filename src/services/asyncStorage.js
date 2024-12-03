// src/service/asyncStorage.js
import AsyncStorage from '@react-native-async-storage/async-storage';

// Função para salvar dados
export const salvarDados = async (chave, dados) => {
  try {
    const jsonValue = JSON.stringify(dados);
    await AsyncStorage.setItem(chave, jsonValue);
  } catch (e) {
    console.error('Erro ao salvar dados', e);
  }
};

// Função para carregar dados
export const carregarDados = async (chave) => {
  try {
    const jsonValue = await AsyncStorage.getItem(chave);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error('Erro ao carregar dados', e);
  }
};

// Função para remover dados
export const removerDados = async (chave) => {
  try {
    await AsyncStorage.removeItem(chave);
  } catch (e) {
    console.error('Erro ao remover dados', e);
  }
};
