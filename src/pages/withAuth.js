import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Simple auth guard HOC
const withAuth = (Component) => {
  return (props) => {
    const navigate = useNavigate();
    useEffect(() => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
      }
    }, [navigate]);
    return <Component {...props} />;
  };
};

export default withAuth;
