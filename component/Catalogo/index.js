

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
  'https://cdn.folhape.com.br/upload/dn_arquivo/2023/07/whatsapp-image-2023-07-04-at-105519.jpeg',
  'https://cdn.folhape.com.br/upload/dn_arquivo/2022/12/image2.jpeg',
  'https://i0.wp.com/teoriaedebate.org.br/wp-content/uploads/sites/2/2024/02/Pele.jpeg?fit=1000%2C1000&ssl=1',
  'https://imagens.ebc.com.br/cjgdtmXf7KAwCB1ZfHoVbEriBL0=/1170x700/smart/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/34812254320_598bab7ff3_o.jpg?itok=94xYcxYL',
  'https://cdn.folhape.com.br/upload/dn_arquivo/2023/07/whatsapp-image-2023-07-04-at-105519.jpeg',
  'https://cdn.folhape.com.br/upload/dn_arquivo/2022/12/image2.jpeg',
  'https://i.em.com.br/89XH5jeDcghz3ujEFZSeoszYsOM=/790x/smart/imgsapp.em.com.br/app/noticia_127983242361/2020/10/23/1197335/20201023033547802230i.jpg',
  'https://s2-oglobo.glbimg.com/7xb0AmkmD1fU5nA62fZUy-dxElI=/0x0:4992x3202/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2022/U/i/wWsUdZSoG6ydOKSUsDzg/pele-eliminatorias70.jpg',
  'https://forbes.com.br/wp-content/uploads/2021/02/GettyImages-56424811-1.jpg',
  'https://i0.wp.com/teoriaedebate.org.br/wp-content/uploads/sites/2/2024/02/Pele.jpeg?fit=1000%2C1000&ssl=1',
  'https://imagens.ebc.com.br/cjgdtmXf7KAwCB1ZfHoVbEriBL0=/1170x700/smart/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/34812254320_598bab7ff3_o.jpg?itok=94xYcxYL',
  'https://cdn.folhape.com.br/upload/dn_arquivo/2023/07/whatsapp-image-2023-07-04-at-105519.jpeg'
  // Adicione mais URLs de imagens públicas do Pelé aqui
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