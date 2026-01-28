import { Box, Heading, Flex, IconButton, Image, useBreakpointValue, useColorModeValue } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { useRef } from 'react';

const groceries = [
  { img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80', name: 'Vegetables' },
  { img: 'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80', name: 'Fruits' },
  { img: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80', name: 'Dairy' },
  { img: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80', name: 'Bakery' },
  { img: 'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=400&q=80', name: 'Snacks' },
  { img: 'https://images.unsplash.com/photo-1506089676908-3592f7389d4d?auto=format&fit=crop&w=400&q=80', name: 'Beverages' },
  { img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80', name: 'Meat' },
  { img: 'https://images.unsplash.com/photo-1505250469679-203ad9ced0cb?auto=format&fit=crop&w=400&q=80', name: 'Seafood' },
];

const GrocerySlider = () => {
  const scrollRef = useRef();
  const scrollAmount = useBreakpointValue({ base: 200, md: 300 });

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  };
  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const bg = useColorModeValue('white', 'gray.900');
  const headingColor = useColorModeValue('gray.800', 'orange.200');
  return (
    <Box bg={bg} py={10}>
      <Heading size="lg" mb={6} textAlign="center" color={headingColor}>Shop groceries on Instamart</Heading>
      <Flex align="center" justify="center" position="relative">
        <IconButton
          icon={<ChevronLeftIcon boxSize={6} />}
          aria-label="Scroll Left"
          onClick={scrollLeft}
          position="absolute"
          left={0}
          zIndex={2}
          bg={bg}
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
          {groceries.map((item, idx) => (
            <Box key={idx} textAlign="center">
              <Image src={item.img} alt={item.name} boxSize="120px" borderRadius="lg" mb={2} />
              <span style={{ fontSize: '0.9em' }}>{item.name}</span>
            </Box>
          ))}
        </Flex>
        <IconButton
          icon={<ChevronRightIcon boxSize={6} />}
          aria-label="Scroll Right"
          onClick={scrollRight}
          position="absolute"
          right={0}
          zIndex={2}
          bg={bg}
          boxShadow="md"
          display={{ base: 'none', md: 'flex' }}
        />
      </Flex>
    </Box>
  );
};

export default GrocerySlider;
