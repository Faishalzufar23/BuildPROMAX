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
    RadioGroup,
    Radio,
    RadioIndicator,
    RadioIcon,
    RadioLabel,
    CircleIcon,
    HStack,
    Textarea,
    TextareaInput} from "@gluestack-ui/themed";
import { Link } from "expo-router";
import { Pressable } from "react-native";

const Pk = () => {
  return (
    <>
      
      <Center flex={1}>
        <Heading mb="$10">Panggilan Tukang</Heading>

        <Box h="$32" w="$72">
          <FormControl mb="$5" size="md" isDisabled={false} isInvalid={false} isReadOnly={false} isRequired={true} >
            <FormControlLabel mb='$1'>
              <FormControlLabelText>Alamat</FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputField
                type="email"
                placeholder="Alamat Pembangunan"
              />
            </Input>
            <FormControlHelper>
              <FormControlHelperText>
                Minimal 6 karakter.
              </FormControlHelperText>
            </FormControlHelper>
            <FormControlError>
              <FormControlErrorIcon
                as={AlertCircleIcon}
              />
              <FormControlErrorText>
                Setidaknya inputkan minimal 6.
              </FormControlErrorText>
            </FormControlError>
          </FormControl>

          <FormControl mb="$10" size="md" isDisabled={false} isInvalid={false} isReadOnly={false} isRequired={true} >
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

        <Pressable>
        <RadioGroup mb="$5">
        <HStack>
          <Radio value="change" size="md" isInvalid={false} isDisabled={false} >
            <RadioIndicator mr='$2'>
              <RadioIcon strokeWidth={1}/>
            </RadioIndicator>
            <RadioLabel>1 Tukang </RadioLabel>
          </Radio>

          <Radio value="change" size="md" isInvalid={false} isDisabled={false} >
            <RadioIndicator mr='$2'>
              <RadioIcon strokeWidth={1}/>
            </RadioIndicator>
            <RadioLabel>2-4 Tukang </RadioLabel>
          </Radio>

          <Radio value="change" size="md" isInvalid={false} isDisabled={false} >
            <RadioIndicator mr='$2'>
              <RadioIcon strokeWidth={1}/>
            </RadioIndicator>
            <RadioLabel>5-7 Tukang </RadioLabel>
          </Radio>
        </HStack>
        </RadioGroup>
        </Pressable>

        
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

export default Pk;