import { Box, Heading, Input, Button, VStack, Text } from '@chakra-ui/react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      // Replace with your backend login endpoint
      const res = await axios.post('http://127.0.0.1:8000/api/auth/login', form);
      console.log(res);
      
      localStorage.setItem('token', res.data.token);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <Box display="flex" alignItems={'center'} justifyContent="center" height="100vh" w={'100vw'} maxW={'100vw'}>
    <Box maxW="md" mx="auto" m={'auto'} mt={10} p={6} borderWidth={1} borderRadius="lg" boxShadow="md">
      <Heading mb={6}>Login</Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
          <Input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
          <Input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required />
          {error && <Text color="red.500">{error}</Text>}
          <Button colorScheme="teal" type="submit">Login</Button>
        </VStack>
      </form>
      <Button mt={4} variant="link" onClick={() => navigate('/register')}>Don't have an account? Register</Button>
    </Box>
    </Box>
  );
};

export default LoginPage;
