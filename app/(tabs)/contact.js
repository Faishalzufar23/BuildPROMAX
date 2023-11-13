import { Box, 
  Center, 
  Heading, 
  FormControl,
  FormControlLabel, 
  FormControlLabelText, 
  Input, 
  InputField,
  FormControlHelper,
  FormControlHelperText, 
  FormControlError,
  FormControlErrorIcon,
  AlertCircleIcon,
  FormControlErrorText,
  Select,
  SelectTrigger,
  SelectInput,
  ChevronDownIcon,
  Icon,
  SelectBackdrop,
  SelectPortal,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectItem,
  SelectContent,
  SelectIcon,
  Textarea,
  TextareaInput,
  Image} from "@gluestack-ui/themed";
import {Text} from "react-native";
import { Link } from "expo-router";
import { Svg } from 'react-native-svg';
import Ionicons from "@expo/vector-icons/Ionicons";


const Contact = () => {
return (
  <>
    
    <Center flex={0.6}>
    {/* <Image
     size="xl"
     borderRadius="$none"
     source={require("../../assets/promax.png")}
     alt="p"
     role="img">
    </Image> */}
    <Ionicons name="call-outline" size={40} color="black" />
      <Heading mb="$5" textAlign="center" fontSize={"30"}>Contact Us</Heading>

      <Box h="$32" w="$72">
        <FormControl mb="$2" size="md" isDisabled={false} isInvalid={false} isReadOnly={false} isRequired={true} >
          <FormControlLabel mb='$1'>
            <FormControlLabelText>Email</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField
              type="email"
              placeholder="Email"
            />
          </Input>
          {/* <FormControlHelper>
            <FormControlHelperText>
              Minimal 6 karakter.
            </FormControlHelperText>
          </FormControlHelper> */}
          <FormControlError>
            <FormControlErrorIcon
              as={AlertCircleIcon}
            />
            <FormControlErrorText>
              Setidaknya inputkan minimal 6.
            </FormControlErrorText>
          </FormControlError>
        </FormControl>

        <FormControl mb="$5" size="md" isDisabled={false} isInvalid={false} isReadOnly={false} isRequired={true} >
          <FormControlLabel mb='$1'>
            <FormControlLabelText>Nomor Telpon</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField
              type="email"
              placeholder="Nomor Telpon pengguna"
            />
          </Input>
        </FormControl>

        {/* <Select mb="$5">
          <Text>
              Pilih Layanan
          </Text>
          <SelectTrigger>
              <SelectInput placeholder="Country" />
                  <SelectIcon mr="$3">
                      <Icon as={ChevronDownIcon} />
                  </SelectIcon>
          </SelectTrigger>
          
          <SelectPortal>
          <SelectBackdrop />
          <SelectContent>
          <SelectDragIndicatorWrapper>
          <SelectDragIndicator />
          </SelectDragIndicatorWrapper>
          <SelectItem label="India" value="India" />
          <SelectItem label="Sri Lanka" value="Sri Lanka" />
          <SelectItem label="Uganda" value="Uganda" />
          <SelectItem label="Japan" value="Japan" />
          </SelectContent>
      </SelectPortal>
      </Select> */}

      <Text size={40}>Pesan untuk Kami</Text>
      <Textarea size="md" isReadOnly={false} isInvalid={false} isDisabled={false}  w='$64'>
        <TextareaInput
          placeholder="Your text goes here..."
        />
      </Textarea>
    
      
      </Box>
    </Center>
  </>
);
};

export default Contact;