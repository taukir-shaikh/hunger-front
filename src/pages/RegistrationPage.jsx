import { Box, Heading, Input, Button, VStack, Text } from '@chakra-ui/react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegistrationPage = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '', user_level_code: 'USER' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      // Replace with your backend registration endpoint
      await axios.post('http://localhost:8000/api/register', form);
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <Box maxW="md" mx="auto" mt={10} p={6} borderWidth={1} borderRadius="lg" boxShadow="md">
      <Heading mb={6}>Register</Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
          <Input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
          <Input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
          <Input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required />
          {/* Hidden or select for user_level_code if needed */}
          {error && <Text color="red.500">{error}</Text>}
          <Button colorScheme="teal" type="submit">Register</Button>
        </VStack>
      </form>
      <Button mt={4} variant="link" onClick={() => navigate('/login')}>Already have an account? Login</Button>
    </Box>
  );
};

export default RegistrationPage;
