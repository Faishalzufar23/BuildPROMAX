import React, { useState, useEffect } from "react";
import { Heading, Box, Text, Pressable, VStack, ScrollView, Button, HStack, Image, Modal, Input} from "@gluestack-ui/themed";
import { useNavigation, useToast} from "@react-navigation/native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { clearStorage, getData } from "../../utils";
import FIREBASE from "../../config/FIREBASE";
import { editProfile } from "../../actions/AuthAction";
import { storeData } from "../../utils/localStorage";





const Profile = () => {
  const navigation = useNavigation();
  const [profile, setProfile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");



  const getUserData = () => {
    getData("user").then((res) => {
      const data = res;
      if (data) {
        console.log("isi data", data);
        setProfile(data);
      } else {
        // navigation.replace('Login');
      }
    });
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getUserData();
    });

    return () => {
      unsubscribe();
    };
  }, [navigation]);

  const onSubmit = (profile) => {
    if (profile) {
      FIREBASE.auth()
        .signOut()
        .then(() => {
          // Sign-out successful.
          clearStorage();
          navigation.replace("login");
        })
        .catch((error) => {
          // An error happened.
          alert(error);
        });
    } else {
      navigation.replace("Login");
    }
  };



  const handleSaveChanges = async () => {
    try {
      const userData = await getData('user');
  
      if (userData) {
        // Panggil fungsi editProfile untuk menyimpan perubahan
        const updatedUserData = await editProfile(userData.uid, {
          nama: newName,
          email: newEmail,
        });
  
        if (updatedUserData) {
          // Perbarui data pengguna di lokal
          await storeData('user', updatedUserData);
          toast.show({
            title: 'Perubahan berhasil disimpan',
            status: 'success',
            duration: 3000,
            isClosable: true,
          });
  
          setIsEditing(false); // Tutup modal setelah menyimpan perubahan
        } else {
          console.log("Failed to update profile");
        }
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      toast.show({
        title: <Text>Perubahan berhasil disimpan</Text>,
        status: 'success',
        duration: 3000,
        isClosable: true,
      });      
    }
  };
  



  return (
    <>
      <ScrollView>
        <Box flex={1} bgColor='#fffff' alignItems='center'>
          <Box flex={1} alignItems="center">
            <Heading marginTop={60}>Profile Saya</Heading>
            <Image role="img" alt="20" width={300} height={300} rounded={50} marginTop={30}
              source={require('../../assets/promax.png')} />
          </Box>
          <Box flex={2} marginTop={50} width={"100%"} borderTopLeftRadius={50} borderTopRightRadius={40} bg="$#b08b25" >
            <Box borderRadius={10} width={"15%"} height={4} bg="white" alignSelf="center" marginTop={20}></Box>
            <HStack justifyContent="space-between" mx={20}>
              <Box></Box>
              <Pressable onPress={() => setIsEditing(true)}>
                <Icon name="account-edit" size={50} color="#ffffff" />
              </Pressable>
            </HStack>
            <Box marginTop={-20} >
              <VStack marginStart={20} >
                <Heading color="white" fontWeight="bold">Nama Lengkap :</Heading>
                <Text color="white" fontSize={15}>{profile?.nama}</Text>
              </VStack>
              <VStack marginStart={20} marginTop={25}>
                <Heading color="white" fontWeight="bold">Email saya :</Heading>
                <Text color="white" fontSize={15}>{profile?.email}</Text>
              </VStack>
              <Button onPress={() => onSubmit(profile)} bg="white" mb={10} alignSelf="center" w={"87%"} marginTop={40}>
                <Text>Keluar</Text>
              </Button>

            </Box>
          </Box>
        </Box>
      </ScrollView>

      <Modal isOpen={isEditing} onClose={() => setIsEditing(false)}>
    <VStack p={4}>
        <Heading>Edit Profil</Heading>
        <Input
            placeholder="Nama Lengkap"
            value={newName}
            onChangeText={(text) => setNewName(text)}
        />
        <Input
            placeholder="Email"
            value={newEmail}
            onChangeText={(text) => setNewEmail(text)}
        />
        <Button onPress={handleSaveChanges} bg="white" mt={4}>
            Simpan Perubahan
        </Button>
    </VStack>
</Modal>

    </>
  )
}

export default Profile;