import api from '../api'

export const getSingleLesson = async lessonID => {
  try {
    const response = await api.get(`lessons/${lessonID}`)

    return response
  } catch (error) {
    return error
  }
}

export const sendLesson = async data => {
  try {
    const response = await api.post('lessons/create', data)

    return response
  } catch (error) {
    return error
  }
}

export const updateLesson = async (id, data) => {
  const formData = new FormData()
  formData.append('title', data.title)
  formData.append('description', data.description)

  if (data.submodulesSortKey === 'NONE') {
    formData.append('module', data.modulesSortKey)
    formData.append('sub_module', '')
  } else {
    formData.append('module', '')
    formData.append('sub_module', data.submodulesSortKey)
  }

  formData.append('course', data.id)
  formData.append('hide', data.isCommentHidden)
  formData.append('draft', data.isDraft)
  data.imageAsset && formData.append('image', data.imageAsset)

  try {
    const response = await api.patch(`lessons/${id}/update/`, formData, {
      headers: { 'content-type': 'multipart/form-data' },
    })

    return response
  } catch (error) {
    return error
  }
}

export const deleteLesson = async id => {
  try {
    const response = await api.delete(`lessons/${id}/delete/`)

    return response
  } catch (error) {
    return error
  }
}
