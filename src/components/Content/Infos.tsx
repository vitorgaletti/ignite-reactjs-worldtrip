import {
  Flex,
  Heading,
  Icon,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Text
} from '@chakra-ui/react';
import { RiInformationLine } from 'react-icons/ri';
import { ContinentProps } from '../../pages/continent/[slug]';

export default function Infos({ continent }: ContinentProps) {
  return (
    <Flex
      align="center"
      justify={[
        'space-between',
        'space-evenly',
        'space-evenly',
        'space-between'
      ]}
    >
      <Flex
        direction="column"
        align={['flex-start', 'flex-start', 'center']}
        justify="center"
      >
        <Heading
          fontWeight={'600'}
          fontSize={['2xl', '3xl', '4xl', '5xl']}
          lineHeight={['36px', '48px', '56px', '72px']}
          textAlign={['center']}
          color="yellow.400"
        >
          {continent?.countries}
        </Heading>
        <Text
          fontWeight={['400', '600']}
          fontSize={['lg', 'lg', 'xl', '2xl']}
          lineHeight={['27px', '32px', '36px']}
          textAlign="center"
          color="gray.700"
        >
          países
        </Text>
      </Flex>

      <Flex
        direction="column"
        align={['flex-start', 'flex-start', 'center']}
        justify="center"
      >
        <Heading
          fontWeight={'600'}
          fontSize={['2xl', '3xl', '4xl', '5xl']}
          lineHeight={['36px', '48px', '56px', '72px']}
          textAlign="center"
          color="yellow.400"
        >
          {continent?.languages}
        </Heading>
        <Text
          fontWeight={['400', '600']}
          fontSize={['lg', 'lg', 'xl', '2xl']}
          lineHeight={['27px', '32px', '36px']}
          textAlign="center"
          color="gray.700"
        >
          línguas
        </Text>
      </Flex>

      <Flex
        direction="column"
        align={['flex-start', 'flex-start', 'center']}
        justify="center"
      >
        <Heading
          fontWeight={'600'}
          fontSize={['2xl', '3xl', '4xl', '5xl']}
          lineHeight={['36px', '48px', '56px', '72px']}
          textAlign="center"
          color="yellow.400"
        >
          {continent?.cities}
        </Heading>
        <Text
          fontWeight={['400', '600']}
          fontSize={['lg', 'lg', 'xl', '2xl']}
          lineHeight={['27px', '32px', '36px']}
          textAlign="center"
          color="gray.700"
        >
          cidades +100
          <Popover>
            <PopoverTrigger>
              <span>
                <Icon
                  as={RiInformationLine}
                  w={['10px', '1rem']}
                  h={['10px', '1rem']}
                  cursor="pointer"
                  ml="5px"
                  color="gray.400"
                />
              </span>
            </PopoverTrigger>
            <PopoverContent
              bg="gray.700"
              color="gray.50"
              w={['200px', '200px', '600px', 'max-content']}
              h="auto"
            >
              <PopoverArrow bg="gray.700" />
              <PopoverCloseButton color="gray.200" />

              <PopoverBody
                fontWeight="400"
                fontSize={['sm', 'lg']}
                color="yellow.400"
                mt="1rem"
              >
                {`${continent?.cities_list} e mais...`}
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Text>
      </Flex>
    </Flex>
  );
}
