import React from 'react';
import { useSelector } from 'react-redux';
import { Box, IconButton, Badge, useColorModeValue } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';

const CartFab = ({ onOpen }) => {
  const { items } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const location = useLocation();
  const isCheckout = location.pathname.startsWith('/checkout');
  if (isCheckout) return null;
  return (
    <Box position="fixed" bottom={6} right={6} zIndex={20}>
      <IconButton
        icon={<FaShoppingCart />}
        colorScheme="teal"
        size="lg"
        borderRadius="full"
        boxShadow="xl"
        aria-label="Open cart"
        onClick={onOpen || (() => navigate('/checkout'))}
      />
      {items.length > 0 && (
        <Badge position="absolute" top={-2} right={-2} colorScheme="red" borderRadius="full" px={2} fontSize="0.9em">
          {items.length}
        </Badge>
      )}
    </Box>
  );
};

export default CartFab;
