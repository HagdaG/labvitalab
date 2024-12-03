import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    padding: 20,
  },
  header: {
    backgroundColor: '#006400',  // Faixa verde
    width: '100%',
    padding: 15,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  buttonsContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#006400',
    padding: 15,
    margin: 10,
    width: '80%',
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  footer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 20,
    left: 0,
  },
  backButton: {
    backgroundColor: '#006400',
    padding: 10,
    borderRadius: 10,
    position: 'absolute',
    bottom: 80,  // Para ficar acima do rodapé
    right: 20,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default styles;