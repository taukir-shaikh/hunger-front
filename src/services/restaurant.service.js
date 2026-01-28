import axios from 'axios';

// Using Fake Store API for demo restaurant data (replace with any free API)
export const fetchRestaurants = async () => {
	// We'll use the Fake Store API to simulate restaurant data
	const res = await axios.get('https://fakestoreapi.com/products?limit=8');
	// Map the product data to restaurant-like data
	return {
		data: {
			restaurants: res.data.map((item, idx) => ({
				id: item.id,
				name: item.title,
				image: item.image,
				cuisine: item.category,
				rating: (Math.random() * 2 + 3).toFixed(1), // 3.0 - 5.0
				delivery_time: Math.floor(Math.random() * 30) + 20, // 20-50 mins
			})),
		},
	};
};

export const fetchRestaurantById = async (id) => {
	const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
	return {
		data: {
			id: res.data.id,
			name: res.data.title,
			image: res.data.image,
			cuisine: res.data.category,
			rating: (Math.random() * 2 + 3).toFixed(1),
			delivery_time: Math.floor(Math.random() * 30) + 20,
		},
	};
};
