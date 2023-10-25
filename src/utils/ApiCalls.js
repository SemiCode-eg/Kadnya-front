import api from "./ApiUrl";

export const getsingleCourse = async (id) => {
	try {
		const response = await api.get(`courses/${id}`);
		return response;
	} catch (err) {
		return err;
	}
};

export const getCourses = async () => {
	try {
		const response = await api.get("courses");
		return response;
	} catch (error) {
		return error;
	}
};

export const getModule = async (courseID) => {
	try {
		const response = await api.get(`courses/${courseID}/modules`);

		return response;
	} catch (error) {
		return error;
	}
};

export const sendModule = async (moduleData) => {
	try {
		const formData = new FormData();
		formData.append("title", moduleData.title);
		formData.append("description", moduleData.description);
		formData.append("course", moduleData.courseID);
		// formData.append('image', moduleData.imageAsset);

		const response = await api.post("modules/create", formData);

		return response.data;
	} catch (error) {
		return error;
	}
};

export const sendSubmodule = async (moduleData) => {
	try {
		const formData = new FormData();
		formData.append("title", moduleData.title);
		formData.append("description", moduleData.description);
		formData.append("module", moduleData.module);
		// formData.append('image', moduleData.imageAsset);

		const response = await api.post("submodules/create", formData);

		return response.data;
	} catch (error) {
		return error;
	}
};
