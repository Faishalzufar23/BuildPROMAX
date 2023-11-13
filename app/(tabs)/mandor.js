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
              source={require("../../assets/mandor1.jpeg")}
              alt="p"
              mt={10}
              role="img">
              </Image>
              <Heading ml={10} mt={20}>Firli Juan Sandi</Heading>
  
            </HStack>
          </Box>
          <Box>
            <HStack>
              <Image
              alignItems="center"
              size="xl"
              borderRadius="$none"
              source={require("../../assets/mandor2.jpeg")}
              alt="p"
              mt={10}
              role="img">
              </Image>
              <Heading ml={10} mt={20}>Firli Juan Sandi</Heading>
  
            </HStack>
          </Box>
          <Box>
            <HStack>
              <Image
              alignItems="center"
              size="xl"
              borderRadius="$none"
              source={require("../../assets/mandor3.jpeg")}
              alt="p"
              mt={10}
              role="img">
              </Image>
              <Heading ml={10} mt={20}>Firli Juan Sandi</Heading>
  
            </HStack>
          </Box>
          <Box>
            <HStack>
              <Image
              alignItems="center"
              size="xl"
              borderRadius="$none"
              source={require("../../assets/mandor4.jpeg")}
              alt="p"
              mt={10}
              role="img">
              </Image>
              <Heading ml={10} mt={20}>Firli Juan Sandi</Heading>
  
            </HStack>
          </Box>
          <Box>
            <HStack>
              <Image
              alignItems="center"
              size="xl"
              borderRadius="$none"
              source={require("../../assets/mandor5.jpeg")}
              alt="p"
              mt={10}
              role="img">
              </Image>
              <Heading ml={10} mt={20}>Firli Juan Sandi</Heading>
  
            </HStack>
          </Box>
          
          </ScrollView>
        </Center>
      </>
    );
  };
  
  export default Tukang;