import React from 'react';
import { Box, Flex, Heading, Spacer, Button, IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue('white', 'gray.900');
  const { isAuthenticated, role } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  return (
    <Box as="header" bg={bg} boxShadow="sm" px={4} py={2} position="sticky" top={0} zIndex={10}>
      <Flex align="center">
        <Heading size="md" as={Link} to="/" color="teal.500">Hunger</Heading>
        <Spacer />
        <Flex gap={2} align="center">
          <Button as={Link} to="/restaurants" variant="ghost">Restaurants</Button>
          {isAuthenticated && <Button as={Link} to="/orders" variant="ghost">Orders</Button>}
          {isAuthenticated && <Button as={Link} to="/profile" variant="ghost">Profile</Button>}
          {role === 'RESTAURANT' && <Button as={Link} to="/restaurant/dashboard" variant="ghost">Dashboard</Button>}
          {role === 'ADMIN' && <Button as={Link} to="/admin/dashboard" variant="ghost">Admin</Button>}
          <IconButton icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />} onClick={toggleColorMode} aria-label="Toggle color mode" />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
