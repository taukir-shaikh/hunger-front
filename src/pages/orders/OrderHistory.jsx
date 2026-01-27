import React, { useEffect, useState } from 'react';
import { fetchOrders } from '../../services/order.service';
import { Box, Heading, Select, VStack, Text, Button, Skeleton } from '@chakra-ui/react';
import { ORDER_STATUS } from '../../utils/constants';
import { useNavigate } from 'react-router-dom';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAll = async () => {
      setLoading(true);
      try {
        const res = await fetchOrders();
        setOrders(res.data);
      } catch (err) {
        setOrders([]);
      } finally {
        setLoading(false);
      }
    };
    fetchAll();
  }, []);

  const filtered = status ? orders.filter((o) => o.status === status) : orders;

  return (
    <Box p={4} maxW="800px" mx="auto">
      <Heading mb={4}>Order History</Heading>
      <Select placeholder="Filter by status" mb={4} value={status} onChange={e => setStatus(e.target.value)}>
        {ORDER_STATUS.map((s) => (
          <option key={s} value={s}>{s.replace(/_/g, ' ')}</option>
        ))}
      </Select>
      <VStack align="stretch" spacing={4}>
        {loading ? (
          Array.from({ length: 4 }).map((_, i) => <Skeleton key={i} height="80px" />)
        ) : filtered.length === 0 ? (
          <Text>No orders found.</Text>
        ) : (
          filtered.map((order) => (
            <Box
              key={order.id}
              borderWidth="1px"
              borderRadius="xl"
              p={4}
              bg={useColorModeValue('gray.50', 'gray.700')}
              boxShadow="sm"
              transition="all 0.2s"
              _hover={{ boxShadow: 'md', transform: 'scale(1.01)' }}
            >
              <HStack justify="space-between" align="center" mb={2}>
                <Text fontWeight="bold" fontSize="lg">Order #{order.id}</Text>
                <Badge colorScheme={order.status === 'DELIVERED' ? 'green' : order.status === 'CANCELLED' ? 'red' : 'yellow'}>
                  {order.status.replace(/_/g, ' ')}
                </Badge>
              </HStack>
              <Text color="gray.600">Restaurant: {order.restaurant?.name}</Text>
              <Text color="gray.600">Total: ₹{order.total}</Text>
              <HStack mt={3} gap={2}>
                <Button size="sm" colorScheme="teal" onClick={() => navigate(`/orders/${order.id}`)}>Track Order</Button>
                <Button size="sm" variant="outline">Reorder</Button>
              </HStack>
            </Box>
          ))
        )}
      </VStack>
    </Box>
  );
};

export default OrderHistory;
