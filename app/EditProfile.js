import React, { useState, useEffect } from 'react';
import { Box, Heading, VStack, Input, Button, useToast } from '@gluestack-ui/themed';
import { getData, storeData } from '../utils';
import FIREBASE from '../config/FIREBASE';

const EditProfile = ({ navigation }) => {
  const [newNama, setNewNama] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const toast = useToast();

  useEffect(() => {
    const fetchData = async () => {
      const userData = await getData('user');
      if (userData) {
        setNewNama(userData.nama);
        setNewEmail(userData.email);
      }
    };

    fetchData();
  }, []);

  const onSaveChanges = async () => {
    try {
      const userData = await getData('user');

      if (userData) {
        // Lakukan perubahan nama dan email pada Firebase dan lokal
        await FIREBASE.auth().currentUser.updateProfile({
          displayName: newNama,
        });

        await FIREBASE.auth().currentUser.updateEmail(newEmail);

        const updatedUserData = {
          ...userData,
          nama: newNama,
          email: newEmail,
        };

        await storeData('user', updatedUserData);
        toast.show({
          title: 'Changes saved successfully',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });

        navigation.goBack(); // Kembali ke halaman profil setelah menyimpan perubahan
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      toast.show({
        title: 'Failed to save changes',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box flex={1} bgColor="#fffff" alignItems="center">
      <Box flex={2} marginTop={50} width="100%" borderTopLeftRadius={50} borderTopRightRadius={40} bg="#b08b25">
        <Heading color="white" fontWeight="bold" textAlign="center" marginTop={20}>
          Edit Profil
        </Heading>
        <VStack marginTop={30} space={4} width="80%" alignSelf="center">
          <Input
            placeholder="Nama Lengkap"
            value={newNama}
            onChangeText={(text) => setNewNama(text)}
          />
          <Input
            placeholder="Email"
            value={newEmail}
            onChangeText={(text) => setNewEmail(text)}
          />
          <Button onPress={onSaveChanges} bg="white">
            Simpan Perubahan
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default EditProfile;
