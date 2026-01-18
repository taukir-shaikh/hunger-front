import { Box, Heading, SimpleGrid, Image, Text, Badge, Flex } from '@chakra-ui/react';

const restaurants = [
  {
    name: "Roxanne'S Bar & All Day Diner",
    img: '/assets/rest1.jpg',
    cuisines: 'American • Asian',
    location: 'Peninsula Redpine, Marol, Mumbai',
    price: '₹1500 for two',
    distance: '5.6 km',
    rating: 4.6,
    offers: ['Flat 10% off on pre-booking', 'Up to 10% off with bank offers'],
    tags: ['Table booking'],
  },
  {
    name: 'Food Quarter',
    img: '/assets/rest2.jpg',
    cuisines: 'Fast Food • Beverages',
    location: 'Kurla West, Mumbai',
    price: '₹700 for two',
    distance: '0.8 km',
    rating: 4.0,
    offers: ['Flat 10% off on walk-in', 'Up to 10% off with bank offers'],
    tags: ['Table booking'],
  },
  {
    name: "Delhi Momo's",
    img: '/assets/rest3.jpg',
    cuisines: 'Fast Food • Momos',
    location: 'Vile Parle East, Mumbai',
    price: '₹300 for two',
    distance: '1.1 km',
    rating: 5.0,
    offers: ['Flat 10% off on walk-in', 'Up to 10% off with bank offers'],
    tags: ['Table booking'],
  },
  {
    name: 'Kojak',
    img: '/assets/rest4.jpg',
    cuisines: 'Continental • Italian',
    location: 'Kings International Hotel, Juhu, Mumbai',
    price: '₹2000 for two',
    distance: '0.98 km',
    rating: 4.8,
    offers: ['Flat 10% off on walk-in', 'Up to 10% off with bank offers'],
    tags: ['Table booking', 'Free Mocktail'],
  },
];

const RestaurantShowcase = () => (
  <Box bg="white" py={10}>
    <Heading size="lg" mb={6} textAlign="center">Discover best restaurants on Dineout</Heading>
    <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} px={{ base: 2, md: 8 }}>
      {restaurants.map((rest, idx) => (
        <Box key={idx} bg="white" borderRadius="2xl" boxShadow="lg" overflow="hidden" position="relative">
          <Image src={rest.img} alt={rest.name} h="140px" w="100%" objectFit="cover" />
          <Box p={4}>
            <Text fontWeight="bold" fontSize="lg" color="gray.800">{rest.name}</Text>
            <Text color="gray.500" fontSize="sm">{rest.cuisines}</Text>
            <Text color="gray.500" fontSize="sm">{rest.location}</Text>
            <Flex mt={2} align="center" gap={2} flexWrap="wrap">
              <Badge colorScheme="green">{rest.rating}★</Badge>
              <Text color="gray.600" fontSize="sm">{rest.price}</Text>
              <Text color="gray.600" fontSize="sm">{rest.distance}</Text>
            </Flex>
            <Flex mt={2} gap={2} flexWrap="wrap">
              {rest.tags.map((tag, i) => (
                <Badge key={i} colorScheme="gray" variant="subtle">{tag}</Badge>
              ))}
            </Flex>
            <Flex mt={2} gap={2} flexWrap="wrap">
              {rest.offers.map((offer, i) => (
                <Badge key={i} colorScheme="green" variant="solid">{offer}</Badge>
              ))}
            </Flex>
          </Box>
        </Box>
      ))}
    </SimpleGrid>
  </Box>
);

export default RestaurantShowcase;
