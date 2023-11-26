import { useReducer, useState } from 'react'
import Step1 from './Step1'
import Step2 from './Step2'
import AddCoursePreview from './Preview'
import CustomModal from '../../../../components/customModal'
import MainButton from '../../../../components/mainButton/MainButton'
import HandleErrorLoad from '../../../../components/handleErrorLoad'
import { createCourse } from '../../../../utils/ApiCalls'

const formReducerKeys = {
  setTitle: 'setTitle',
  setDescription: 'setDescription',
  setImage: 'setImage',
  setPrice: 'setPrice',
  setPricingType: 'setPricingType',
  setCategory: 'setCategory',
  setError: 'setError',
  reset: 'reset',
}

function formReducer(state, action) {
  switch (action.type) {
    case formReducerKeys.setTitle:
      return {
        ...state,
        title: action.payload,
      }
    case formReducerKeys.setDescription:
      return {
        ...state,
        description: action.payload,
      }
    case formReducerKeys.setImage:
      return {
        ...state,
        image: action.payload,
      }
    case formReducerKeys.setPrice:
      return {
        ...state,
        price: action.payload,
      }
    case formReducerKeys.setPricingType:
      return {
        ...state,
        pricingType: action.payload,
      }
    case formReducerKeys.setCategory:
      return {
        ...state,
        category: action.payload,
      }
    case formReducerKeys.setError:
      return {
        ...state,
        error: action.payload,
      }
    case formReducerKeys.reset:
      return formInitialState
  }
}

const maxStep = 2
const titleInputErrMsg = "Title mustn't be empty"
const descInputErrMsg = "Description mustn't be empty"
const imgInputErrMsg = 'Add course image'

const formInitialState = {
  title: '',
  description: '',
  image: null,
  price: 0,
  pricingType: 'FREE',
  category: 1,
  error: '',
}

/* eslint-disable react/prop-types */
export default function AddCouseForm({ open, onClose, targerCousesRefetch }) {
  const [step, setStep] = useState(1)
  const [formData, dispatchFormData] = useReducer(formReducer, formInitialState)
  const [loading, setLoading] = useState(false)

  const handleGoBack = () => {
    setStep(step => --step)
  }

  const handleTitleInput = event => {
    dispatchFormData({
      type: formReducerKeys.setTitle,
      payload: event.target.value,
    })
  }

  const handleDescTextAria = event => {
    dispatchFormData({
      type: formReducerKeys.setDescription,
      payload: event.target.value,
    })
  }

  const handleImage = image => {
    dispatchFormData({
      type: formReducerKeys.setImage,
      payload: image,
    })
  }

  const handlePrice = event => {
    dispatchFormData({
      type: formReducerKeys.setPrice,
      payload: event.target.value,
    })
  }

  const handlePricingType = value => {
    dispatchFormData({ type: formReducerKeys.setPricingType, payload: value })
  }

  const handleCategory = event => {
    dispatchFormData({
      type: formReducerKeys.setCategory,
      payload: event.target.value,
    })
  }

  const resetForm = () => {
    dispatchFormData({ type: formReducerKeys.reset })
    setStep(1)
  }

  const handleClose = () => {
    onClose()
    resetForm()
  }

  const handleContinue = () => {
    setStep(step => ++step)
  }

  const handleSubmit = async event => {
    event.preventDefault()

    if (!formData.title)
      return dispatchFormData({ type: 'setError', payload: titleInputErrMsg })
    if (!formData.description)
      return dispatchFormData({ type: 'setError', payload: descInputErrMsg })
    if (!formData.image)
      return dispatchFormData({ type: 'setError', payload: imgInputErrMsg })

    setLoading(true)

    const res = await createCourse({
      title: formData.title,
      description: formData.description,
      image: formData.image,
      pricingType: formData.pricingType,
      price: formData.pricingType === 'FREE' ? 0 : formData.price,
      category: formData.category,
      instructor: 1,
    })

    resetForm()
    setLoading(false)
    targerCousesRefetch()
  }

  return (
    <CustomModal
      title="Add Course"
      open={open}
      onClose={handleClose}
      onGoBack={handleGoBack}
      fullWidth
      maxWidth="md"
      step={step}
    >
      <HandleErrorLoad loading={loading} errorMsg={formData.error}>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 items-center sm:px-28"
        >
          <Step1
            step={step}
            title={formData.title}
            onTitleInput={handleTitleInput}
            description={formData.description}
            onDescInput={handleDescTextAria}
          />

          <Step2
            step={step}
            onSelectImage={handleImage}
            pricingType={formData.pricingType}
            onChangePricingType={handlePricingType}
            price={formData.price}
            onChangePrice={handlePrice}
            category={formData.category}
            onChangeCategory={handleCategory}
          />

          <AddCoursePreview
            title={formData.title}
            description={formData.description}
          />

          <MainButton
            text={step === maxStep ? 'Finish' : 'Continue'}
            className="sm:!px-28 !px-16"
            handleClick={step === maxStep ? handleSubmit : handleContinue}
          />
        </form>
      </HandleErrorLoad>
    </CustomModal>
  )
}
