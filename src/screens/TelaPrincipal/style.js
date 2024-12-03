import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20, // Ajusta para telas menores
    },

    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 60,
        textAlign: 'center',
    },

    button: {
        backgroundColor: '#005566',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginVertical: 10,
        width: '80%',
        alignItems: 'center',
    },

    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default styles;
