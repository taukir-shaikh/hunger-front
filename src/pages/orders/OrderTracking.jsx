import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchOrderById } from '../../services/order.service';
import { Box, Heading, Text, VStack, Skeleton, Stepper, Step, StepIndicator, StepStatus, StepTitle, StepDescription, StepSeparator } from '@chakra-ui/react';
import { ORDER_STATUS } from '../../utils/constants';

const OrderTracking = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrder = async () => {
      setLoading(true);
      try {
        const res = await fetchOrderById(id);
        setOrder(res.data);
      } catch (err) {
        setOrder(null);
      } finally {
        setLoading(false);
      }
    };
    fetchOrder();
  }, [id]);

  if (loading || !order) return <Skeleton height="400px" />;

  const currentStep = ORDER_STATUS.indexOf(order.status);

  return (
    <Box p={4} maxW="600px" mx="auto">
      <Heading mb={4}>Order Tracking</Heading>
      <Stepper index={currentStep} orientation="vertical" height="300px" gap="0">
        {ORDER_STATUS.map((status, idx) => (
          <Step key={status}>
            <StepIndicator>
              <StepStatus complete={<Box bg="green.400" w={3} h={3} borderRadius="full" />} incomplete={<Box bg="gray.300" w={3} h={3} borderRadius="full" />} active={<Box bg="teal.400" w={3} h={3} borderRadius="full" />} />
            </StepIndicator>
            <Box flexShrink={0}>
              <StepTitle>{status.replace(/_/g, ' ')}</StepTitle>
              <StepDescription>{order.updated_at}</StepDescription>
            </Box>
            <StepSeparator />
          </Step>
        ))}
      </Stepper>
      <Box mt={6}>
        <Text fontWeight="bold">Order ID: {order.id}</Text>
        <Text>Restaurant: {order.restaurant?.name}</Text>
        <Text>Status: {order.status}</Text>
        <Text>Items:</Text>
        <VStack align="start">
          {order.items.map((item) => (
            <Text key={item.id}>{item.name} x {item.quantity}</Text>
          ))}
        </VStack>
      </Box>
    </Box>
  );
};

export default OrderTracking;
