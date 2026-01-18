import { Box, Text, Flex } from '@chakra-ui/react';

const Footer = () => (
  <Box bg="brand.500" color="white" py={4} mt={8}>
    <Flex justify="center">
      <Text fontSize="sm">&copy; {new Date().getFullYear()} Hunger. All rights reserved.</Text>
    </Flex>
  </Box>
);

export default Footer;
