import { Box, Image, Flex } from '@chakra-ui/react';
import { useState } from 'react';

const foodImages = [
  '/assets/food1.jpg',
  '/assets/food2.jpg',
  '/assets/food3.jpg',
  '/assets/food4.jpg',
];

const FoodSlider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % foodImages.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + foodImages.length) % foodImages.length);

  return (
    <Flex align="center" justify="center" position="relative">
      <Button onClick={prevSlide} position="absolute" left={0} zIndex={1}>&lt;</Button>
      <Image src={foodImages[current]} alt="food" boxSize="300px" objectFit="cover" borderRadius="xl" />
      <Button onClick={nextSlide} position="absolute" right={0} zIndex={1}>&gt;</Button>
    </Flex>
  );
};

export default FoodSlider;
