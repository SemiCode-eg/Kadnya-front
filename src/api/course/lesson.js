import api from "../ApiUrl"

export const getSingleLesson = async lessonID => {
  try {
    const response = await api.get(`lessons/${lessonID}`)

    return response
  } catch (error) {
    return error
  }
}



export const sendLesson = async data => {
  try {
    const response = await api.post('lessons/create', data)

    return response.data
  } catch (error) {
    return error
  }
}

export const updateLesson = async (id, data) => {
  try {
    const response = await api.patch(`lessons/${id}/update/`, data, {
      headers: { 'content-type': 'multipart/form-data' },
    })

    return response
  } catch (error) {
    return error
  }
}

export const deleteLesson = async id => {
  try {
    const response = await api.delete(`lessons/${id}/delete/`)

    return response
  } catch (error) {
    return error
  }
}