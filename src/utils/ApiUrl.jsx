import axios from "axios";

const baseURL = "https://educify.vercel.app/api/";
const api = axios.create({
	baseURL,
	headers: {
		"Content-Type": "application/json",
	},
});

api.interceptors.request.use(
	(config) => {
		const token = "8db78c4e7cc2b362c3636ef5b577bb31dffbca6e";

		if (token) {
			config.headers.Authorization = `Token ${token}`;
		}

		return config;
	},
	(error) => Promise.reject(error)
);

export default api;
