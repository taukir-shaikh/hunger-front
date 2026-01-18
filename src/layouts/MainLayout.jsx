import { Box } from '@chakra-ui/react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const MainLayout = ({ children }) => (
  <Box minH="100vh" display="flex" flexDirection="column">
    <Navbar />
    <Box flex="1" as="main">
      {children}
    </Box>
    <Footer />
  </Box>
);

export default MainLayout;
