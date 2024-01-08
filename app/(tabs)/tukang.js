import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { ScrollView } from "@gluestack-ui/themed";

const Tukang = () => {
  const [dataDiri, setDataDiri] = useState([
    { 
      id: '1', 
      nama: 'Firli Sandist', 
      foto: require('../../assets/man.png'), 
      deskripsi: 'Seorang tukang bangunan berpengalaman dengan keterampilan luar biasa dalam konstruksi. Mampu membaca dan menginterpretasikan rencana konstruksi dengan presisi tinggi. Ahli dalam pemasangan struktur bangunan, pekerjaan beton, dan finishing interior eksterior.',
    },
    { 
      id: '2', 
      nama: 'Qorygore', 
      foto: require('../../assets/man.png'), 
      deskripsi: 'Seorang tukang kayu berkemampuan tinggi dengan keahlian presisi dalam pekerjaan kayu. Kreatif dalam merancang dan menghasilkan furnitur dan detail kayu yang menawan. Memiliki kepekaan estetika yang tinggi untuk memberikan sentuhan artistik pada setiap proyeknya..',
    },
    { 
      id: '3', 
      nama: 'Dennis Tyson', 
      foto: require('../../assets/man.png'), 
      deskripsi: 'Spesialis dalam instalasi listrik dan pemecahan masalah. Mampu merancang dan mengimplementasikan sistem listrik yang efisien dan aman. Memiliki pemahaman mendalam tentang teknologi terkini dalam bidangnya dan selalu mengutamakan keamanan dan kinerja listrik yang optimal.',
    },
    { 
      id: '4', 
      nama: 'RbenTen Auzan', 
      foto: require('../../assets/man.png'), 
      deskripsi: 'Seorang tukang cat yang mahir dengan kemampuan melukis yang presisi. Memiliki pengetahuan yang luas tentang berbagai jenis cat dan teknik aplikasi. Mengutamakan detail untuk memberikan hasil akhir yang tahan lama dan estetis.',
    },
    { 
      id: '5', 
      nama: 'Ni Putu Adriana', 
      foto: require('../../assets/woman.png'), 
      deskripsi: 'Seorang tukang ahli dalam pemasangan keramik dan ubin dengan presisi tinggi. Mampu menciptakan pola dan desain yang indah. Berpengalaman dalam pemasangan lantai, dinding, dan area-area keramik lainnya.',
    },
    { 
      id: '6', 
      nama: 'Zufar Zharif', 
      foto: require('../../assets/man.png'), 
      deskripsi: 'Tukang taman yang berbakat dengan keahlian dalam merancang dan merawat taman. Memiliki pengetahuan yang luas tentang tanaman, material taman, dan sistem irigasi. Kreatif dalam menciptakan ruang luar yang indah dan fungsional.',
    },
    { 
      id: '7', 
      nama: 'Allan Pertama', 
      foto: require('../../assets/man.png'), 
      deskripsi: 'Tukang taman yang berbakat dengan keahlian dalam merancang dan merawat taman. Memiliki pengetahuan yang luas tentang tanaman, material taman, dan sistem irigasi. Kreatif dalam menciptakan ruang luar yang indah dan fungsional.',
    },
    { 
      id: '8', 
      nama: 'King naufal', 
      foto: require('../../assets/man.png'), 
      deskripsi: 'Ahli dalam instalasi dan perbaikan sistem pendingin udara. Memahami prinsip-prinsip pendinginan dan memastikan sistem AC beroperasi dengan efisiensi tinggi. Siap memberikan solusi cepat untuk masalah terkait pendingin udara.',
    },
    { 
      id: '9', 
      nama: 'Jessyca Cahaya', 
      foto: require('../../assets/woman.png'), 
      deskripsi: 'Ahli dalam pekerjaan atap dengan pengetahuan mendalam tentang berbagai jenis bahan atap. Mampu melakukan pemasangan atap, perbaikan, dan pemeliharaan dengan tingkat keahlian tinggi. Menyediakan solusi untuk masalah kebocoran, sirkulasi udara, dan perlindungan atap yang optimal. Memahami standar keamanan dan kualitas dalam pekerjaan atap.',
    },
  ]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Data Diri Tukang</Text>
      <FlatList
        data={dataDiri}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={item.foto} style={styles.foto} />
            <View style={styles.textContainer}>
              <Text style={styles.nama}>{item.nama}</Text>
              <Text style={styles.deskripsi}>{item.deskripsi}</Text>
            </View>
          </View>
        )}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  foto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  nama: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  deskripsi: {
    fontSize: 14,
    color: '#555',
  },
});

export default Tukang;
