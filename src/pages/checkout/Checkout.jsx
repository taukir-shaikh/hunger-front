import React from 'react';
import FadeIn from '../../components/common/FadeIn';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { placeOrder } from '../../services/order.service';
import { clearCart } from '../../app/slices/cartSlice';
import { useNavigate } from 'react-router-dom';
import { Box, Heading, VStack, Input, Select, Button, Text, useToast } from '@chakra-ui/react';

const Checkout = () => {
  const { items, total, restaurantId } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  const { register, handleSubmit, formState: { isSubmitting } } = useForm();

  const onSubmit = async (data) => {
    try {
      const orderData = {
        restaurant_id: restaurantId,
        items: items.map(({ id, quantity }) => ({ id, quantity })),
        address: data.address,
        payment_method: data.payment_method,
      };
      await placeOrder(orderData);
      dispatch(clearCart());
      toast({ title: 'Order placed successfully!', status: 'success' });
      navigate('/orders');
    } catch (err) {
      toast({ title: 'Order failed', status: 'error' });
    }
  };

  return (
    <FadeIn>
      <Box p={4} maxW="600px" mx="auto">
        <Heading mb={4}>Checkout</Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack spacing={4} align="stretch">
            <Input placeholder="Delivery Address" {...register('address', { required: true })} />
            <Select placeholder="Select payment method" {...register('payment_method', { required: true })}>
              <option value="COD">Cash on Delivery</option>
              <option value="ONLINE">Online (coming soon)</option>
            </Select>
            <Box borderWidth="1px" borderRadius="md" p={3} bg="gray.50">
              <Text fontWeight="bold">Order Summary</Text>
              {items.map((item) => (
                <Text key={item.id}>{item.name} x {item.quantity} - ₹{item.price * item.quantity}</Text>
              ))}
              <Text mt={2}>Total: ₹{total}</Text>
            </Box>
            <Button colorScheme="teal" type="submit" isLoading={isSubmitting} w="full">Place Order</Button>
          </VStack>
        </form>
      </Box>
    </FadeIn>
  );
};

export default Checkout;
