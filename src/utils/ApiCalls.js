import api from './ApiUrl';

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
    const response = await api.get('courses');
    console.log(response);
    return response;
  } catch (error) {
    return error;
  }
};

export const sendModule = async (moduleData) => {
  try {
		console.log(moduleData.imageAsset)
    const formData = new FormData();
    formData.append('title', moduleData.title);
    formData.append('description', moduleData.description);
    formData.append('course', moduleData.courseID);
    // formData.append('image', moduleData.imageAsset);

    const response = await api.post('modules/create', formData);

    const data = await response.json();

		console.log(data);
    return data;
  } catch (error) {
		console.log(error)
    return error;
  }
};
