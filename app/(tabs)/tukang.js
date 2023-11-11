import { Center, Heading, Image } from "@gluestack-ui/themed";
import { Header} from "../../components";

const Tukang = () => {
  return (
    <>
      <Header title={"Tukang"} />
      <Center flex={1}>
      <Image
  size="xs"
  borderRadius="$none"
  source={require("../../assets/cnn.png")}
  alt="p"
  role="img"
  />
        <Heading>Home</Heading>
      </Center>
    </>
  );
};

export default Tukang;