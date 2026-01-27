import api from './api';

export const fetchProfile = () => api.get('/v1/user/profile');
export const updateProfile = (data) => api.put('/v1/user/profile', data);
