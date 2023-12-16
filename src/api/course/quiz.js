import api from '../api'

export const getQuiz = async id => {
  try {
    const response = await api.get(`quiz/${id}`)
    return response
  } catch (error) {
    return error
  }
}

export const createQuiz = async quizData => {
  const formData = new FormData()
  formData.append('title', quizData.title)
  formData.append('description', quizData.description)
  formData.append('course', quizData.courseId)

  try {
    const response = await api.post('quiz/create', formData, {
      headers: { 'content-type': 'application/json' },
    })

    return response
  } catch (error) {
    return error
  }
}

export const addQuestion = async (quizId, data) => {
  try {
    const response = await api.post(`mcq_question/create`, {
      question: data,
      quiz: quizId,
    })
    return response
  } catch (error) {
    return error
  }
}

export const updateQuiz = async (quizData, quizId) => {
  try {
    const response = await api.patch(`quiz/${quizId}/update/`, quizData, {
      headers: { 'content-type': 'multipart/form-data' },
    })

    return response
  } catch (error) {
    return error
  }
}
