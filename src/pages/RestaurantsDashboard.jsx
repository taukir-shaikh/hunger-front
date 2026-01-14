import { Box, Heading, SimpleGrid, Image, Text, Spinner } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import axios from 'axios';

const RestaurantsDashboard = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Example using a free API for restaurants (Yelp Fusion requires API key, so using a mock API here)
    axios.get('https://random-data-api.com/api/restaurant/random_restaurant?size=12')
      .then(res => {
        setRestaurants(res.data || []);
        setLoading(false);
      });
  }, []);

  return (
    <Box maxW="6xl" mx="auto" mt={10} p={6}>
      <Heading mb={6}>Restaurants</Heading>
      {loading ? <Spinner /> : (
        <SimpleGrid columns={[1, 2, 3]} spacing={6}>
          {restaurants.map(restaurant => (
            <Box key={restaurant.id} borderWidth={1} borderRadius="lg" overflow="hidden" p={4}>
              <Image src={restaurant.logo} alt={restaurant.name} boxSize="200px" objectFit="cover" mx="auto" />
              <Text mt={2} fontWeight="bold">{restaurant.name}</Text>
              <Text fontSize="sm">{restaurant.type}</Text>
              <Text fontSize="sm">{restaurant.description}</Text>
            </Box>
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
};

export default RestaurantsDashboard;
