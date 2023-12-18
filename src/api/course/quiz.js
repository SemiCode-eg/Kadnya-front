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

export const updateQuiz = async (quizData, quizId) => {
  const formData = new FormData()
  formData.append('title', quizData.title)
  formData.append('description', quizData.description)
  formData.append('hide_aswers_result_page', quizData.hideAnswers)
  formData.append('draft', quizData.isDraft)
  formData.append('course', quizData.id)
  formData.append(
    'passing_grade',
    quizData.showPassingGrade ? quizData.passingGrade : 0,
  )

  if (quizData.imageAsset && quizData.imageAsset !== quizData.image) {
    formData.append('image', quizData.imageAsset)
  }

  try {
    const response = await api.patch(`quiz/${quizId}/update/`, formData, {
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

    questions.forEach((question, questionIndex) => {
      formData.append(
        `questions[${questionIndex}][question_text]`,
        question.questionText,
      )
      formData.append(
        `questions[${questionIndex}][question_type]`,
        question.questionType,
      )
      formData.append(
        `questions[${questionIndex}][is_graded]`,
        question.isGraded,
      )
      formData.append(
        `questions[${questionIndex}][question_image]`,
        question.image,
      )

      question.choices.forEach((choice, choiceIndex) => {
        formData.append(
          `questions[${questionIndex}][choices][${choiceIndex}][choice_text]`,
          choice.text,
        )
        formData.append(
          `questions[${questionIndex}][choices][${choiceIndex}][choice_image]`,
          choice.image,
        )
        formData.append(
          `questions[${questionIndex}][choices][${choiceIndex}][is_true]`,
          choice.isTrue,
        )
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
