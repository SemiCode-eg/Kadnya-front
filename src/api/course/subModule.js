import api from "../ApiUrl"

export const sendSubmodule = async submoduleData => {
  try {
    const formData = new FormData()
    formData.append('title', submoduleData.title)
    formData.append('description', submoduleData.description)
    formData.append('module', submoduleData.module)
    formData.append('image', submoduleData.imageAsset)

    const response = await api.post('submodules/create', formData, {
      headers: { 'content-type': 'multipart/form-data' },
    })

    return response.data
  } catch (error) {
    return error
  }
}

export const updateSubmodule = async (moduleData, submoduleID) => {
  try {
    const formData = new FormData()
    formData.append('title', moduleData.title)
    formData.append('description', moduleData.description)
    formData.append('course', moduleData.courseID)
    formData.append('module', moduleData.module)
    formData.append('image', moduleData.imageAsset)

    const response = await api.put(`submodules/${submoduleID}/`, formData, {
      headers: { 'content-type': 'multipart/form-data' },
    })

    return response.data
  } catch (error) {
    return error
  }
}