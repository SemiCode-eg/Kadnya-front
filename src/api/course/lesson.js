import api from '../api'
import { CancelToken } from 'axios'

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
  try {
    const response = await api.patch(`lessons/${id}/update/`, data, {
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

export const uploadLessonFile = async (
  endPointUrl,
  file,
  setUploadedFile,
  setFileName,
  setError,
  requestCancelRef,
) => {
  try {
    if (!file) return

    if (file.type !== 'application/pdf') {
      setError('Wrong file type. Please select a PDF file.')
      return
    }

    // Check file size (in bytes)
    if (file.size > 20 * 1024 * 1024) {
      // 5 MB
      setError('File is too large. Please select a smaller file.')
      return
    }

    // Check file size (in bytes)
    if (file.name.length > 100) {
      setError('Maximum file name characters is 100.')
      return
    }

    const fileName =
      file.name.length > 12
        ? `${file.name.substring(0, 13)}... .${file.name.split('.')[1]}`
        : file.name

    setUploadedFile({ name: fileName, loading: 0 })

    const formData = new FormData()
    formData.append('file', file)

    const response = await api.patch(endPointUrl, formData, {
      onUploadProgress: ({ loaded, total }) => {
        const loading = Math.floor((loaded / total) * 100)
        setUploadedFile(prev => ({
          ...prev,
          loading: loading,
        }))

        if (loaded === total) {
          setFileName(fileName)
        }
      },
      cancelToken: new CancelToken(
        cancel => (requestCancelRef.current = cancel),
      ),
      headers: { 'Content-Type': 'application/pdf' },
    })

    return response
  } catch (error) {
    return error
  }
}
