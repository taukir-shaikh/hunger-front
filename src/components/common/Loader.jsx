import React from 'react';
import { Center, Spinner } from '@chakra-ui/react';

const Loader = () => (
  <Center h="100vh">
    <Spinner size="xl" color="teal.500" thickness="4px" speed="0.65s" />
  </Center>
);

export default Loader;
