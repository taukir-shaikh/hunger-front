import MainLayout from '../layouts/MainLayout';
import { SimpleGrid, Box, Heading } from '@chakra-ui/react';
import FoodCard from '../components/common/FoodCard';

const dummyFoods = [
  { name: 'Paneer Tikka', image: '/assets/food1.jpg', price: 220, rating: 4.6 },
  { name: 'Veg Pizza', image: '/assets/food2.jpg', price: 180, rating: 4.3 },
  { name: 'Chicken Burger', image: '/assets/food3.jpg', price: 150, rating: 4.1 },
  { name: 'Sushi Roll', image: '/assets/food4.jpg', price: 320, rating: 4.8 },
];

const Foods = () => (
  <MainLayout>
    <Box py={8} px={4}>
      <Heading mb={6} color="brand.500">Foods</Heading>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8}>
        {dummyFoods.map((food, idx) => (
          <FoodCard key={idx} {...food} onAdd={() => alert(`Added ${food.name}`)} />
        ))}
      </SimpleGrid>
    </Box>
  </MainLayout>
);

export default Foods;
