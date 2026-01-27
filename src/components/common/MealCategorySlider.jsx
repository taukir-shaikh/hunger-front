import React, { useEffect, useState, useRef } from 'react';
import { Box, Heading, Flex, Text, IconButton, Image, Spinner, useBreakpointValue, useColorModeValue } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import axios from 'axios';

const MealCategorySlider = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef();
  const scrollAmount = useBreakpointValue({ base: 200, md: 300 });

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
        setCategories(response.data.categories || []);
      } catch (error) {
        setCategories([]);
      }
      setLoading(false);
    };
    fetchCategories();
  }, []);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  };
  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const bg = useColorModeValue('white', 'gray.900');
  const headingColor = useColorModeValue('gray.800', 'orange.200');
  const textColor = useColorModeValue('gray.800', 'gray.100');
  return (
    <Box bg={bg} py={10}>
      <Heading size="lg" mb={6} textAlign="center" color={headingColor}>Order our best food options</Heading>
      {loading ? (
        <Flex justify="center" align="center" minH="120px"><Spinner size="xl" /></Flex>
      ) : (
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
            {categories.map((cat) => (
              <Flex key={cat.idCategory} direction="column" align="center" minW="120px">
                <Image src={cat.strCategoryThumb} alt={cat.strCategory} boxSize="80px" mb={2} />
                <Text fontWeight="medium" fontSize="lg" color={textColor}>{cat.strCategory}</Text>
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
      )}
    </Box>
  );
};

export default MealCategorySlider;
