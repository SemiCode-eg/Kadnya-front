import api from '../api'

export const addSessionTitle = async data => {
  try {
    const response = await api.post('session/create/', data, {
      headers: { 'content-type': 'application/json' },
    })

    return response
  } catch (error) {
    return error
  }
}
