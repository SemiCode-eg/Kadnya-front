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

export const getSession = async id => {
  try {
    const response = await api.get(`session/${id}`)

    return response
  } catch (error) {
    return error
  }
}

export const updateSession = async (id, session) => {
  try {
    const formData = new FormData()

    // TODO append data to the FormData class

    const response = await api.put(`session/${id}update/`, formData)

    return response
  } catch (error) {
    return error
  }
}
