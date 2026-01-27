import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProfile, updateProfile } from '../../services/user.service';
import { logout } from '../../app/slices/authSlice';
import { useForm } from 'react-hook-form';
import { Box, Heading, VStack, Input, Button, useToast, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [profile, setProfile] = useState(user);
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm({ defaultValues: user });
  const toast = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetchProfile();
        setProfile(res.data);
        reset(res.data);
      } catch (err) {
        // fallback to redux user
      }
    };
    fetchData();
  }, [reset]);

  const onSubmit = async (data) => {
    try {
      await updateProfile(data);
      toast({ title: 'Profile updated', status: 'success' });
    } catch (err) {
      toast({ title: 'Update failed', status: 'error' });
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/auth/login');
  };

  return (
    <Box p={4} maxW="500px" mx="auto">
      <Heading mb={4}>Profile</Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={4} align="stretch">
          <Input placeholder="Name" {...register('name', { required: true })} />
          <Input placeholder="Email" {...register('email', { required: true })} disabled />
          {/* Address management can be expanded here */}
          <Button colorScheme="teal" type="submit" isLoading={isSubmitting}>Update Profile</Button>
        </VStack>
      </form>
      <Button mt={6} colorScheme="red" variant="outline" w="full" onClick={handleLogout}>Logout</Button>
    </Box>
  );
};

export default Profile;
