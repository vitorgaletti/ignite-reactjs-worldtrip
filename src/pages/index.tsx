import { Flex, Heading } from '@chakra-ui/react';
import { Banner } from '../components/Banner';
import { Divider } from '../components/Divider';
import { Header } from '../components/Header';
import { TravelTypes } from '../components/TravelTypes';

export default function Home() {
  return (
    <Flex direction="column" w="100%" h="100vh">
      <Header />
      <Banner />
      <TravelTypes />
      <Divider />
      <Heading
        fontWeight="500"
        fontSize={['xl', '4xl']}
        lineHeight={['30px', '54px']}
        textAlign="center"
        color="gray.700"
        mt={['1.5rem', '3.25rem']}
      >
        Vamos nessa? <br /> Então escolha seu continente
      </Heading>
    </Flex>
  );
}
