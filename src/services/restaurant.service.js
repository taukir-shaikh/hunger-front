import api from './api';

export const fetchRestaurants = (params) => api.get('/v1/restaurants', { params });
export const fetchRestaurantById = (id) => api.get(`/v1/restaurants/${id}`);
