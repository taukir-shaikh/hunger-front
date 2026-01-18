import { Box, Heading, Flex, Text, IconButton, Image, useBreakpointValue } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { useRef, useState } from 'react';

const categories = [
  { name: 'Burger', img: '/assets/burger.png' },
  { name: 'Pizza', img: '/assets/pizza.png' },
  { name: 'Cake', img: '/assets/cake.png' },
  { name: 'Rolls', img: '/assets/rolls.png' },
  { name: 'Biryani', img: '/assets/biryani.png' },
  { name: 'Momo', img: '/assets/momo.png' },
  { name: 'Tea', img: '/assets/tea.png' },
  { name: 'Salad', img: '/assets/salad.png' },
  { name: 'Pasta', img: '/assets/pasta.png' },
  { name: 'Dosa', img: '/assets/dosa.png' },
  { name: 'Vada', img: '/assets/vada.png' },
  { name: 'Coffee', img: '/assets/coffee.png' },
  { name: 'Khichdi', img: '/assets/khichdi.png' },
  { name: 'Juice', img: '/assets/juice.png' },
  { name: 'Pav', img: '/assets/pav.png' },
];

const FoodCategorySlider = () => {
  const scrollRef = useRef();
  const [scroll, setScroll] = useState(0);
  const scrollAmount = useBreakpointValue({ base: 200, md: 300 });

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    setScroll(scrollRef.current.scrollLeft - scrollAmount);
  };
  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    setScroll(scrollRef.current.scrollLeft + scrollAmount);
  };

  return (
    <Box bg="white" py={10}>
      <Heading size="lg" mb={6} textAlign="center">Order our best food options</Heading>
      <Flex align="center" justify="center" position="relative">
        <IconButton
          icon={<ChevronLeftIcon boxSize={6} />}
          aria-label="Scroll Left"
          onClick={scrollLeft}
          position="absolute"
          left={0}
          zIndex={2}
          bg="white"
          boxShadow="md"
          display={{ base: 'none', md: 'flex' }}
        />
        <Flex
          ref={scrollRef}
          overflowX="auto"
          gap={8}
          px={16}
          py={2}
          sx={{
            '::-webkit-scrollbar': { display: 'none' },
            scrollBehavior: 'smooth',
          }}
        >
          {categories.map((cat, idx) => (
            <Flex key={idx} direction="column" align="center" minW="120px">
              <Image src={cat.img} alt={cat.name} boxSize="80px" mb={2} />
              <Text fontWeight="medium" fontSize="lg">{cat.name}</Text>
            </Flex>
          ))}
        </Flex>
        <IconButton
          icon={<ChevronRightIcon boxSize={6} />}
          aria-label="Scroll Right"
          onClick={scrollRight}
          position="absolute"
          right={0}
          zIndex={2}
          bg="white"
          boxShadow="md"
          display={{ base: 'none', md: 'flex' }}
        />
      </Flex>
    </Box>
  );
};

export default FoodCategorySlider;
