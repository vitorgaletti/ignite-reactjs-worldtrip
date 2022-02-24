import { Box, Flex, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';

export function Banner() {
  return (
    <SimpleGrid
      columns={2}
      spacing="205.25px"
      w="100%"
      h="335px"
      bgImage="url(/banner.png)"
      bgSize="cover"
      bgRepeat="no-repeat"
      px="8.75rem"
    >
      <Box mx="auto" my="5rem">
        <Heading
          fontWeight="500"
          fontSize="4xl"
          lineHeight="54px"
          color="gray.50"
        >
          5 Continentes, <br /> infinitas possibilidades.
        </Heading>

        <Text
          fontWeight="normal"
          fontSize="xl"
          lineHeight="30px"
          color="gray.200"
          mt="1.25rem"
        >
          Chegou a hora de tirar do papel a viagem que <br />
          você sempre sonhou.
        </Text>
      </Box>
      <Box maxWidth="417.15px" mt="4.75rem">
        <Image
          src="./airplane.svg"
          alt="Avião"
          w="100%"
          transform="rotate(3deg)"
        ></Image>
      </Box>
    </SimpleGrid>
  );
}
