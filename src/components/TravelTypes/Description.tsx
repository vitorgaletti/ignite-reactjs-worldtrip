import { Text, TextProps } from '@chakra-ui/react';

interface DescriptionProps extends TextProps {
  children: string;
}

export function Description({ children }: DescriptionProps) {
  return (
    <Text
      pt={['0', '1.5rem']}
      pl="0.5rem"
      fontWeight={['500', '600']}
      fontSize={['lg', '2xl']}
      lineHeight={['27px', '36px']}
      textAlign="center"
      color="gray.700"
    >
      {children}
    </Text>
  );
}
