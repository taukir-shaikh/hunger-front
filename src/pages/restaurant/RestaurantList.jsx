import React, { useEffect } from 'react';
import FadeIn from '../../components/common/FadeIn';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRestaurantsAsync } from '../../app/slices/restaurantSlice';
import RestaurantCard from '../../components/common/RestaurantCard';
import { SimpleGrid, Box, Skeleton, Heading } from '@chakra-ui/react';

const RestaurantList = () => {
  const dispatch = useDispatch();
  const { restaurants, loading } = useSelector((state) => state.restaurant);

  useEffect(() => {
    dispatch(fetchRestaurantsAsync());
  }, [dispatch]);

  return (
    <FadeIn>
      <Box p={4} maxW="1200px" mx="auto">
        <Heading mb={4}>All Restaurants</Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing={6}>
          {loading
            ? Array.from({ length: 6 }).map((_, i) => <Skeleton key={i} height="250px" />)
            : restaurants.map((r) => <RestaurantCard key={r.id} restaurant={r} />)}
        </SimpleGrid>
      </Box>
    </FadeIn>
  );
};

export default RestaurantList;
