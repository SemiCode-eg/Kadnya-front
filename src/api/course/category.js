import api from "../api"

export const getCategories = async () => {
  try {
    const response = await api.get('course_categories/')
    return response
  } catch (error) {
    return error
  }
}
