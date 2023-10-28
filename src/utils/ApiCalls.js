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

export const getSingleLesson = async (lessonID) => {
  try {
    const response = await api.get(`lessons/${lessonID}`);

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
    formData.append('image', moduleData.imageAsset);

    const headers = new Headers();
    headers.append('Content-Type', 'image/jpeg');
    headers.append('Content-Type', 'image/png');
    headers.append('Content-Type', 'application/json');

    const response = await api.post('modules/create', formData, { headers });

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
    formData.append('image', moduleData.imageAsset);

    const headers = new Headers();
    headers.append('Content-Type', 'image/jpeg');
    headers.append('Content-Type', 'image/png');
    headers.append('Content-Type', 'application/json');

    const response = await api.put(`modules/${moduleID}/`, formData, {
      headers,
    });

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
    formData.append('image', submoduleData.imageAsset);

    const headers = new Headers();
    headers.append('Content-Type', 'image/jpeg');
    headers.append('Content-Type', 'image/png');
    headers.append('Content-Type', 'application/json');

    const response = await api.post('submodules/create', formData, { headers });

    return response.data;
  } catch (error) {
    return error;
  }
};

export const updateSubmodule = async (moduleData, submoduleID) => {
  try {
    const formData = new FormData();
    formData.append('title', moduleData.title);
    formData.append('description', moduleData.description);
    formData.append('course', moduleData.courseID);
    formData.append('module', moduleData.module);
    formData.append('image', moduleData.imageAsset);

    const headers = new Headers();
    headers.append('Content-Type', 'image/jpeg');
    headers.append('Content-Type', 'image/png');
    headers.append('Content-Type', 'application/json');

    const response = await api.put(`submodules/${submoduleID}/`, formData, {
      headers,
    });

    return response.data;
  } catch (error) {
    return error;
  }
};

export const sendLesson = async (data) => {
  try {
    const response = await api.post('lessons/create', data);

    return response.data;
  } catch (error) {
    return error;
  }
};

export const updateLesson = async (id, data) => {
  try {
    const headers = new Headers();
    headers.append('Content-Type', 'image/jpeg');
    headers.append('Content-Type', 'image/png');
    headers.append('Content-Type', 'application/json');

    const response = await api.patch(`lessons/${id}/`, data, { headers });

    return response;
  } catch (error) {
    return error;
  }
};

export const deleteLesson = async (id) => {
  try {
    const response = await api.delete(`lessons/${id}/`);

    return response;
  } catch (error) {
    return error;
  }
};

export const updateCourse = async (id, data) => {
  try {
    const response = await api.patch(`courses/${id}/update`, data);

    return response;
  } catch (error) {
    return error;
  }
};
