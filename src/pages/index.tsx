import { Flex, Heading } from '@chakra-ui/react';
import { Banner } from '../components/Banner';
import { Divider } from '../components/Divider';
import { Header } from '../components/Header';
import { TravelTypes } from '../components/TravelTypes';
import { Slider } from '../components/Slider';

export default function Home() {
  return (
    <Flex direction="column" w="100%" h="100%">
      <Header />
      <Banner />
      <TravelTypes />
      <Divider />
      <Heading
        fontWeight="500"
        fontSize={['xl', '2xl', '3xl', '4xl']}
        lineHeight={['30px', '54px']}
        textAlign="center"
        color="gray.700"
        mt={['1.5rem', '2rem', '2.25rem', '3.25rem']}
      >
        Vamos nessa? <br /> Então escolha seu continente
      </Heading>

      <Slider />
    </Flex>
  );
}
