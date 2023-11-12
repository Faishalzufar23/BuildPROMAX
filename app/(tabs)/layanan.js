import { Center, HStack, Box, Heading, FlatList, VStack} from "@gluestack-ui/themed";
import { Header } from "../../components";
import { TouchableOpacity, View} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import {Link} from "expo-router"

const Layanan = () => {
  return (
    <>
      <Header title={"Layanan"} />
      <Center flex={1}>
      
      <TouchableOpacity >
        <Link href="/pk">
          <View style={{ alignItems: 'center' }}>
            <Ionicons name="build-outline" size={40} color="black" />
            <Heading mb="$10">Panggilan Tukang</Heading>
          </View>
        </Link>
      </TouchableOpacity>

      <TouchableOpacity >
        <Link href="/tb">
          <View style={{ alignItems: 'center' }}>
            <Ionicons name="people-circle-outline" size={40} color="black" />
            <Heading mb="$10">Tukang Borongan</Heading>
          </View>
        </Link>
      </TouchableOpacity>

      <TouchableOpacity >
        <Link href="/pkul">
          <View style={{ alignItems: 'center' }}>
            <Ionicons name="hammer-outline" size={40} color="black" />
            <Heading mb="$10">Panggilan Kuli</Heading>
          </View>
        </Link>
      </TouchableOpacity>

      <TouchableOpacity >
        <Link href="/pm">
          <View style={{ alignItems: 'center' }}>
            <Ionicons name="body-outline" size={40} color="black" />
            <Heading mb="$10">Panggilan Mandor</Heading>
          </View>
        </Link>
      </TouchableOpacity>
      
    

      </Center>
    </>
  );
};

export default Layanan;