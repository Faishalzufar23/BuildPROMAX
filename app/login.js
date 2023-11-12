import { Heading, FormControl, VStack, Text, Input, InputField, InputSlot, InputIcon, 
    ButtonText, showPassword, handleState, EyeIcon, EyeOffIcon, EyeOnIcon, Button, Box, setShowModal, 
    ButtonIcon, } from "@gluestack-ui/themed";
import {Link} from "expo-router"
  
  
  const Login = () => {
    return (
      <>
      <Box
      flex={1}
       alignContent="$center"
       justifyContent="$center">
      <FormControl
        p="$4"
        borderWidth="$1"
        borderRadius="$lg"
        borderColor="$borderLight300"
        sx={{
          _dark: {
            borderWidth: "$1",
            borderRadius: "$lg",
            borderColor: "$borderDark800",
          },
        }}
      >
        <VStack space="xl">
          <Heading color="$text900" lineHeight="$md">
            Login
          </Heading>
          <VStack space="xs">
            <Text color="$text500" lineHeight="$xs">
              Email
            </Text>
            <Input>
              <InputField type="text" />
            </Input>
          </VStack>
          <VStack space="xs">
            <Text color="$text500" lineHeight="$xs">
              Password
            </Text>
            <Input textAlign="center">
              <InputField type={showPassword ? "text" : "password"} />
              <InputSlot pr="$3" onPress={handleState}>
                {/* EyeIcon, EyeOffIcon are both imported from 'lucide-react-native' */}
                <InputIcon
                  as={showPassword ? EyeIcon : EyeOffIcon}
                  color="$darkBlue500"
                />
              </InputSlot>
            </Input>
          </VStack>
          <Button
            ml="auto"
            onPress={() => {
              setShowModal(false)
            }}
          >
            <Link href="/(tabs)/home">
            <ButtonText color="$white">Login</ButtonText>
            </Link>
          </Button>
        </VStack>
      </FormControl> 
      </Box>  
      
      <Button size="md" variant="solid" action="primary" isDisabled={false} isFocusVisible={false} >
      <Link href="/register">
            <ButtonText>Register</ButtonText>
            <ButtonIcon/>
            </Link>
          </Button>
          
      </>
    );
  };
  
  export default Login;