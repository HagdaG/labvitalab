import { firebase } from '../../services/firebaseConfig'
import { getDatabase, push, ref as dbRef, set } from "firebase/database";

import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import { getAuth } from "firebase/auth";
import React, { useState } from 'react'
import styles from './style'
const db = getDatabase();
const auth = getAuth();

export default function CadastrarVeiculo({ navigation }) {
    const [empresa, setEmpresa] = useState("")
    const [funcao, setFuncao] = useState("")
    const [salario, setSalario] = useState("")
    const [tipo, setTipo] = useState("")
    const [desc, setDesc] = useState("")
    const [errorCadastrarVaga, setErrorCadastrarVaga] = useState(null)


    return (
        <View style={styles.container}>
            {errorCadastrarVaga != null && (
                <Text style={styles.alert}>{errorCadastrarVaga}</Text>
            )}
            
            <Image source={{uri: 'https://firebasestorage.googleapis.com/v0/b/labvitalab-e2ca9.firebasestorage.app/o/logo-sem-fundo.png?alt=media&token=aad72367-71a5-4669-aa0c-c06529b05fe5'}} style={styles.logo} />

            <TextInput
                style={styles.input}
                placeholder='Empresa'
                value={empresa}
                onChangeText={setEmpresa}
            />

            <TextInput
                style={styles.input}
                placeholder='Função'
                value={funcao}
                onChangeText={setFuncao}
            />

            <TextInput
                style={styles.input}
                placeholder='Salário'
                value={salario}
                onChangeText={setSalario}
            />

            <TextInput
                style={styles.input}
                placeholder='CLT ou PJ'
                value={tipo}
                onChangeText={setTipo}
            />

            <TextInput
                style={[styles.input, {height: 100, textAlignVertical: 'top'}]}
                placeholder='Descrição da Vaga'
                value={desc}
                onChangeText={setDesc}
            />

            <TouchableOpacity style={styles.button} onPress={validar}>
                <Text style={styles.textButton}>Cradastrar Vaga</Text>
            </TouchableOpacity>
        </View>
    )
}