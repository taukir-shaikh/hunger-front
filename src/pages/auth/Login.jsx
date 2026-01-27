import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { login as loginApi } from '../../services/auth.service';
import { setUser, setToken, setLoading, setError } from '../../app/slices/authSlice';
import { setToken as setTokenUtil } from '../../utils/token';
import { useNavigate } from 'react-router-dom';
import { Button, Input, VStack, Heading, useToast, InputGroup, InputRightElement, IconButton } from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  const loading = useSelector((state) => state.auth.loading);

  const onSubmit = async (data) => {
    dispatch(setLoading(true));
    try {
      const res = await loginApi(data);
      dispatch(setUser(res.data.user));
      dispatch(setToken(res.data.token));
      setTokenUtil(res.data.token);
      toast({ title: 'Login successful', status: 'success' });
      navigate('/');
    } catch (err) {
      dispatch(setError(err.response?.data?.message || 'Login failed'));
      toast({ title: 'Login failed', status: 'error' });
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)} spacing={4} w="full" maxW="md" mx="auto" mt={10}>
      <Heading size="lg">Login</Heading>
      <Input placeholder="Email" {...register('email', { required: true })} />
      <InputGroup>
        <Input
          placeholder="Password"
          type={showPassword ? 'text' : 'password'}
          {...register('password', { required: true })}
        />
        <InputRightElement>
          <IconButton
            variant="ghost"
            size="sm"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
            icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
            onClick={() => setShowPassword((v) => !v)}
            tabIndex={-1}
          />
        </InputRightElement>
      </InputGroup>
      <Button type="submit" colorScheme="teal" isLoading={loading} w="full">Login</Button>
    </VStack>
  );
};

export default Login;
