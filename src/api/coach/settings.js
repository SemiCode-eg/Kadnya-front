import api from '../api'

export const getCoachSettings = async id => {
  try {
    const response = await api.get(`coach/${id}/settings`)

    return response
  } catch (error) {
    return error
  }
}
