import { Text } from '@chakra-ui/react';
import { ContinentProps } from '../../pages/continent/[slug]';

export default function Bio({ continent }: ContinentProps) {
  return (
    <Text
      fontWeight="normal"
      fontSize={['sm', 'md', 'xl', '2xl']}
      lineHeight={['21px', '28px', '36px']}
      textAlign="justify"
      color="gray.700"
    >
      {continent?.description}
    </Text>
  );
}
