import { useState, useCallback } from 'react'

const useForm = (initialValues = {}, validate) => {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target

    // Handle different input types
    const inputValue = type === 'checkbox' ? checked : value

    setValues(prev => ({
      ...prev,
      [name]: inputValue
    }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }, [errors])

  const handleBlur = useCallback((e) => {
    const { name } = e.target

    setTouched(prev => ({
      ...prev,
      [name]: true
    }))

    // Validate field on blur if validate function is provided
    if (validate) {
      const fieldErrors = validate({ [name]: values[name] })
      if (fieldErrors[name]) {
        setErrors(prev => ({
          ...prev,
          [name]: fieldErrors[name]
        }))
      }
    }
  }, [validate, values])

  const handleSubmit = useCallback((onSubmit) => async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Mark all fields as touched
    const allTouched = Object.keys(values).reduce((acc, key) => {
      acc[key] = true
      return acc
    }, {})
    setTouched(allTouched)

    // Validate all fields
    let formErrors = {}
    if (validate) {
      formErrors = validate(values)
    }

    setErrors(formErrors)

    // Check if there are any errors
    const hasErrors = Object.keys(formErrors).length > 0

    if (!hasErrors) {
      try {
        await onSubmit(values)
      } catch (error) {
        console.error('Form submission error:', error)
      }
    }

    setIsSubmitting(false)
  }, [values, validate])

  const reset = useCallback(() => {
    setValues(initialValues)
    setErrors({})
    setTouched({})
    setIsSubmitting(false)
  }, [initialValues])

  const setValue = useCallback((name, value) => {
    setValues(prev => ({
      ...prev,
      [name]: value
    }))
  }, [])

  const setError = useCallback((name, error) => {
    setErrors(prev => ({
      ...prev,
      [name]: error
    }))
  }, [])

  return {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    reset,
    setValue,
    setError
  }
}

export default useForm