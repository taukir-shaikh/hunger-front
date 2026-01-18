import { Box, Heading, Flex, IconButton, Image, useBreakpointValue } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { useRef } from 'react';

const groceries = [
  { img: '/assets/grocery1.png' },
  { img: '/assets/grocery2.png' },
  { img: '/assets/grocery3.png' },
  { img: '/assets/grocery4.png' },
  { img: '/assets/grocery5.png' },
  { img: '/assets/grocery6.png' },
  { img: '/assets/grocery7.png' },
  { img: '/assets/grocery8.png' },
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

  return (
    <Box bg="white" py={10}>
      <Heading size="lg" mb={6} textAlign="center">Shop groceries on Instamart</Heading>
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
          {groceries.map((item, idx) => (
            <Image key={idx} src={item.img} alt="grocery" boxSize="120px" borderRadius="lg" />
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

export default GrocerySlider;
