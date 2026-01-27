import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, Button, Box, Text, HStack, VStack, IconButton } from '@chakra-ui/react';
import { removeItem, clearCart } from '../../app/slices/cartSlice';
import { CloseIcon } from '@chakra-ui/icons';

const CartDrawer = ({ isOpen, onClose, onCheckout }) => {
  const { items, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="sm">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader>Cart</DrawerHeader>
        <DrawerBody>
          {items.length === 0 ? (
            <Text>No items in cart.</Text>
          ) : (
            <VStack align="stretch" spacing={4}>
              {items.map((item) => (
                <HStack key={item.id} justify="space-between">
                  <Box>
                    <Text fontWeight="bold">{item.name}</Text>
                    <Text fontSize="sm">Qty: {item.quantity}</Text>
                  </Box>
                  <HStack>
                    <Text>₹{item.price * item.quantity}</Text>
                    <IconButton icon={<CloseIcon />} size="xs" onClick={() => dispatch(removeItem(item.id))} />
                  </HStack>
                </HStack>
              ))}
            </VStack>
          )}
        </DrawerBody>
        <DrawerFooter flexDir="column" alignItems="stretch">
          <HStack justify="space-between" mb={2}>
            <Text fontWeight="bold">Total</Text>
            <Text fontWeight="bold">₹{total}</Text>
          </HStack>
          <Button colorScheme="teal" w="full" mb={2} onClick={onCheckout} isDisabled={items.length === 0}>
            Proceed to Checkout
          </Button>
          <Button variant="outline" w="full" onClick={() => dispatch(clearCart())} isDisabled={items.length === 0}>
            Clear Cart
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default CartDrawer;
