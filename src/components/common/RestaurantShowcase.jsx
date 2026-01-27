import { Box, Heading, SimpleGrid, Image, Text, Badge, Flex, Skeleton } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRestaurantsAsync } from '../../app/slices/restaurantSlice';
import { Link as RouterLink } from 'react-router-dom';


const RestaurantShowcase = () => {
  const dispatch = useDispatch();
  const { restaurants, loading } = useSelector((state) => state.restaurant);

  useEffect(() => {
    dispatch(fetchRestaurantsAsync());
  }, [dispatch]);

  return (
    <Box bg="white" py={10}>
      <Heading size="lg" mb={6} textAlign="center">Discover best restaurants on Dineout</Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} px={{ base: 2, md: 8 }}>
        {loading
          ? Array.from({ length: 4 }).map((_, idx) => <Skeleton key={idx} height="260px" borderRadius="2xl" />)
          : restaurants?.slice(0, 4).map((rest) => (
              <Box
                as={RouterLink}
                to={`/restaurants/${rest.id}`}
                key={rest.id}
                bg="white"
                borderRadius="2xl"
                boxShadow="lg"
                overflow="hidden"
                position="relative"
                _hover={{ boxShadow: '2xl', transform: 'translateY(-4px) scale(1.03)' }}
                transition="all 0.2s"
              >
                <Image src={rest.image} alt={rest.name} h="140px" w="100%" objectFit="cover" />
                <Box p={4}>
                  <Text fontWeight="bold" fontSize="lg" color="gray.800">{rest.name}</Text>
                  <Text color="gray.500" fontSize="sm">{rest.cuisine || 'Various Cuisines'}</Text>
                  <Flex mt={2} align="center" gap={2} flexWrap="wrap">
                    <Badge colorScheme="green">{rest.rating || '--'}★</Badge>
                    <Text color="gray.600" fontSize="sm">{rest.delivery_time || '--'} mins</Text>
                  </Flex>
                </Box>
              </Box>
            ))}
      </SimpleGrid>
    </Box>
  );
};

export default RestaurantShowcase;
