import { Flex } from '@chakra-ui/react';
import { Banner } from '../../components/Banner';
import { Content } from '../../components/Content';
import { Header } from '../../components/Header';

export default function Continent() {
  return (
    <Flex direction="column">
      <Header />
      <Banner />

      <Flex
        direction="column"
        w="100%"
        h="100%"
        maxWidth="1160px"
        mx="auto"
        mt={['6', '8', '12', '20']}
      >
        <Content />
      </Flex>
    </Flex>
  );
}
