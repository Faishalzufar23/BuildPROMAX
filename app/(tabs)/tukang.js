import { Center, 
  Heading, 
  Image,
  Box,
  VStack,
  HStack,
  } from "@gluestack-ui/themed";
import { Header} from "../../components";
import { ScrollView } from "react-native-gesture-handler";

const Tukang = () => {
  return (
    <>
      <Header title={"Tukang"} />
      <Center flex={1}>
      <ScrollView>
        <Box>
          <HStack>
            <Image
            alignItems="center"
            size="xl"
            borderRadius="$none"
            source={require("../../assets/promax.png")}
            alt="p"
            role="img">
            </Image>
            <Heading>Firli Juan Sandi</Heading>

          </HStack>
        </Box>
        <Box>
          <HStack>
            <Image
            alignItems="center"
            size="xl"
            borderRadius="$none"
            source={require("../../assets/promax.png")}
            alt="p"
            role="img">
            </Image>
            <Heading>Firli Juan Sandi</Heading>

          </HStack>
        </Box>
        <Box>
          <HStack>
            <Image
            alignItems="center"
            size="xl"
            borderRadius="$none"
            source={require("../../assets/promax.png")}
            alt="p"
            role="img">
            </Image>
            <Heading>Firli Juan Sandi</Heading>

          </HStack>
        </Box>
        <Box>
          <HStack>
            <Image
            alignItems="center"
            size="xl"
            borderRadius="$none"
            source={require("../../assets/promax.png")}
            alt="p"
            role="img">
            </Image>
            <Heading>Firli Juan Sandi</Heading>

          </HStack>
        </Box>
        <Box>
          <HStack>
            <Image
            alignItems="center"
            size="xl"
            borderRadius="$none"
            source={require("../../assets/promax.png")}
            alt="p"
            role="img">
            </Image>
            <Heading>Firli Juan Sandi</Heading>

          </HStack>
        </Box>
        
        </ScrollView>
      </Center>
    </>
  );
};

export default Tukang;