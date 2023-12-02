import api from '../api'

export const sendSubmodule = async submoduleData => {
  try {
    const response = await api.post('submodules/create', submoduleData, {
      headers: { 'content-type': 'multipart/form-data' },
    })

    return response
  } catch (error) {
    return error
  }
}

export const updateSubmodule = async (moduleData, submoduleID) => {
  try {
    const response = await api.patch(
      `submodules/${submoduleID}/update/`,
      moduleData,
      {
        headers: { 'content-type': 'multipart/form-data' },
      },
    )

    return response
  } catch (error) {
    return error
  }
}
