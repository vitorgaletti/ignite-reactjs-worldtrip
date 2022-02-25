import { Flex, Heading } from '@chakra-ui/react';

export function Divider() {
  return (
    <Flex
      align="center"
      justify="center"
      mx="auto"
      w={['3.75rem', '5.625rem']}
      border={['1px solid #47585B', '2px solid #47585B']}
    ></Flex>
  );
}
