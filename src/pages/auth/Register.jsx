import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { register as registerApi } from '../../services/auth.service';
import { setLoading, setError } from '../../app/slices/authSlice';
import { useNavigate } from 'react-router-dom';
import { Button, Input, VStack, Heading, Select, useToast, InputGroup, InputRightElement, IconButton } from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

const Register = () => {
  const { register, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();

  const onSubmit = async (data) => {
    dispatch(setLoading(true));
    try {
      await registerApi(data);
      toast({ title: 'Registration successful. Check your email for OTP.', status: 'success' });
      navigate('/auth/verify-otp', { state: { email: data.email } });
    } catch (err) {
      dispatch(setError(err.response?.data?.message || 'Registration failed'));
      toast({ title: 'Registration failed', status: 'error' });
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)} spacing={4} w="full" maxW="md" mx="auto" mt={10}>
      <Heading size="lg">Register</Heading>
      <Input placeholder="Name" {...register('name', { required: true })} />
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
      <Select placeholder="Select role" {...register('role', { required: true })}>
        <option value="USER">User</option>
        <option value="RESTAURANT">Restaurant</option>
      </Select>
      <Button type="submit" colorScheme="teal" w="full">Register</Button>
    </VStack>
  );
};

export default Register;
