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
} from '@chakra-ui/react';
import { SearchIcon, ChevronRightIcon } from '@chakra-ui/icons';

const cardData = [
  {
    title: 'FOOD DELIVERY',
    subtitle: 'FROM RESTAURANTS',
    offer: 'UPTO 60% OFF',
    img: '/assets/food1.jpg',
  },
  {
    title: 'INSTANTMART',
    subtitle: 'INSTANT GROCERY',
    offer: 'UPTO 60% OFF',
    img: '/assets/food2.jpg',
  },
  {
    title: 'DINEOUT',
    subtitle: 'EAT OUT & SAVE MORE',
    offer: 'UPTO 50% OFF',
    img: '/assets/food3.jpg',
  },
];

const HeroSwiggyReplica = () => {
  const cardWidth = useBreakpointValue({ base: '100%', md: '320px' });
  return (
    <Box bg="#fc8019" minH="100vh" pb={16}>
      <Flex justify="space-between" align="center" px={{ base: 4, md: 16 }} py={6}>
        <Flex align="center">
          <Box bg="#fc8019" borderRadius="md" p={1} mr={2} boxShadow="md" bgColor="white">
            <Text color="#fc8019" fontSize="2xl" fontWeight="bold">H</Text>
          </Box>
          <Heading color="white" size="lg" fontWeight="bold">Hunger</Heading>
        </Flex>
        <Flex align="center" gap={6} color="white" fontWeight="medium" fontSize="md">
          <Text cursor="pointer">Hunger Corporate</Text>
          <Text cursor="pointer">Partner with us</Text>
          <Button variant="outline" colorScheme="whiteAlpha" borderColor="white" color="white" _hover={{ bg: 'whiteAlpha.300' }}>Get the App</Button>
          <Button bg="black" color="white" _hover={{ bg: 'gray.700' }}>Sign in</Button>
        </Flex>
      </Flex>
      <Flex direction="column" align="center" mt={10}>
        <Heading color="white" size="2xl" textAlign="center" fontWeight="extrabold" mb={4}>
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
              bg="white"
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
                <Heading size="lg" color="gray.800" mb={1}>{card.title}</Heading>
                <Text color="gray.500" fontWeight="medium" mb={2}>{card.subtitle}</Text>
                <Text color="#fc8019" fontWeight="bold" mb={4}>{card.offer}</Text>
              </Box>
              <Image src={card.img} alt={card.title} borderRadius="xl" boxSize="100px" mb={4} alignSelf="center" />
              <Button rightIcon={<ChevronRightIcon />} colorScheme="orange" variant="ghost" position="absolute" bottom={4} right={4}>
                <span style={{ fontWeight: 700 }}> </span>
              </Button>
            </Box>
          ))}
        </SimpleGrid>
      </Flex>
    </Box>
  );
};

export default HeroSwiggyReplica;
