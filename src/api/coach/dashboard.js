import api from '../api'

export const getSessions = async type => {
  try {
    const response = await api.get(`session/${type}`)

    return response
  } catch (error) {
    return error
  }
}

export const getSessionsOverview = async () => {
  try {
    const response = await api.get('session/overview')

    return response
  } catch (error) {
    return error
  }
}
