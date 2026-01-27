import { useSelector } from 'react-redux';

const useAuth = () => {
  const { user, isAuthenticated, role, token } = useSelector((state) => state.auth);
  return { user, isAuthenticated, role, token };
};

export default useAuth;
