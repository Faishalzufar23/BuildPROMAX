import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet, RefreshControl, TouchableOpacity} from 'react-native';
import { getNote, deleteNote } from '../../actions/AuthAction';
import { AntDesign } from '@expo/vector-icons'; 

const Pesanan = () => {
  const [pesanan, setPesanan] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setRefreshing(true);
    try {
      const pesananData = await getNote();
      setPesanan(pesananData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setRefreshing(false);
  };

  const handleDelete = async (noteId) => {
    try {
      await deleteNote(noteId);
      fetchData();
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daftar Pesanan</Text>
      {pesanan.length === 0 ? (
        <Text>Tidak ada pesanan.</Text>
      ) : (
        <FlatList
          data={pesanan}
          keyExtractor={(item) => item.noteId.toString()}
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
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={fetchData}
              tintColor="#689F38"
              title="Memuat ulang..."
              titleColor="#689F38"
              colors={['#9Bd35A', '#689F38']}
              progressBackgroundColor="#b6b7b2"
            />
          }
        />
      )}
      <TouchableOpacity style={styles.refreshIcon} onPress={fetchData}>
        <AntDesign name="reload1" size={34} color="#080808"  />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center', // Pusatkan vertikal
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
  refreshIcon: {
    position: 'absolute',
    bottom: 16,
    alignSelf: 'center', // Pusatkan horizontal
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 50,
    padding: 8,
  },
});

export default Pesanan;
