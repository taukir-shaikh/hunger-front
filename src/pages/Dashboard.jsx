import MainLayout from '../layouts/MainLayout';
import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import OrdersChart from '../components/dashboard/OrdersChart';
import RevenueChart from '../components/dashboard/RevenueChart';

const Dashboard = () => (
  <MainLayout>
    <Box py={8} px={{ base: 2, md: 8 }} maxW={{ base: '100%', xl: '1400px' }} mx="auto">
      <Heading mb={6} color="brand.500">Dashboard</Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} minChildWidth="350px">
        <OrdersChart />
        <RevenueChart />
      </SimpleGrid>
    </Box>
  </MainLayout>
);

export default Dashboard;
