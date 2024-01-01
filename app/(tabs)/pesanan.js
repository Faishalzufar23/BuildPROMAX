import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { ScrollView} from "@gluestack-ui/themed";
import { getNote, deleteNote } from '../../actions/AuthAction';

const Pesanan = () => {
  const [pesanan, setPesanan] = useState([]);

  useEffect(() => {
    // Mengambil data pesanan saat komponen dipasang
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const pesanan = await getNote();
      setPesanan(pesanan);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDelete = async (noteId) => {
    try {
      await deleteNote(noteId);
      // Mengambil data pesanan setelah penghapusan
      fetchData();
    } catch (error) {
      console.error('Error deleting data:', error);
      // Tambahkan penanganan kesalahan sesuai kebutuhan Anda, misalnya menampilkan pesan kesalahan kepada pengguna.
    }
  };
  

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}>Daftar Pesanan</Text>
      {pesanan.length === 0 ? (
        <Text>Tidak ada pesanan.</Text>
      ) : (
        <FlatList
          data={pesanan}
          keyExtractor={(item) => item.noteId}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.label}>Alamat:</Text>
              <Text>{item.alamat}</Text>

              <Text style={styles.label}>Nomor Telpon:</Text>
              <Text>{item.nomorTelpon}</Text>

              <Text style={styles.label}>Layanan:</Text>
              <Text>{item.layanan}</Text>

              <Text style={styles.label}>Detail Pesanan:</Text>
              <Text>{item.detailPesanan}</Text>

              <Button
                title="Hapus Pesanan"
                onPress={() => handleDelete(item.noteId)}
              />
            </View>
          )}
        />
      )}
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
  label: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default Pesanan;
