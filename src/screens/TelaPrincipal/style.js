import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        backgroundColor: '#fff'
    },

    box : {
    width: '100%',
    },

    box2 : {
        width: '100%',
        padding: 10,
    },

    status: {
        color: 'green',
        textAlign: 'right'
    },

    barraStatus: {
        width: '100%',
        backgroundColor: 'green',
        height: 10,
        borderBottomEndRadius:10,
        borderBottomStartRadius: 10
    },
    
    barraStatusDisp: {
        backgroundColor: 'red',
    },
    
    textButtonCreate: {
        fontSize: 18,
        textAlign: 'center',
        color: '#fff'
    }
});

export default styles