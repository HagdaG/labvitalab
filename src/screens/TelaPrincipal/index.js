import { View, Text, TouchableOpacity } from 'react-native';
import styles from './style';
import React from 'react';

export default function TelaPrincipal({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Setores Vitalab</Text>

            <TouchableOpacity 
                style={styles.button} 
                onPress={() => navigation.navigate('Recepcao')}>
                <Text style={styles.buttonText}>Recepção</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.button} 
                onPress={() => navigation.navigate('Vacina')}>
                <Text style={styles.buttonText}>Vacina</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.button} 
                onPress={() => navigation.navigate('Serviços Gerais')}>
                <Text style={styles.buttonText}>Serviços gerais</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.button} 
                onPress={() => navigation.navigate('Exames')}>
                <Text style={styles.buttonText}>Exames</Text>
            </TouchableOpacity>

        </View>
    );
}
