import api from "../ApiUrl"

export const getCoachProgram = async id => {
  try {
    const response = await api.get(`coach_programs/${id}`)

    return response
  } catch (error) {
    return error
  }
}