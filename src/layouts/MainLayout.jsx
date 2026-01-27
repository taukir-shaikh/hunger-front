
import { Box } from '@chakra-ui/react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';


const MainLayout = ({ children }) => (
  <Box minH="100vh" display="flex" flexDirection="column">
    <Header />
    <Box flex={1} as="main" pt={2} pb={2} px={[2, 4, 8]}>
      {children}
    </Box>
    <Footer />
  </Box>
);

export default MainLayout;
