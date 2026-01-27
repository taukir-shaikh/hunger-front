import React, { useEffect, useState } from 'react';
import { Box, Heading, Tabs, TabList, TabPanels, Tab, TabPanel, VStack, Text, Button, Table, Thead, Tbody, Tr, Th, Td, useToast } from '@chakra-ui/react';
// import API services for admin actions

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [orders, setOrders] = useState([]);
  const toast = useToast();

  useEffect(() => {
    // TODO: Fetch users, restaurants, and orders (API integration needed)
  }, []);

  const handleApproveRestaurant = (id) => {
    // TODO: API call to approve restaurant
    toast({ title: `Restaurant #${id} approved`, status: 'success' });
  };

  const handleBlockUser = (id) => {
    // TODO: API call to block user
    toast({ title: `User #${id} blocked`, status: 'info' });
  };

  return (
    <Box p={4} maxW="1200px" mx="auto">
      <Heading mb={4}>Admin Dashboard</Heading>
      <Tabs variant="enclosed">
        <TabList>
          <Tab>Users</Tab>
          <Tab>Restaurants</Tab>
          <Tab>Orders</Tab>
          <Tab>Analytics</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>ID</Th><Th>Name</Th><Th>Email</Th><Th>Role</Th><Th>Status</Th><Th>Actions</Th>
                </Tr>
              </Thead>
              <Tbody>
                {users.length === 0 ? <Tr><Td colSpan={6}>No users found.</Td></Tr> : users.map((user) => (
                  <Tr key={user.id}>
                    <Td>{user.id}</Td><Td>{user.name}</Td><Td>{user.email}</Td><Td>{user.role}</Td><Td>{user.status}</Td>
                    <Td><Button size="sm" colorScheme="red" onClick={() => handleBlockUser(user.id)}>Block</Button></Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TabPanel>
          <TabPanel>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>ID</Th><Th>Name</Th><Th>Status</Th><Th>Actions</Th>
                </Tr>
              </Thead>
              <Tbody>
                {restaurants.length === 0 ? <Tr><Td colSpan={4}>No restaurants found.</Td></Tr> : restaurants.map((r) => (
                  <Tr key={r.id}>
                    <Td>{r.id}</Td><Td>{r.name}</Td><Td>{r.status}</Td>
                    <Td><Button size="sm" colorScheme="teal" onClick={() => handleApproveRestaurant(r.id)}>Approve</Button></Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TabPanel>
          <TabPanel>
            <VStack align="stretch" spacing={4}>
              {orders.length === 0 ? <Text>No orders found.</Text> : orders.map((order) => (
                <Box key={order.id} borderWidth="1px" borderRadius="md" p={3} bg="gray.50">
                  <Text fontWeight="bold">Order #{order.id} - {order.status}</Text>
                  <Text>User: {order.user?.name}</Text>
                  <Text>Restaurant: {order.restaurant?.name}</Text>
                  <Text>Total: ₹{order.total}</Text>
                </Box>
              ))}
            </VStack>
          </TabPanel>
          <TabPanel>
            <Box>
              <Text fontWeight="bold">Analytics (coming soon)</Text>
              {/* Add charts and analytics UI here */}
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default AdminDashboard;
