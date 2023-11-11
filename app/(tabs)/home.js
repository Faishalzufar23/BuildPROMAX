import { Center, Heading, Image } from "@gluestack-ui/themed";
import { Header} from "../../components";

const Home = () => {
  return (
    <>
      <Header title={"Home"} />
      <Center flex={1}>
      <Image
  size="2xl"
  borderRadius="$none"
  source={require("../../assets/promax.png")}
  alt="p"
  role="img"
  />
        <Heading
        size="3xl"
        >Build PROMAX</Heading>
      </Center>
    </>
  );
};

export default Home;