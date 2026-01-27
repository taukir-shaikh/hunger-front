import { Box, Flex, Text, SimpleGrid, Link, Divider, Select, IconButton, useColorModeValue } from '@chakra-ui/react';
import { FaLinkedin, FaInstagram, FaFacebook, FaPinterest, FaTwitter } from 'react-icons/fa';

const companyLinks = [
  'About Us', 'Hunger Corporate', 'Careers', 'Team', 'Hunger One', 'Hunger Instamart', 'Hunger Dineout', 'Minis', 'Pyng'
];
const contactLinks = ['Help & Support', 'Partner With Us', 'Ride With Us'];
const legalLinks = ['Terms & Conditions', 'Cookie Policy', 'Privacy Policy'];
const availableCities = ['Bangalore', 'Gurgaon', 'Hyderabad', 'Delhi', 'Mumbai', 'Pune'];
const lifeLinks = ['Explore With Hunger', 'Hunger News', 'Snackables'];
const socialLinks = [
  { icon: FaLinkedin, label: 'LinkedIn' },
  { icon: FaInstagram, label: 'Instagram' },
  { icon: FaFacebook, label: 'Facebook' },
  { icon: FaPinterest, label: 'Pinterest' },
  { icon: FaTwitter, label: 'Twitter' },
];

export const HungerFooter = () => {
  const bg = useColorModeValue('#f6f6f6', 'gray.900');
  const textColor = useColorModeValue('gray.700', 'gray.200');
  const headingColor = useColorModeValue('gray.800', 'orange.200');
  const iconBg = useColorModeValue('#fc8019', 'orange.400');
  const iconText = useColorModeValue('white', 'gray.900');
  return (
    <>
    <Box bg={bg} color={textColor} pt={16} pb={8} mt={16}>
    <Flex px={{ base: 4, md: 16 }} justify="space-between" align="flex-start" wrap="wrap">
      <Box minW="180px" mb={8}>
        <Flex align="center" mb={2}>
          <Box bg={iconBg} borderRadius="md" p={1} mr={2}>
            <Text fontWeight="bold" color={iconText} fontSize="2xl">H</Text>
          </Box>
          <Text fontWeight="bold" fontSize="xl" color={headingColor}>Hunger</Text>
        </Flex>
        <Text fontSize="sm" color="gray.500">© {new Date().getFullYear()} Hunger Limited</Text>
      </Box>
      <SimpleGrid columns={{ base: 2, md: 5 }} spacing={8} flex="1">
        <Box>
          <Text fontWeight="bold" mb={2} color={headingColor}>Company</Text>
          {companyLinks.map((l, i) => <Link key={i} href="#" display="block" mb={1}>{l}</Link>)}
        </Box>
        <Box>
          <Text fontWeight="bold" mb={2} color={headingColor}>Contact us</Text>
          {contactLinks.map((l, i) => <Link key={i} href="#" display="block" mb={1}>{l}</Link>)}
        </Box>
        <Box>
          <Text fontWeight="bold" mb={2} color={headingColor}>Available in:</Text>
          {availableCities.map((c, i) => <Text key={i} mb={1}>{c}</Text>)}
          <Select size="sm" mt={2} placeholder="685 cities" maxW="120px" />
        </Box>
        <Box>
          <Text fontWeight="bold" mb={2} color={headingColor}>Legal</Text>
          {legalLinks.map((l, i) => <Link key={i} href="#" display="block" mb={1}>{l}</Link>)}
        </Box>
        <Box>
          <Text fontWeight="bold" mb={2} color={headingColor}>Life at Hunger</Text>
          {lifeLinks.map((l, i) => <Link key={i} href="#" display="block" mb={1}>{l}</Link>)}
          <Flex gap={2} mt={2}>
            {socialLinks.map((s, i) => (
              <IconButton key={i} icon={<s.icon />} aria-label={s.label} size="sm" variant="ghost" color={iconText} />
            ))}
          </Flex>
        </Box>
      </SimpleGrid>
    </Flex>
    <Divider my={8} borderColor={useColorModeValue('gray.300', 'gray.700')} />
    <Flex direction="column" align="center" gap={2}>
      <Text fontWeight="semibold">For better experience, download the Hunger app now</Text>
      <Flex gap={4}>
        <Box as="img" src="/assets/appstore.png" alt="App Store" h="40px" />
        <Box as="img" src="/assets/playstore.png" alt="Google Play" h="40px" />
      </Flex>

    </Flex>
  </Box>
  </>
)
};
