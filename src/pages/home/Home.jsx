import React, { useEffect } from 'react';
import FadeIn from '../../components/common/FadeIn';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRestaurantsAsync } from '../../app/slices/restaurantSlice';
import RestaurantCard from '../../components/common/RestaurantCard';
import { SimpleGrid, Box, Input, Select, Skeleton, VStack, Heading } from '@chakra-ui/react';

const Home = () => {
  const dispatch = useDispatch();
  const { restaurants, loading } = useSelector((state) => state.restaurant);

  useEffect(() => {
    dispatch(fetchRestaurantsAsync());
  }, [dispatch]);

  return (
    <FadeIn>
      <Box p={4} maxW="1200px" mx="auto">
        <Heading mb={4}>Discover Restaurants</Heading>
        <VStack spacing={4} mb={6} align="stretch">
          <Input placeholder="Search by name or cuisine..." />
          <Select placeholder="Filter by rating">
            <option value="4">4+ Stars</option>
            <option value="3">3+ Stars</option>
          </Select>
          <Select placeholder="Veg/Non-Veg">
            <option value="veg">Veg</option>
            <option value="nonveg">Non-Veg</option>
          </Select>
        </VStack>
        <SimpleGrid columns={[1, 2, 3]} spacing={6}>
          {loading
            ? Array.from({ length: 6 }).map((_, i) => <Skeleton key={i} height="250px" />)
            : restaurants?.map((r) => <RestaurantCard key={r.id} restaurant={r} />)}
        </SimpleGrid>
      </Box>
    </FadeIn>
  );
};

export default Home;
