import { Flex } from '@chakra-ui/react';
import { Header } from '../components/Header';

export default function Home() {
  return (
    <Flex direction="column" w="100%" h="100vh">
      <Header />
    </Flex>
  );
}
