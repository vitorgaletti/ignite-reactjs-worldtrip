import { Flex, Grid, Icon } from '@chakra-ui/react';
import { RiArrowLeftSLine } from 'react-icons/ri';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Logo } from './Logo';

export function Header() {
  const { asPath } = useRouter();
  const notHomePage = asPath !== '/';

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
      <Grid
        w="100%"
        h="100%"
        mx="auto"
        templateColumns="repeat(3, 1fr)"
        maxWidth="1160px"
        alignItems="center"
        justifyContent="center"
      >
        {notHomePage && (
          <Link href="/">
            <a>
              <Icon
                as={RiArrowLeftSLine}
                fontSize={[20, 40]}
                justifySelf="start"
              >
                Olá
              </Icon>
            </a>
          </Link>
        )}
        <Logo gridColumn="2" justifySelf="center" />
      </Grid>
    </Flex>
  );
}
