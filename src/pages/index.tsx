import { Flex } from '@chakra-ui/react';
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
    </Flex>
  );
}
