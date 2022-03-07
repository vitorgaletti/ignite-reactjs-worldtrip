import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

export default function City() {
  return (
    <Box
      w="100%"
      maxWidth="16rem"
      h="279px"
      backgroundColor="#FFFFFF"
      borderRadius="4px"
    >
      <Image
        w="100%"
        maxWidth="16rem"
        h="173px"
        mx="auto"
        src="/images/london.png"
        alt="Londres"
      />
      <Flex
        justify="space-between"
        alignItems="center"
        px="6"
        pt="1.125rem"
        pb="25px"
        border="1px solid rgba(255, 186, 8, 0.5);"
        borderTop="0"
      >
        <Flex direction="column">
          <Heading
            fontFamily="Barlow"
            fontWeight="600"
            fontSize="xl"
            lineHeight="25px"
            color="gray.700"
          >
            Londres
          </Heading>
          <Text
            fontFamily="Barlow"
            fontWeight="500"
            fontSize="md"
            lineHeight="26px"
            color="gray.500"
            pt="3"
          >
            Reino Unido
          </Text>
        </Flex>
        <Image
          w="100%"
          maxWidth="30px"
          h="30px"
          mx="auto"
          src="/images/flag.png"
          alt="Bandeira"
          borderRadius="50%"
          objectFit="cover"
        />
      </Flex>
    </Box>
  );
}