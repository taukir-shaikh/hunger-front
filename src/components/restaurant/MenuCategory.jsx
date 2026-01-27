import React from 'react';
import { Box, Heading, VStack } from '@chakra-ui/react';
import MenuItemCard from './MenuItemCard';

const MenuCategory = ({ category, items, onAddToCart }) => (
  <Box mb={8}>
    <Heading size="md" mb={2}>{category}</Heading>
    <VStack spacing={3} align="stretch">
      {items.map((item) => (
        <MenuItemCard key={item.id} item={item} onAddToCart={onAddToCart} />
      ))}
    </VStack>
  </Box>
);

export default MenuCategory;
