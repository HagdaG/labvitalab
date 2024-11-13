import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import styles from './style'
import React, { useEffect, useState } from 'react'
import { firebase } from '../../services/firebaseConfig'
import { getDatabase, onValue, query, ref, orderByChild } from "firebase/database";
import { getAuth } from "firebase/auth";
const db = getDatabase();
const auth = getAuth();

export default function TelaPrincipal({ navigation }) {
    const [principal, setPrincipal] = useState([]);

    useEffect(() => {
        const listaVendas = query(ref(db, 'principal/' + auth.currentUser.uid), orderByChild('status'));
        onValue(listaVendas, (snapshot) => {
            const lista = []
            snapshot.forEach((data) => {
                lista.push({ ...data.val(), id: data.key });
            });
            setPrincipal(lista)
        });
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={principal}
                renderItem={({ item }) =>
                    <TouchableOpacity style={styles.principal} onPress={() => navigation.navigate('', { id: item.id })} >
                        <View style={styles.box}>
                        </View>
                    </TouchableOpacity>
                }
            />

        </View>
    )
}