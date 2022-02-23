import { Flex } from '@chakra-ui/react';
import { Logo } from './Logo';

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      h={['50px', '100px']}
      mx="auto"
      px="1rem"
      align="center"
      justify="center"
      bg="white"
    >
      <Flex align="center" justify="space-between">
        <Logo />
      </Flex>
    </Flex>
  );
}
