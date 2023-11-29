import api from "../ApiUrl"

export const getModules = async courseID => {
  try {
    const response = await api.get(`courses/${courseID}/modules`)

    return response
  } catch (error) {
    return error
  }
}

export const getSingleModule = async moduleID => {
  try {
    const response = await api.get(`modules/${moduleID}`)

    return response
  } catch (error) {
    return error
  }
}

export const sendModule = async moduleData => {
  try {
    const formData = new FormData()
    formData.append('title', moduleData.title)
    formData.append('description', moduleData.description)
    formData.append('course', moduleData.courseID)
    formData.append('image', moduleData.imageAsset)

    const response = await api.post('modules/create', formData, {
      headers: { 'content-type': 'multipart/form-data' },
    })

    return response.data
  } catch (error) {
    return error
  }
}

export const updateModule = async (moduleData, moduleID) => {
  try {
    const formData = new FormData()
    formData.append('title', moduleData.title)
    formData.append('description', moduleData.description)
    formData.append('course', moduleData.courseID)
    formData.append('image', moduleData.imageAsset)

    const response = await api.put(`modules/${moduleID}/`, formData, {
      headers: { 'content-type': 'multipart/form-data' },
    })

    return response.data
  } catch (error) {
    return error
  }
}
