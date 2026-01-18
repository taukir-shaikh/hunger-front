import { Box, Image, Text, Badge, Flex, Button } from '@chakra-ui/react';

const FoodCard = ({ name, image, price, rating, onAdd }) => (
  <Box bg="white" borderRadius="lg" boxShadow="md" overflow="hidden" _hover={{ boxShadow: 'xl' }}>
    <Image src={image} alt={name} w="100%" h="150px" objectFit="cover" />
    <Box p={4}>
      <Flex justify="space-between" align="center" mb={2}>
        <Text fontWeight="bold" fontSize="md">{name}</Text>
        <Badge colorScheme="yellow">{rating}★</Badge>
      </Flex>
      <Text color="gray.500">₹{price}</Text>
      <Button colorScheme="brand" size="sm" mt={2} onClick={onAdd}>Add to Cart</Button>
    </Box>
  </Box>
);

export default FoodCard;
