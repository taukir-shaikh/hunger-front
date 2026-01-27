import api from './api';

export const placeOrder = (data) => api.post('/v1/user/orders', data);
export const fetchOrders = () => api.get('/v1/user/orders');
export const fetchOrderById = (id) => api.get(`/v1/user/orders/${id}`);
