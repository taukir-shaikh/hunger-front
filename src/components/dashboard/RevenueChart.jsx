import { Box, Heading } from '@chakra-ui/react';
import { Bar } from 'react-chartjs-2';
import './chartjs-setup';

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Revenue',
      data: [500, 700, 800, 1200, 900, 1100],
      backgroundColor: '#f9c74f',
      borderColor: '#f9844a',
      borderWidth: 1,
    },
  ],
};

const RevenueChart = () => (
  <Box bg="white" p={6} borderRadius="lg" boxShadow="md" minW="0" w="100%">
    <Heading size="md" mb={4}>Revenue Over Time</Heading>
    <Bar data={data} />
  </Box>
);

export default RevenueChart;
