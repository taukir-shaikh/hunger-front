import { Box, Flex, HStack, Button, useColorMode, Spacer, Heading } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box bg="white" px={4} boxShadow="sm" position="sticky" top={0} zIndex={10}>
      <Flex h={16} alignItems={'center'}>
        <Heading size="md" color="brand.500">Hunger</Heading>
        <Spacer />
        <HStack spacing={4}>
          <Button variant="ghost">Home</Button>
          <Button variant="ghost">Restaurants</Button>
          <Button variant="ghost">Foods</Button>
          <Button variant="ghost">Dashboard</Button>
          <Button variant="outline" colorScheme="brand">Login</Button>
          <Button variant="solid" colorScheme="brand">Sign Up</Button>
          <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
