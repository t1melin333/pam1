import { StyleSheet, Dimensions  } from 'react-native';

const IMAGE_SIZE = Dimensions.get('window').width / 4;

const styles = StyleSheet.create({
  container: {
    padding: 2,
    backgroundColor: '#ffffff',
  },
  image: {
    width: IMAGE_SIZE - 4,
    height: IMAGE_SIZE - 4,
    margin: 2,
    borderRadius: 4,
  },
});

const catalogo = StyleSheet.create({ 
  container: {
    marginTop: 20,
    marginBottom: 20,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    letterSpacing: 1,
    textTransform: 'uppercase',
  }
});


export default styles;