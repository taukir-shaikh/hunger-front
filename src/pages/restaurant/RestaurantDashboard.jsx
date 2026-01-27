import React, { useEffect, useState } from 'react';
import { Box, Heading, Tabs, TabList, TabPanels, Tab, TabPanel, VStack, Button, Text, HStack, Select, Input, useToast } from '@chakra-ui/react';
// import API services for restaurant orders and menu

const RestaurantDashboard = () => {
  // State for orders, menu, and profile
  const [orders, setOrders] = useState([]);
  const [menu, setMenu] = useState([]);
  const [profile, setProfile] = useState({});
  const toast = useToast();

  // Fetch orders, menu, and profile on mount (API integration needed)
  useEffect(() => {
    // TODO: Fetch orders, menu, and profile for the restaurant
  }, []);

  // Handlers for updating order status, adding/editing/deleting menu items
  const handleStatusUpdate = (orderId, status) => {
    // TODO: API call to update order status
    toast({ title: `Order #${orderId} status updated to ${status}`, status: 'success' });
  };

  const handleAddMenuItem = (item) => {
    // TODO: API call to add menu item
    toast({ title: 'Menu item added', status: 'success' });
  };

  const handleEditMenuItem = (item) => {
    // TODO: API call to edit menu item
    toast({ title: 'Menu item updated', status: 'success' });
  };

  const handleDeleteMenuItem = (itemId) => {
    // TODO: API call to delete menu item
    toast({ title: 'Menu item deleted', status: 'info' });
  };

  return (
    <Box p={4} maxW="1000px" mx="auto">
      <Heading mb={4}>Restaurant Dashboard</Heading>
      <Tabs variant="enclosed">
        <TabList>
          <Tab>Orders</Tab>
          <Tab>Menu</Tab>
          <Tab>Profile</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <VStack align="stretch" spacing={4}>
              {orders.length === 0 ? <Text>No incoming orders.</Text> : orders.map((order) => (
                <Box key={order.id} borderWidth="1px" borderRadius="md" p={3} bg="gray.50">
                  <Text fontWeight="bold">Order #{order.id}</Text>
                  <Text>Status: {order.status}</Text>
                  <Select placeholder="Update status" onChange={e => handleStatusUpdate(order.id, e.target.value)}>
                    <option value="CONFIRMED">Confirm</option>
                    <option value="PREPARING">Preparing</option>
                    <option value="OUT_FOR_DELIVERY">Out for Delivery</option>
                    <option value="DELIVERED">Delivered</option>
                    <option value="CANCELLED">Cancelled</option>
                  </Select>
                </Box>
              ))}
            </VStack>
          </TabPanel>
          <TabPanel>
            <VStack align="stretch" spacing={4}>
              <Box borderWidth="1px" borderRadius="md" p={3} bg="gray.50">
                <Text fontWeight="bold">Add Menu Item</Text>
                <HStack as="form" spacing={2} onSubmit={e => { e.preventDefault(); handleAddMenuItem({}); }}>
                  <Input placeholder="Name" />
                  <Input placeholder="Price" type="number" />
                  <Select placeholder="Type">
                    <option value="veg">Veg</option>
                    <option value="nonveg">Non-Veg</option>
                  </Select>
                  <Button type="submit" colorScheme="teal">Add</Button>
                </HStack>
              </Box>
              {menu.length === 0 ? <Text>No menu items.</Text> : menu.map((item) => (
                <HStack key={item.id} borderWidth="1px" borderRadius="md" p={3} bg="gray.50" justify="space-between">
                  <Text>{item.name} - ₹{item.price}</Text>
                  <HStack>
                    <Button size="sm" onClick={() => handleEditMenuItem(item)}>Edit</Button>
                    <Button size="sm" colorScheme="red" onClick={() => handleDeleteMenuItem(item.id)}>Delete</Button>
                  </HStack>
                </HStack>
              ))}
            </VStack>
          </TabPanel>
          <TabPanel>
            <Box borderWidth="1px" borderRadius="md" p={3} bg="gray.50">
              <Text fontWeight="bold">Restaurant Profile</Text>
              {/* Profile management form can go here */}
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default RestaurantDashboard;
