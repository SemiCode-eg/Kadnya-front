import api from '../api'

export const getCoachPrograms = async () => {
  try {
    const response = await api.get(`coach/`)

    return response
  } catch (error) {
    return error
  }
}

export const getCoachProgram = async id => {
  try {
    const response = await api.get(`coach/${id}`)

    return response
  } catch (error) {
    return error
  }
}

export const createCoachProgram = async programData => {
  try {
    const response = await api.post('coach/create/', programData, {
      headers: { 'content-type': 'multipart/form-data' },
    })

    return response
  } catch (error) {
    return error
  }
}

export const updateCoachProgram = async (programData, programID) => {
  try {
    const response = await api.patch(`coach/${programID}/`, programData, {
      headers: { 'content-type': 'multipart/form-data' },
    })

    return response
  } catch (error) {
    return error
  }
}

export const deleteCoachProgram = async programID => {
  try {
    const response = await api.delete(`coach/${programID}/`)

    return response
  } catch (error) {
    return error
  }
}
