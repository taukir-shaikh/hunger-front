import React, { useEffect, useState } from 'react';
import { Box, Heading, Text, Image, Spinner, Flex, Badge, Button } from '@chakra-ui/react';
import axios from 'axios';

const RAPIDAPI_KEY = 'd006dcf6c2msh5ea6a453c63ff40p14ec09jsne67daba38120';
const RAPIDAPI_HOST = 'themealdb.p.rapidapi.com';

const MealOfTheDayCard = () => {
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMeal = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://themealdb.p.rapidapi.com/random.php', {
          headers: {
            'x-rapidapi-key': RAPIDAPI_KEY,
            'x-rapidapi-host': RAPIDAPI_HOST,
          },
        });
        setMeal(response.data.meals[0]);
      } catch (error) {
        setMeal(null);
      }
      setLoading(false);
    };
    fetchMeal();
  }, []);

  return (
    <Box bg="white" borderRadius="2xl" boxShadow="lg" p={8} maxW="400px" mx="auto" mt={10}>
      <Heading size="lg" mb={4} color="brand.500" textAlign="center">MEAL OF THE DAY</Heading>
      {loading ? (
        <Flex justify="center" align="center" minH="200px"><Spinner size="xl" /></Flex>
      ) : meal ? (
        <>
          <Image src={meal.strMealThumb} alt={meal.strMeal} borderRadius="xl" boxSize="220px" mx="auto" mb={4} />
          <Heading size="md" mb={2} textAlign="center">{meal.strMeal}</Heading>
          <Text color="gray.500" mb={2} textAlign="center">{meal.strArea} • {meal.strCategory}</Text>
          <Badge colorScheme="green" mb={2} display="block" mx="auto" w="fit-content">{meal.strTags ? meal.strTags : 'No tags'}</Badge>
          <Text fontSize="sm" color="gray.600" noOfLines={3} mb={4} textAlign="center">{meal.strInstructions}</Text>
          <Button as="a" href={meal.strSource || meal.strYoutube} target="_blank" colorScheme="orange" w="full">View Recipe</Button>
        </>
      ) : (
        <Text color="red.500" textAlign="center">Could not fetch meal.</Text>
      )}
    </Box>
  );
};

export default MealOfTheDayCard;
