import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';

const vacinas = [
  { id: '1', nome: 'Vacina A', descricao: 'Descrição da Vacina A', foto: 'url_da_imagem_1' },
  { id: '2', nome: 'Vacina B', descricao: 'Descrição da Vacina B', foto: 'url_da_imagem_2' },
  // Adicione mais vacinas conforme necessário
];

export default function DuvidasVacinas({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredVacinas, setFilteredVacinas] = useState(vacinas);

  const handleSearch = (text) => {
    setSearchQuery(text);
    if (text) {
      setFilteredVacinas(vacinas.filter(vacina => vacina.nome.toLowerCase().includes(text.toLowerCase())));
    } else {
      setFilteredVacinas(vacinas);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dúvidas</Text>
      
      {/* Campo de busca */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Digite o nome da vacina"
          value={searchQuery}
          onChangeText={handleSearch}
        />
        <TouchableOpacity style={styles.searchButton} onPress={() => handleSearch(searchQuery)}>
          <Text style={styles.searchButtonText}>🔍</Text>
        </TouchableOpacity>
      </View>

      {/* Lista de vacinas */}
      <FlatList
        data={filteredVacinas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.vacinaContainer}>
            <Image source={{ uri: item.foto }} style={styles.vacinaImage} />
            <View style={styles.vacinaDetails}>
              <Text style={styles.vacinaTitle}>{item.nome}</Text>
              <Text style={styles.vacinaDescription}>{item.descricao}</Text>
            </View>
          </View>
        )}
      />

      {/* Botões */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#007bff' }]}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#28a745' }]}
          onPress={() => navigation.navigate('AdicionarVacina')}
        >
          <Text style={styles.buttonText}>Adicionar Vacinas</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    flex: 1,
    padding: 10,
    borderRadius: 8,
  },
  searchButton: {
    padding: 10,
    marginLeft: 10,
    backgroundColor: '#28a745',
    borderRadius: 8,
  },
  searchButtonText: {
    fontSize: 20,
    color: '#fff',
  },
  vacinaContainer: {
    flexDirection: 'row',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
  vacinaImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 10,
  },
  vacinaDetails: {
    flex: 1,
  },
  vacinaTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  vacinaDescription: {
    fontSize: 14,
    color: '#777',
  },
  buttonContainer: {
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
