import React, { useState, useEffect } from "react";
import { Heading, Box, Text, Pressable, VStack, ScrollView, Button, HStack, Image } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { clearStorage, getData } from "../../utils";
import FIREBASE from "../../config/FIREBASE";

const Profile = () => {
  const navigation = useNavigation();
  const [profile, setProfile] = useState(null);
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


  const EditProfile = () => {
    navigation.navigate("EditProfile");
  };

  return (
    <>
      <ScrollView>
        <Box flex={1} bgColor='#fffff' alignItems='center'>
          <Box flex={1} alignItems="center">
            <Heading marginTop={30}>Profile saya</Heading>
            <Image role="img" alt="20" width={200} height={200} rounded={50} marginTop={10}
              source={require('../../assets/promax.png')} />
          </Box>
          <Box flex={2} marginTop={140} width={"100%"} borderTopLeftRadius={50} borderTopRightRadius={50} bg="$#800000" >
            <Box borderRadius={10} width={"15%"} height={4} bg="white" alignSelf="center" marginTop={20}></Box>
            <HStack justifyContent="space-between" mx={20}>
              <Box></Box>
              <Pressable onPress={EditProfile}>
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
              <Button onPress={() => onSubmit(profile)} bg="white" mb={10} alignSelf="center" w={"87%"}>
                <Text>Keluar</Text>
              </Button>

            </Box>
          </Box>
        </Box>
      </ScrollView>
    </>
  )
}

export default Profile;