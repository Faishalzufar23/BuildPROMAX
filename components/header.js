import React from "react";
import { Box, Image, HStack, Heading, TooltipContent, Tooltip} from "@gluestack-ui/themed";
import { SafeAreaView } from "react-native-safe-area-context";
import { Pressable, StatusBar } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";


const Header = ({ title, withBack = false, withClose = false }) => {
  const trueGray = "#A9A9A9";

  return (
    <SafeAreaView>
      <StatusBar barStyle="light" backgroundColor={trueGray} />
      <Box bg="$trueGray" p="$4">
        
        <HStack justifyContent="space-between" alignItems="center">
          <HStack alignItems="center">
            {!withBack ? (
              <>
                <Image
                  source={require("../assets/logo.jpeg")}
                  borderRadius={30}
                  w="$12"
                  h="$12"
                  alt="CNN Logo"
                  mr={"$3"}
                  role="img"
                />
              </>
            ) : (
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => navigation.goBack()}
              >
                <Box mr={"$3"}>
                  <Ionicons name="arrow-back-outline" size={32} color="white" />
                </Box>
              </TouchableOpacity>
            )}
            <Heading color={"$black"}>{title}</Heading>
          </HStack>
          <HStack space={"2xl"}>
            <Tooltip
              placement="top left"
              trigger={() => {
                return (
                  <Pressable>
                  <Box>
                    <Link href={"/login"}>                  
                    <Image
                    source={require("../assets/log.png")}
                    w="$12"
                    h="$12"
                    alt="CNN Logo"
                    mr={"$3"}
                    role="img"
                  />
                  </Link> 
                  </Box>
                  </Pressable>
                );
              }}
            >
              <TooltipContent>
                <Heading color={"$white"}>Search</Heading>
              </TooltipContent>
            </Tooltip>
          </HStack>
        </HStack>
      </Box>
    </SafeAreaView>
  );
};

export default Header;
