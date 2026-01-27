import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';

const Footer = () => (
  <Box as="footer" py={4} px={4} bg="gray.100" mt={10}>
    <Flex justify="center" align="center">
      <Text fontSize="sm" color="gray.600">&copy; {new Date().getFullYear()} Hunger. All rights reserved.</Text>
    </Flex>
  </Box>
);

export default Footer;
