import { useToast } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const GlobalToast = () => {
  const { error } = useSelector((state) => state.auth); // Extend for other slices as needed
  const toast = useToast();

  useEffect(() => {
    if (error) {
      toast({ title: error, status: 'error', duration: 3000 });
    }
  }, [error, toast]);

  return null;
};

export default GlobalToast;
