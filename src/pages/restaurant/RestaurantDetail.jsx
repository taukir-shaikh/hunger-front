import React, { useEffect } from 'react';
import FadeIn from '../../components/common/FadeIn';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentRestaurant, setLoading, setError } from '../../app/slices/restaurantSlice';
import { fetchRestaurantById } from '../../services/restaurant.service';
import { Box, Heading, Text, Skeleton, Tabs, TabList, TabPanels, Tab, TabPanel, useToast } from '@chakra-ui/react';
import MenuCategory from '../../components/restaurant/MenuCategory';
import { useDispatch as useReduxDispatch } from 'react-redux';
import { addItem } from '../../app/slices/cartSlice';

const RestaurantDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const reduxDispatch = useReduxDispatch();
  const toast = useToast();
  const { currentRestaurant, loading } = useSelector((state) => state.restaurant);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(setLoading(true));
      try {
        const res = await fetchRestaurantById(id);
        dispatch(setCurrentRestaurant(res.data));
      } catch (err) {
        dispatch(setError('Failed to load restaurant'));
      } finally {
        dispatch(setLoading(false));
      }
    };
    fetchData();
  }, [id, dispatch]);


  if (loading || !currentRestaurant) return <Skeleton height="400px" />;

  const handleAddToCart = (item) => {
    reduxDispatch(addItem({ ...item, restaurantId: currentRestaurant.id }));
    toast({ title: `${item.name} added to cart`, status: 'success', duration: 1500 });
  };

  // Assume currentRestaurant.menu is an array of { category: string, items: array }
  return (
    <FadeIn>
      <Box p={4} maxW="900px" mx="auto">
        <Heading>{currentRestaurant.name}</Heading>
        <Text color="gray.500">{currentRestaurant.cuisine}</Text>
        <Tabs mt={6} variant="enclosed">
          <TabList>
            <Tab>Menu</Tab>
            <Tab>Reviews</Tab>
            <Tab>Info</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              {Array.isArray(currentRestaurant.menu) && currentRestaurant.menu.length > 0 ? (
                currentRestaurant.menu.map((cat) => (
                  <MenuCategory
                    key={cat.category}
                    category={cat.category}
                    items={cat.items}
                    onAddToCart={handleAddToCart}
                  />
                ))
              ) : (
                <Text>No menu available.</Text>
              )}
            </TabPanel>
            <TabPanel>
              <Text>Reviews (coming soon)</Text>
            </TabPanel>
            <TabPanel>
              <Text>Restaurant info and details</Text>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </FadeIn>
  );
};

export default RestaurantDetail;
