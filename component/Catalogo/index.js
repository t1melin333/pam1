import React from 'react';
import { Image, FlatList, Dimensions } from 'react-native';
import styles from './style';

const catalogo = (props) => {
  return (
    <View style={catalogo.container}>
  <Text style={catalogo.titulo}>Catálogo</Text>
</View>

  );
}
const imageUrls = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYeg5FMpAvfxXic2yxFkv3mCcyHbnsjDJPgw&s',
  'http://i.pinimg.com/474x/75/d0/1f/75d01fb98361e94418deca831b84a8ae.jpg',
  'http://ffw.uol.com.br/wp-content/uploads/2024/06/00037-chanel-fall-2024-couture-credit-gorunway-960x1440.webp',
  'https://cdn0.casamentos.com.br/cat/vestidos-festa/chanel/ch-29--mt20_2x_470076.jpg',
  'https://cdn0.casamentos.com.br/cat/vestidos-festa/chanel/ch-44--mt20_2x_470056.jpg',
  'https://i.pinimg.com/474x/86/b5/5e/86b55ef9905b47a8bcc98244ddb52032.jpg',
  'https://www.chanel.com/images/q_auto:good,f_auto,fl_lossy,dpr_1.1/w_428/-9563347222558.jpg',
  'https://forbes.com.br/wp-content/uploads/2021/02/GettyImages-56424811-1.jpg',
  'https://images.elle.com.br/2024/10/chanel-verao-2025-%E2%80%93GettyImages-2175856109-768x1153.jpg',
  'https://images.elle.com.br/2023/07/GettyImages-1514059518-560x840.jpg',
];

const Catalogo=()=>{
  return (
    <FlatList
      data={imageUrls}
      keyExtractor={(item, index) => index.toString()}
      numColumns={4}
      renderItem={({ item }) => (
        <Image source={{ uri: item }} style={styles.image} />
      )}
      contentContainerStyle={styles.container}
    />
  );
}

export default Catalogo;