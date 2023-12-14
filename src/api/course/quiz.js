import api from '../api'

export const getQuiz = async id => {
  try {
    const response = await api.get(`quiz/${id}`)
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

export const updateQuestions = async (quizId, questions) => {
  try {
    const formData = new FormData()

    questions.forEach(question => {
      formData.append('question_text', question.questionText)
      formData.append('question_type', question.questionType)
      formData.append('is_graded', question.isGraded)
      formData.append('question_image', question.image)
      question.choices.forEach((choice, index) => {
        formData.append(`choices[${index}][choice_text]`, choice.text)
        formData.append(`choices[${index}][choice_image]`, choice.image)
        formData.append(`choices[${index}][is_true]`, choice.isTrue)
      })
    })

    const response = await api.put(`/quiz_questions/${quizId}/`, formData, {
      headers: { 'content-type': 'multipart/form-data' },
    })
    return response
  } catch (error) {
    return error
  }
}
