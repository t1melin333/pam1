import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './style';


 const Perfil = (props)=>{
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://www.julianabacellar.com.br/wp-content/uploads/2019/04/histoI_ria-da-chanel-8.jpg' }}
          style={styles.coverPhoto}
        />
        <Image
          source={{ uri: 'https://planejadorweb.com.br/wp-content/uploads/2021/07/Logotipo-Channel.jpg' }}
          style={styles.profilePic}
        />
        <Text style={styles.name}>Chanel <Ionicons name="checkmark-circle" size={16} color="#3b82f6" /></Text>
        <Text style={styles.followers}>seguidores 10mi • seguindo 90</Text>
        <View style={styles.buttonsRow}>
          <TouchableOpacity style={styles.followButton}>
            <Text style={styles.buttonText}>Seguindo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.followButton} onPress = { () => props.navigation.navigate("Catalogo") }>
            <Text style={styles.buttonText}>Catálogo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.searchButton} onPress={ () => props.navigation.navigate("Pesquisar")}>
            <Text style={styles.buttonText}>Pesquisar</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Sobre nós</Text>
        <Text style={styles.bio}>
        ✨ Elegância além do tempo{"\n"}
        🖤 Inspirados no espírito livre de Chanel{"\n"}
        👗 Moda clássica com alma moderna{"\n"}
        🌟 Autenticidade em cada detalhe{"\n"}
        🔗 Luxo é ser você mesmo{"\n"}
        Como podemos te ajudar hoje?
        </Text>
        <Text style={styles.info}>Catálogo</Text>
        <Text style={styles.link}>https://www.instagram.com/chanelofficial/</Text>
      </View>
    </ScrollView>
  );
}

export default Perfil;