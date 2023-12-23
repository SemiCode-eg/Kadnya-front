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

export const getCoachProgramSessions = async id => {
  try {
    const response = await api.get(`coach/${id}/sessions`)

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

    formData.append('title', session.title)
    formData.append('description', session.description)

    session.agendas?.forEach((agenda, index) => {
      formData.append(`agendas[${index}]`, agenda)
    })

    const response = await api.put(`session/${id}/update/`, formData)

    return response
  } catch (error) {
    return error
  }
}

export const deleteSession = async id => {
  try {
    const response = await api.delete(`session/${id}/delete/`)

    return response
  } catch (error) {
    return error
  }
}