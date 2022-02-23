import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    yellow: {
      '400': '#FFBA08',
      '300': 'rgb(255, 186, 8, 0.5)'
    },
    gray: {
      '700': '#47585B',
      '500': '#999999',
      '400': ' rgb(153,153,153, 0.5)',
      '200': '#DADADA',
      '50': '#F5F8FA'
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.700'
      }
    }
  }
});
