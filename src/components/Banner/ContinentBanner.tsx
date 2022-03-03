import { Box, Flex, Heading } from '@chakra-ui/react';

export function ContinentBanner() {
  return (
    <Flex
      w="100%"
      h={['150px', '300px', '300px', '500px']}
      bgImage="url(/bannereu.png)"
      bgPosition="center"
      bgSize="cover"
      bgRepeat="no-repeat"
      align="center"
      justify={['center', 'center', 'center', 'flex-start']}
      pl={['0', '0', '0', '8.75rem']}
      pt={['0', '0', '0', '19.375rem']}
    >
      <Heading
        fontWeight="600"
        fontSize={['1.75rem', '3xl', '4xl', '5xl']}
        lineHeight={['42px', '56px', '72px']}
        color="gray.50"
        textAlign={['center', 'center', 'center', 'left']}
      >
        Europa
      </Heading>
    </Flex>
  );
}
