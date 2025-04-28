import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Pesquisar = (props) => {
    const [searchText, setSearchText] = React.useState('');

    const handleSearch = (text) => {
        setSearchText(text);
    };

    return (
        <View style={styles.container}>
            <View style={styles.searchBar}>
                <Ionicons name="search" size={20} color="gray" style={styles.searchIcon} />
                <TextInput
                    style={styles.input}
                    placeholder="Pelo o que você está procurando?"
                    placeholderTextColor="#575757"
                    value={searchText}
                    onChangeText={handleSearch}
                />
            </View>
           <View style={styles.textContainer}>
                 <Text style={styles.infoText}>
                    Ops! Parce que voce ainda nao buscou por nada...
                 </Text>
           </View>
        </View>
    );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#f9f9f9',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  searchIcon: {
    marginRight: 8,
  },
  textContainer: {
    marginTop: 20,
    alignItems: 'center',
},
infoText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
},
});

export default Pesquisar;
