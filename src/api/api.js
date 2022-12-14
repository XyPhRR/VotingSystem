import axios from 'axios';

const api = axios.create({
	baseURL: 'http://localhost/voting',
});

export default api;
