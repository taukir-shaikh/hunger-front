import { extendTheme } from '@chakra-ui/react';
import colors from './colors';
import fonts from './fonts';

const config = {
  initialColorMode: 'system',
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  colors,
  fonts,
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === 'dark' ? 'gray.900' : 'gray.50',
        color: props.colorMode === 'dark' ? 'gray.100' : 'gray.800',
      },
      '::placeholder': {
        color: props.colorMode === 'dark' ? '#A0AEC0' : '#718096',
        opacity: 1,
      },
    }),
  },
});

export default theme;
