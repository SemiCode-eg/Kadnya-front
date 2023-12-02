import api from '../api'

export const getCoachProgram = async id => {
  try {
    const response = await api.get(`coach_programs/${id}`)

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

    return response.data
  } catch (error) {
    return error
  }
}
