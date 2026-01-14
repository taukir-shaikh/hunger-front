import { Box, Heading, Button, VStack, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <Box maxW="md" mx="auto" mt={10} p={6} borderWidth={1} borderRadius="lg" boxShadow="md">
      <Heading mb={6}>User Dashboard</Heading>
      <VStack spacing={4} align="stretch">
        <Text>Welcome, {user?.name || 'User'}!</Text>
        <Button colorScheme="teal" onClick={() => navigate('/foods')}>View Foods</Button>
        <Button colorScheme="teal" onClick={() => navigate('/restaurants')}>View Restaurants</Button>
        <Button colorScheme="red" onClick={handleLogout}>Logout</Button>
      </VStack>
    </Box>
  );
};

export default UserDashboard;
