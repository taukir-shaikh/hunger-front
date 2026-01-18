import { Box, Heading, Text, Button, Stack, Image, useColorModeValue } from '@chakra-ui/react';
import FoodSlider from './FoodSlider';

const HeroSection = () => {
  return (
    <Box as="section" py={{ base: 10, md: 20 }} px={4} bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack direction={{ base: 'column', md: 'row' }} align="center" spacing={10}>
        <Box flex={1}>
          <Heading as="h1" size="2xl" mb={4} color="brand.500">
            Order Food Online
          </Heading>
          <Text fontSize="xl" mb={6} color="gray.600">
            Discover the best foods & restaurants near you. Fast delivery, great taste, and exclusive offers!
          </Text>
          <Button colorScheme="brand" size="lg">Explore Restaurants</Button>
        </Box>
        <Box flex={1}>
          <FoodSlider />
        </Box>
      </Stack>
    </Box>
  );
};

export default HeroSection;
