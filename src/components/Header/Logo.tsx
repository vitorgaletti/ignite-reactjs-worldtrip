import { Image } from '@chakra-ui/react';

export function Logo() {
  return (
    <Image
      w="100%"
      maxWidth={['81px', '184px']}
      h={['20px', '45.92px']}
      src="./logo.svg"
      alt="Logo worldtrip"
    ></Image>
  );
}
