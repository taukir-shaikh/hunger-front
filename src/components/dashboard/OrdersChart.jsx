import { Box, Heading } from '@chakra-ui/react';
import { Line } from 'react-chartjs-2';
import './chartjs-setup';

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Orders',
      data: [120, 190, 300, 500, 200, 300],
      fill: false,
      backgroundColor: '#f72585',
      borderColor: '#7209b7',
    },
  ],
};

const OrdersChart = () => (
  <Box bg="white" p={6} borderRadius="lg" boxShadow="md" minW="0" w="100%">
    <Heading size="md" mb={4}>Orders Over Time</Heading>
    <Line data={data} />
  </Box>
);

export default OrdersChart;
