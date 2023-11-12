import { Button, Center, Box, VStack, Heading, Text, Input, InputField, ButtonText, 
    Icon, ArrowLeftIcon, Link } from '@gluestack-ui/themed';

const Register = () => {
    return (
      <>
        
        <Center>
          <Box p='$5' maxWidth='$96' borderWidth='$1' borderColor='$backgroundLight300' borderRadius='$lg' sx={{
             _dark:{
            borderColor:'$backgroundDark700'
            }
          }}>
            <VStack space='xs' pb='$4'>
              <Heading lineHeight={30}>
                Set your account
              </Heading>
              <Text fontSize='$sm'>
                Almost done. Enter your new password and you are all set.
              </Text>
            </VStack>
            <VStack space='xl' py='$2'>
              <Input>
                <InputField
                  py='$2'
                  placeholder="Username"
                />
              </Input>
              <Input>
                <InputField
                  py='$2'
                  placeholder="email"
                />
              </Input>
              <Input>
                <InputField
                  py='$2'
                  placeholder="Password"
                />
              </Input>
            </VStack>
            <VStack space='lg' pt='$4'>
              <Button
                size='sm'
              >
                <ButtonText>
                  Submit
                </ButtonText>
              </Button>
              <Box flexDirection='row'>
                <Button variant='link' p='$0' size='sm'>
                  {/* ArrowLeftIcon is imported from 'lucide-react-native' */}
                  <Icon
                    size='md'
                    mr='$1'
                    as={ArrowLeftIcon}
                  />
                  <Link href="/login">
                  <ButtonText
                  >
                    Back to login
                  </ButtonText>
                  </Link>
                </Button>
              </Box>
            </VStack>
          </Box>
        </Center>
      
      </>
    );
  };
  
  export default Register;