import React from "react";
import { Center, Box, Heading } from "@gluestack-ui/themed";
import { Header } from "../../components";
import { TouchableOpacity, View, Image, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";

const backgroundImage = require("../../assets/promax.png");

const Layanan = () => {
  return (
    <>
      <Header title={"Layanan"} />
      <Box flex={1} backgroundColor="$white">
        <Image
          source={backgroundImage}
          style={styles.backgroundImage}
        />
        <Center flex={1}>

          <TouchableOpacity>
            <Link href="/pk">
              <View style={styles.serviceItem}>
                <Ionicons name="build-outline" size={40} color="$black" />
                <Heading mb="$10" color="$black">Panggilan Tukang</Heading>
              </View>
            </Link>
          </TouchableOpacity>

          <TouchableOpacity>
            <Link href="/tb">
              <View style={styles.serviceItem}>
                <Ionicons name="people-circle-outline" size={40} color="$black" />
                <Heading mb="$10" color="$black">Tukang Borongan</Heading>
              </View>
            </Link>
          </TouchableOpacity>

          <TouchableOpacity>
            <Link href="/pkul">
              <View style={styles.serviceItem}>
                <Ionicons name="hammer-outline" size={40} color="$black" />
                <Heading mb="$10" color="$black">Panggilan Kuli</Heading>
              </View>
            </Link>
          </TouchableOpacity>

          <TouchableOpacity>
            <Link href="/pm">
              <View style={styles.serviceItem}>
                <Ionicons name="body-outline" size={40} color="$black" />
                <Heading mb="$10" color="$black">Panggilan Mandor</Heading>
              </View>
            </Link>
          </TouchableOpacity>
        </Center>
      </Box>
    </>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: 0.4,
  },
  serviceItem: {
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.1)", // Opacity set to 0.8 (80%)
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
});

export default Layanan;
