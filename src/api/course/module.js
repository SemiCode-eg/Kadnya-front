import api from '../api'

export const getModules = async courseId => {
  try {
    const response = await api.get(`courses/${courseId}/modules`)

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
    const response = await api.post('modules/create', moduleData, {
      headers: { 'content-type': 'multipart/form-data' },
    })

    return response
  } catch (error) {
    return error
  }
}

export const updateModule = async (moduleData, moduleID) => {
  try {
    const response = await api.patch(`modules/${moduleID}/`, moduleData, {
      headers: { 'content-type': 'multipart/form-data' },
    })

    return response
  } catch (error) {
    return error
  }
}
