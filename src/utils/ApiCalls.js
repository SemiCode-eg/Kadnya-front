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

export const getModules = async (courseID) => {
  try {
    const response = await api.get(`courses/${courseID}/modules`);

    return response;
  } catch (error) {
    return error;
  }
};

export const getSingleModule = async (moduleID) => {
  try {
    const response = await api.get(`modules/${moduleID}`);

    return response;
  } catch (error) {
    return error;
  }
};

export const sendModule = async (moduleData) => {
  try {
    const formData = new FormData();
    formData.append('title', moduleData.title);
    formData.append('description', moduleData.description);
    formData.append('course', moduleData.courseID);
    // formData.append('image', moduleData.imageAsset);

    const response = await api.post('modules/create', formData);

    return response.data;
  } catch (error) {
    return error;
  }
};

export const updateModule = async (moduleData, moduleID) => {
  try {
    const formData = new FormData();
    formData.append('title', moduleData.title);
    formData.append('description', moduleData.description);
    formData.append('course', moduleData.courseID);
    // formData.append('image', moduleData.imageAsset);

    const response = await api.put(`modules/${moduleID}/`, formData);

    return response.data;
  } catch (error) {
    return error;
  }
};

export const sendSubmodule = async (submoduleData) => {
  try {
    const formData = new FormData();
    formData.append('title', submoduleData.title);
    formData.append('description', submoduleData.description);
    formData.append('module', submoduleData.module);
    // formData.append('image', submoduleData.imageAsset);

    const response = await api.post('submodules/create', formData);

    return response.data;
  } catch (error) {
    return error;
  }
};

export const sendModuleLesson = async (lessonData) => {
  try {
    const formData = new FormData();
    formData.append('title', lessonData.title);
    formData.append('module', lessonData.module);
    // formData.append('image', lessonData.imageAsset);

    const response = await api.post('lessons/create', formData);

    return response.data;
  } catch (error) {
    return error;
  }
};

export const sendSubmoduleLesson = async (lessonData) => {
  try {
    const formData = new FormData();
    formData.append('title', lessonData.title);
    formData.append('submodule', lessonData.module);
    // formData.append('image', lessonData.imageAsset);

    const response = await api.post('submodulelessons/create', formData);

    return response.data;
  } catch (error) {
    return error;
  }
};
