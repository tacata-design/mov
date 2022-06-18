import axios from 'axios'
import { useState } from 'react'
import {
  main,
  formStyles,
  error,
  loader,
  black,
  white,
} from '../../styles/Revalidate.module.css'

export default function Revalidate() {
  const [keyValue, setKeyValue] = useState('')
  const [pageValue, setPageValue] = useState('')
  const [spinner, setSpinner] = useState(false)
  const [formError, setFormError] = useState(false)

  const handleChange = (event) => {
    if (event.target.name === 'key') setKeyValue(event.target.value)
    if (event.target.name === 'page') setPageValue(event.target.value)
    setFormError(false)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (keyValue === '' || pageValue === '') {
      setFormError(true)
      return
    } else {
      setFormError(false)
    }

    setSpinner(true)
    try {
      const page = pageValue === 'home' ? '' : pageValue
      const response = await axios.get(
        `/api/revalidate?secret=${keyValue}&page=${page}`
      )
      if (response?.data?.revalidated) {
        setKeyValue('')
        setPageValue('')
        setFormError(false)
        setSpinner(false)
      }
    } catch (err) {
      console.log('ERROR:', err)
      setKeyValue('')
      setPageValue('')
      setFormError(true)
      setSpinner(false)
    }
  }

  const spinnerElement = <div className={loader}>Loading ... </div>

  const formStyle = formError ? `${formStyles} ${error}` : `${formStyles}`

  return (
    <div className={main}>
      {spinner ? (
        spinnerElement
      ) : (
        <div>
          <h3 className={formError ? `${black}` : `${white}`}>
            Campos obligatorios
          </h3>
          <form className={formStyle} onSubmit={handleSubmit}>
            <div>
              <label>Key:</label>
              <input
                type='text'
                name='key'
                value={keyValue}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Page:</label>
              <input
                type='text'
                name='page'
                value={pageValue}
                onChange={handleChange}
              />
            </div>
            <button type='submit'>Vaciar Cache</button>
          </form>
        </div>
      )}
    </div>
  )
}
