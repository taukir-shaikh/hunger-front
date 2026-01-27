import { Box, Image, Text, Badge, Flex, Button, useColorModeValue } from '@chakra-ui/react';

const RestaurantCard = ({ restaurant, onClick }) => {
  const cardBg = useColorModeValue('white', 'gray.800');
  // Array of fallback images
  const fallbackImages = [
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1504674900247-ec6b0b1b7982?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1504674900247-ec6b0b1b7982?auto=format&fit=crop&w=600&q=80',
  ];
  // Pick a random fallback image based on restaurant id or name
  const fallbackImage = fallbackImages[
    restaurant.id
      ? restaurant.id % fallbackImages.length
      : (restaurant.name ? restaurant.name.length : 0) % fallbackImages.length
  ];
  const imageSrc = restaurant.image || fallbackImage;
  return (
    <Box
      borderWidth="1px"
      borderRadius="2xl"
      overflow="hidden"
      boxShadow="sm"
      cursor="pointer"
      onClick={onClick}
      bg={cardBg}
      transition="all 0.2s"
      _hover={{ boxShadow: '2xl', transform: 'translateY(-4px) scale(1.03)' }}
      minW={['100%', '260px']}
      maxW="340px"
      mx="auto"
    >
      <Image
        src={imageSrc}
        alt={restaurant.name}
        h={["140px", "180px"]}
        w="full"
        objectFit="cover"
        borderTopRadius="2xl"
        loading="lazy"
      />
      <Box p={4}>
        <Flex justify="space-between" align="center" mb={1}>
          <Text fontWeight="bold" fontSize="lg" noOfLines={1}>{restaurant.name}</Text>
          <Badge colorScheme="green" fontSize="0.9em">★ {restaurant.rating || '--'}</Badge>
        </Flex>
        <Text color="gray.500" fontSize="sm" noOfLines={1}>{restaurant.cuisine || 'Various Cuisines'}</Text>
        <Flex mt={2} justify="space-between" align="center">
          <Text color="gray.600" fontSize="sm">{restaurant.delivery_time || '--'} mins</Text>
          {restaurant.veg_only && <Badge colorScheme="green">Veg Only</Badge>}
        </Flex>
      </Box>
    </Box>
  );
};

export default RestaurantCard;
