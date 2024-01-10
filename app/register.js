import React, { useState, useEffect } from "react";
import {
  Heading, FormControl, VStack, Text, Input, InputField, InputSlot, InputIcon,
  Button, Box, Alert, Modal, ModalBackdrop, AlertText, EyeOffIcon,EyeIcon
} from "@gluestack-ui/themed";
import { registerUser } from "../actions/AuthAction"
import { useNavigation } from '@react-navigation/native';

const Register = () => {
  const navigation = useNavigation();
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleState = () => {
    setShowPassword(!showPassword);
  }

  const toggleAlert = (message) => {
    setAlertMessage(message);
    setIsAlertVisible(true);
  };

  const closeAlert = () => {
    setIsAlertVisible(false);
  };

  const onRegister = async () => {
    if (email && nama && password) {
      const data = {
        email: email,
        nama: nama,
        password: password,
        status: "user",
      };

      try {
        const user = await registerUser(data, password);
        navigation.replace("login");
      } catch (error) {
        console.log("Error", error.message);
        toggleAlert(error.message);
      }
    } else {
      console.log("Error", "Data tidak lengkap");
      toggleAlert("Data tidak lengkap. Mohon isi semua kolom.");
    }
  };

  return (
    <>
      <Box
        flex={1}
        alignContent="$center"
        justifyContent="$center"
      >
        <FormControl
          p="$4"
          borderWidth="$1"
          borderRadius="$lg"
          borderColor="$borderLight300"
        >
          <VStack space="xl">
            <Heading color="$text900" lineHeight="$md" mb="$12">
              Register
            </Heading>
            <VStack space="xs">
              <Text color="$text500" lineHeight="$xs">
                Nama:
              </Text>
              <Input>
                <InputField type="text" placeholder="Ketikan nama" value={nama}
                  onChangeText={(nama) => setNama(nama)} />
              </Input>
            </VStack>
            <VStack space="xl">
              <Text color="$text500" lineHeight="$xs">
                Email:
              </Text>
              <Input>
                <InputField type="text" placeholder="Ketikan email" value={email}
                  onChangeText={(email) => setEmail(email)} />
              </Input>
              <Text color="$text500" lineHeight="$xs">
                Password:
              </Text>
              <Input textAlign="center" mb="$12">
                <InputField type={showPassword ? "text" : "password"} placeholder="Ketikan password" value={password}
                  onChangeText={(password) => setPassword(password)} />
                <InputSlot pr="$3" onPress={handleState}>
                  <InputIcon
                    as={showPassword ? EyeIcon : EyeOffIcon}
                    color="$darkBlue500"
                  />
                </InputSlot>
              </Input>
            </VStack>
          </VStack>
          <Button onPress={() => onRegister()}><Text color="white">Register</Text></Button>
        </FormControl>
        {isAlertVisible && (
          <Modal isOpen={isAlertVisible} onClose={closeAlert}>
            <ModalBackdrop />
            <Alert>
              <AlertText>{alertMessage}</AlertText>
            </Alert>
          </Modal>
        )}
      </Box>
    </>
  );
};

export default Register;
