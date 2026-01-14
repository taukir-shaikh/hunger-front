import { Box, Heading, SimpleGrid, Image, Text, Spinner } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import axios from 'axios';

const FoodsDashboard = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Example using TheMealDB API for free food data
    axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=c')
      .then(res => {
        setFoods(res.data.meals || []);
        setLoading(false);
      });
  }, []);

  return (
    <Box maxW="6xl" mx="auto" mt={10} p={6}>
      <Heading mb={6}>Foods</Heading>
      {loading ? <Spinner /> : (
        <SimpleGrid columns={[1, 2, 3]} spacing={6}>
          {foods.map(food => (
            <Box key={food.idMeal} borderWidth={1} borderRadius="lg" overflow="hidden" p={4}>
              <Image src={food.strMealThumb} alt={food.strMeal} boxSize="200px" objectFit="cover" mx="auto" />
              <Text mt={2} fontWeight="bold">{food.strMeal}</Text>
              <Text fontSize="sm">{food.strArea}</Text>
            </Box>
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
};

export default FoodsDashboard;
