import MainLayout from '../layouts/MainLayout';
import { SimpleGrid, Box, Heading } from '@chakra-ui/react';
import RestaurantCard from '../components/common/RestaurantCard';

const dummyRestaurants = [
  { name: 'Spicy Villa', image: '/assets/food1.jpg', cuisine: 'Indian, Chinese', rating: 4.5 },
  { name: 'Pizza Hub', image: '/assets/food2.jpg', cuisine: 'Italian, Pizza', rating: 4.2 },
  { name: 'Burger Point', image: '/assets/food3.jpg', cuisine: 'American, Fast Food', rating: 4.0 },
  { name: 'Sushi World', image: '/assets/food4.jpg', cuisine: 'Japanese, Sushi', rating: 4.7 },
];

const Restaurants = () => (
  <MainLayout>
    <Box py={8} px={4}>
      <Heading mb={6} color="brand.500">Restaurants</Heading>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8}>
        {dummyRestaurants.map((rest, idx) => (
          <RestaurantCard key={idx} {...rest} onOrder={() => alert(`Order from ${rest.name}`)} />
        ))}
      </SimpleGrid>
    </Box>
  </MainLayout>
);

export default Restaurants;
