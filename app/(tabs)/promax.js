import { Box, 
  Center, 
  Heading,
  Image,
  Text, } from "@gluestack-ui/themed";
import { Header } from "../../components";
import { ScrollView } from "react-native-gesture-handler";

const Promax = () => {
  return (
    <>
      <Header title={"Promax"} />
      <Center flex={1}>
      <ScrollView>
      <Box mb="$12">
        <Image
        size="2xl"
        borderRadius="$none"
        source={require("../../assets/promax.png")}
        alt="p"
        role="img"></Image>
        <Heading>Latar Belakang </Heading>
        <Text>Di era pembangunan Infrastruktur saat ini, para tukang cenderung dipandang rendah karena banyak 
          yang menganggap pekerjaan tersebut tidak menggunakan ilmu yang terlalu banyak. Namun, fakta di lapangan
           juga banyak yang mengatakan bahwa para tukang di waktu jam kerja juga terlihat kurang profesional.
            Yang membuat sebuah proyek bisa berjalan lebih lama tidak sesuai estimasi di awal. 
            Oleh karena itu, para tukang berhak mendapatkan bekal ilmu sebelum terjun ke lapangan yaitu pelatihan
             yang layak dari segi teori dan praktek dan juga bersertifikat agar bisa menjalani pekerjaan
              dengan profesional dan meningkatkan nilai jual.</Text>
      </Box>
      <Box>
        <Heading>Promax</Heading>
        <Text>Perusahaan PRO/MAX menyediakan itu semua, mulai dari materi yang bisa diakses secara online ,
           dan pelatihan offline berbasis praktek dengan fasilitas yang sudah disediakan. PRO/MAX merupakan perusahaan 
           yang menyediakan pelatihan untuk para tukang mulai dari yang pemula sampai yang profesional. 
           PRO/MAX terpanggil untuk berperan dalam pembangunan properti di Indonesia dikarenakan tingginya angka proyek yang 
           berjalan dan juga banyaknya permintaan Developer sehingga membutuhkan tenaga kerja dengan jumlah yang besar 
           dan juga berpengalaman.</Text>
      </Box>
      </ScrollView>
      </Center>
    </>
  );
};

export default Promax;