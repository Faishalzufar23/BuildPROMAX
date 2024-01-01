import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { ScrollView } from "@gluestack-ui/themed";

const Tukang = () => {
  const [dataDiri, setDataDiri] = useState([
    { id: '1', nama: 'Firli gemink', foto: require('../../assets/avatar.png'), detail: 'Tua dan Tampan' },
    { id: '2', nama: 'Qorygore', foto: require('../../assets/avatar.png'), detail: 'No komen' },
    { id: '3', nama: 'Dennis Anjay', foto: require('../../assets/avatar.png'), detail: 'Rajin tapi rajin ngelapak' },
    { id: '4', nama: 'Rben Auzan', foto: require('../../assets/avatar.png'), detail: 'Semoga sehat selalu auzan' },
    // Tambahkan data diri lainnya sesuai kebutuhan
  ]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Data Diri</Text>
        <FlatList
          data={dataDiri}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Image source={item.foto} style={styles.foto} />
              <Text style={styles.nama}>{item.nama}</Text>
              <Text style={styles.detail}>{item.detail}</Text>
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  itemContainer: {
    marginBottom: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },
  foto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 8,
  },
  nama: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  detail: {
    fontSize: 14,
  },
});

export default Tukang;
