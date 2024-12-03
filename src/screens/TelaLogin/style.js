import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        padding: 30,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    logo: {
        width: 400,
        height: 350,
        resizeMode: 'contain',
    },
    alert: {
        fontSize: 18,
        color: '#FFF',
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        fontSize: 18,
        borderRadius: 10,
        backgroundColor: '#c0c0c0',
        padding: 20,
        marginBottom: 20,
        width: '100%'
    },
    button: {
        backgroundColor: '#006400',
        padding: 10,
        borderRadius: 10,
        marginBottom: 20,
        width: '100%'
    },
    textButton: {
        fontSize: 24,
        textAlign: 'center',
        color: '#fff'
    },
    buttonCreate: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 10,
        marginBottom: 20,
        width: '100%'
    },
    buttonCreateText: {
        fontSize: 18,
        textAlign: 'center',
        color: '#000'
    }
})

export default styles