import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  IconButton,
  SimpleGrid,
  Image,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';
import { SearchIcon, ChevronRightIcon, SunIcon, MoonIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useColorMode } from '@chakra-ui/react';
import { getToken } from '../../utils/token';

const cardData = [
  {
    title: 'FOOD DELIVERY',
    subtitle: 'FROM RESTAURANTS',
    offer: 'UPTO 60% OFF',
    img: '/assets/food1.jpg',
    link: '/restaurants',
    button: 'Order Now',
  },
  {
    title: 'INSTANTMART',
    subtitle: 'INSTANT GROCERY',
    offer: 'UPTO 60% OFF',
    img: '/assets/food2.jpg',
    link: '/checkout',
    button: 'Shop Groceries',
  },
  {
    title: 'DINEOUT',
    subtitle: 'EAT OUT & SAVE MORE',
    offer: 'UPTO 50% OFF',
    img: '/assets/food3.jpg',
    link: '/orders',
    button: 'View Orders',
  },
];

const HeroSwiggyReplica = () => {
  const cardWidth = useBreakpointValue({ base: '100%', md: '320px' });
  const heroBg = useColorModeValue('#fc8019', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  const cardText = useColorModeValue('gray.800', 'white');
  const cardSubText = useColorModeValue('gray.500', 'gray.300');
  const cardOffer = useColorModeValue('#fc8019', 'orange.300');
  const headingColor = useColorModeValue('white', 'orange.200');
  const headerTextColor = useColorModeValue('white', 'orange.200');
  const [isSignedIn, setIsSignedIn] = useState(() => !!getToken());
  useEffect(() => {
    // Listen for login/logout events (optional, for better UX)
    const onStorage = () => setIsSignedIn(!!getToken());
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box bg={heroBg} minH="100vh" pb={16}>
      <Flex justify="space-between" align="center" px={{ base: 4, md: 16 }} py={6}>
        <Flex align="center">
          <Box bg={heroBg} borderRadius="md" p={1} mr={2} boxShadow="md" bgColor={useColorModeValue('white', 'gray.800')}>
            <Text color={cardOffer} fontSize="2xl" fontWeight="bold">H</Text>
          </Box>
          <Heading color={headingColor} size="lg" fontWeight="bold">Hunger</Heading>
        </Flex>
        <Flex align="center" gap={6} color={headerTextColor} fontWeight="medium" fontSize="md">
          <Button as={RouterLink} to="/restaurants" variant="link" color="white" _hover={{ textDecoration: 'underline' }}>Restaurants</Button>
          <Button as={RouterLink} to="/checkout" variant="link" color="white" _hover={{ textDecoration: 'underline' }}>Checkout</Button>
          <Button as={RouterLink} to="/orders" variant="link" color="white" _hover={{ textDecoration: 'underline' }}>Orders</Button>
          <Button as={RouterLink} to="/profile" variant="outline" colorScheme="whiteAlpha" borderColor="white" color="white" _hover={{ bg: 'whiteAlpha.300' }}>Profile</Button>
          <IconButton
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
            aria-label="Toggle color mode"
            variant="ghost"
            color="white"
            _hover={{ bg: 'whiteAlpha.300' }}
          />
          {!isSignedIn && (
            <Button as={RouterLink} to="/auth/login" bg="black" color="white" _hover={{ bg: 'gray.700' }}>Sign in</Button>
          )}
        </Flex>
      </Flex>
      <Flex direction="column" align="center" mt={10}>
        <Heading color={headingColor} size="2xl" textAlign="center" fontWeight="extrabold" mb={4}>
          Order food & groceries. Discover<br />best restaurants. Hunger it!
        </Heading>
        <Flex gap={4} mt={6} mb={10} w={{ base: '90%', md: 'auto' }}>
          <InputGroup size="lg" maxW="320px">
            <InputLeftElement pointerEvents="none" color="gray.400" fontSize="1.2em" children={<span>📍</span>} />
            <Input placeholder="Enter your delivery location" borderRadius="lg" />
          </InputGroup>
          <InputGroup size="lg" maxW="320px">
            <Input placeholder="Search for restaurant, item or more" borderRadius="lg" />
            <InputRightElement>
              <IconButton aria-label="Search" icon={<SearchIcon />} size="md" borderRadius="lg" />
            </InputRightElement>
          </InputGroup>
        </Flex>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mt={8} w={{ base: '100%', md: 'auto' }}>
          {cardData.map((card, idx) => (
            <Box
              key={idx}
              bg={cardBg}
              borderRadius="2xl"
              boxShadow="lg"
              p={6}
              w={cardWidth}
              minH="320px"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              alignItems="flex-start"
              position="relative"
            >
              <Box>
                <Heading size="lg" color={cardText} mb={1}>{card.title}</Heading>
                <Text color={cardSubText} fontWeight="medium" mb={2}>{card.subtitle}</Text>
                <Text color={cardOffer} fontWeight="bold" mb={4}>{card.offer}</Text>
              </Box>
              <Image src={card.img} alt={card.title} borderRadius="xl" boxSize="100px" mb={4} alignSelf="center" />
              <Button
                as={RouterLink}
                to={card.link}
                rightIcon={<ChevronRightIcon />}
                colorScheme="orange"
                variant="solid"
                position="absolute"
                bottom={4}
                right={4}
                fontWeight={700}
              >
                {card.button}
              </Button>
            </Box>
          ))}
        </SimpleGrid>
      </Flex>
    </Box>
  );
};

export default HeroSwiggyReplica;
