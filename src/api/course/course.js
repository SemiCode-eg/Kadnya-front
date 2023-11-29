import api from "../ApiUrl"

export const getCourses = async () => {
  try {
    const response = await api.get('courses')
    return response
  } catch (error) {
    return error
  }
}

export const getSingleCourse = async id => {
  try {
    const response = await api.get(`courses/${id}`)
    return response
  } catch (err) {
    return err
  }
}

export const createCourse = async course => {
  try {
    const formData = new FormData()
    formData.append('title', course.title)
    formData.append('description', course.description)
    formData.append('image', course.image)
    formData.append('pricingType', course.pricingType)
    formData.append('price', course.price)
    formData.append('category', course.category)
    formData.append('instructor', course.instructor)

    const response = await api.post('/courses/create/', formData, {
      headers: { 'content-type': 'multipart/form-data' },
    })

    return response
  } catch (error) {
    return error
  }
}

export const deleteCourse = async id => {
  try {
    const response = await api.delete(`courses/${id}/`)

    return response
  } catch (error) {
    return error
  }
}

export const updateCourse = async (id, data) => {
  try {
    const formData = new FormData()
    formData.append('title', data.title)
    formData.append('description', data.description)
    formData.append('image', data.image)

    const response = await api.patch(`courses/${id}/update/`, formData, {
      headers: { 'content-type': 'multipart/form-data' },
    })

    return response
  } catch (error) {
    return error
  }
}
