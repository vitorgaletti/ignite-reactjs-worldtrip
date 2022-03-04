import { Text } from '@chakra-ui/react';

export default function Bio() {
  return (
    <Text
      fontWeight="normal"
      fontSize={['sm', 'md', 'xl', '2xl']}
      lineHeight={['21px', '28px', '36px']}
      textAlign="justify"
      color="gray.700"
    >
      A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo
      a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a
      leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio,
      o Cáucaso, e o mar Negro a sudeste
    </Text>
  );
}
