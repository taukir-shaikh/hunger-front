import { Box, Image, Text, Badge, Flex, Button } from '@chakra-ui/react';

const RestaurantCard = ({ name, image, cuisine, rating, onOrder }) => (
  <Box bg="white" borderRadius="lg" boxShadow="md" overflow="hidden" _hover={{ boxShadow: 'xl' }}>
    <Image src={image} alt={name} w="100%" h="180px" objectFit="cover" />
    <Box p={4}>
      <Flex justify="space-between" align="center" mb={2}>
        <Text fontWeight="bold" fontSize="lg">{name}</Text>
        <Badge colorScheme="green">{rating}★</Badge>
      </Flex>
      <Text color="gray.500" mb={3}>{cuisine}</Text>
      <Button colorScheme="brand" size="sm" onClick={onOrder}>Order Now</Button>
    </Box>
  </Box>
);

export default RestaurantCard;
