import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { verifyOtp, login as loginApi } from '../../services/auth.service';
import { setUser, setToken, setLoading, setError } from '../../app/slices/authSlice';
import { setToken as setTokenUtil } from '../../utils/token';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button, PinInput, PinInputField, HStack, VStack, Heading, useToast, Input, InputGroup, InputRightElement, IconButton } from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

const VerifyOtp = () => {
  const { register, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const toast = useToast();
  const email = location.state?.email;

  const onSubmit = async (data) => {
    dispatch(setLoading(true));
    try {
      await verifyOtp({ email, otp: data.otp });
      // Auto-login after OTP verification
      const loginRes = await loginApi({ email, password: data.password });
      dispatch(setUser(loginRes.data.user));
      dispatch(setToken(loginRes.data.token));
      setTokenUtil(loginRes.data.token);
      toast({ title: 'OTP verified & logged in', status: 'success' });
      navigate('/');
    } catch (err) {
      dispatch(setError(err.response?.data?.message || 'OTP verification failed'));
      toast({ title: 'OTP verification failed', status: 'error' });
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)} spacing={4} w="full" maxW="md" mx="auto" mt={10}>
      <Heading size="lg">Verify OTP</Heading>
      <HStack>
        <PinInput otp>
          <PinInputField {...register('otp', { required: true, minLength: 6, maxLength: 6 })} />
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </HStack>
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
      <Button type="submit" colorScheme="teal" w="full">Verify & Login</Button>
    </VStack>
  );
};

export default VerifyOtp;
