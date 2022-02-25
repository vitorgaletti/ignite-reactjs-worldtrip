import { Flex, Heading } from '@chakra-ui/react';

export function Divider() {
  return (
    <>
      <Flex
        align="center"
        justify="center"
        mx="auto"
        w={['3.75rem', '5.625rem']}
        border={['1px solid #47585B', '2px solid #47585B']}
        mt={['2.25rem', '5rem']}
      ></Flex>
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
    </>
  );
}
