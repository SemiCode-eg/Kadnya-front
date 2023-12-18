export function prepareFetchedQuestion(questions) {
  const preparedQuestions = questions?.map(question => ({
    id: question.id,
    questionText: question.question_text,
    questionType: 'MCQ',
    isGraded: question.is_graded,
    image: question.question_image,
    choices: question.choices.map(choice => ({
      text: choice.choice_text,
      image: choice.choice_image,
      isTrue: choice.is_true,
    })),
  }))

  return preparedQuestions
}
