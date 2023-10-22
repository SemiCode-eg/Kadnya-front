import api from './ApiUrl';

export const getsingleCourse = async (id) => {
  try {
    const response = await api.get(`courses/${id}`);
    return response;
  } catch (err) {
    return err;
  }
};
