import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './style';


 const Perfil = (props)=>{
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.3317998:1672343315/pele%20gol.jpeg' }}
          style={styles.coverPhoto}
        />
        <Image
          source={{ uri: 'https://static.ndmais.com.br/2020/10/Pel%C3%A9-3.jpg' }}
          style={styles.profilePic}
        />
        <Text style={styles.name}>Pelé <Ionicons name="checkmark-circle" size={16} color="#3b82f6" /></Text>
        <Text style={styles.followers}>seguidores 9,8 mi • seguindo 40</Text>
        <View style={styles.buttonsRow}>
          <TouchableOpacity style={styles.followButton}>
            <Text style={styles.buttonText}>Seguir</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.followButton} onPress = { () => props.navigation.navigate("Galeria") }>
            <Text style={styles.buttonText}>Galeria</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.searchButton}>
            <Text style={styles.buttonText}>Pesquisar</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Apresentação</Text>
        <Text style={styles.bio}>
          Welcome to the Official Facebook page of Pelé.{"\n"}
          Follow me: http://www.twitter.com/Pele
        </Text>
        <Text style={styles.info}>Página • Atleta</Text>
        <Text style={styles.link}>pele10.org</Text>
      </View>
    </ScrollView>
  );
}

export default Perfil;