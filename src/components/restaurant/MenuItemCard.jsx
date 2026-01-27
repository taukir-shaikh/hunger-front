
import React from 'react';
import { Box, Text, Button, HStack, Badge, useColorModeValue, IconButton } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

const MenuItemCard = ({ item, onAddToCart }) => {
  const cardBg = useColorModeValue('gray.50', 'gray.700');
  return (
    <Box
      p={4}
      borderWidth="1px"
      borderRadius="xl"
      bg={cardBg}
      boxShadow="sm"
      transition="all 0.2s"
      _hover={{ boxShadow: 'md', transform: 'scale(1.02)' }}
    >
      <HStack justify="space-between" align="center">
        <Box>
          <Text fontWeight="bold" fontSize="md">{item.name}</Text>
          <Text color="gray.600" fontSize="sm">₹{item.price}</Text>
          {item.veg !== undefined && (
            <Badge colorScheme={item.veg ? 'green' : 'red'} fontSize="0.8em">{item.veg ? 'Veg' : 'Non-Veg'}</Badge>
          )}
        </Box>
        <IconButton
          icon={<AddIcon />}
          colorScheme="teal"
          size="md"
          borderRadius="full"
          aria-label="Add to cart"
          onClick={() => onAddToCart(item)}
        />
      </HStack>
    </Box>
  );
};

export default MenuItemCard;
