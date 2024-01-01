// DisplayData.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { getNote } from '../actions/AuthAction';

const Pesananitem = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await getNote();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <View>
      <Text>Data yang sudah diinputkan:</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.noteId}
        renderItem={({ item }) => (
          <View>
            <Text>Alamat: {item.alamat}</Text>
            <Text>Nomor Telpon: {item.nomorTelpon}</Text>
            <Text>Layanan: {item.layanan}</Text>
            <Text>Detail Pesanan: {item.detailPesanan}</Text>
            <Text>--------------------</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Pesananitem;
