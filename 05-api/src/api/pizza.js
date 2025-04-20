import axios from 'axios';

const BASE_URL = 'https://67fcf7313da09811b1742b72.mockapi.io/pizza/pizza';

export const fetchPizza = async () => {
    const response = await axios.get(BASE_URL,
        {
            headers: {
                'Cache-Control': 'no-cache',
            }
        }
    );
    return response.data;
};
export const fetchPizzaById = async (userId) => {
    const response = await axios.get(`${BASE_URL}/${userId}`, {
        headers: {
            'Cache-Control': 'no-cache',
        }
    }
    );
    return response.data;
};

export const createPizza = async (user) => {
    const response = await axios.post(BASE_URL, user);
    return response.data;
};

export const updatePizza = async (userId, user) => {
    const response = await axios.put(`${BASE_URL}/${userId}`, user);
    return response.data;
};
export const deletePizza = async (userId) => {
    const response = await axios.delete(`${BASE_URL}/${userId}`);
    return response.data;
};
