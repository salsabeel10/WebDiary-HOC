import React, { useState } from 'react'

const WithForm = (WrappedComponent) => {
  return ()=>{
  const [form, setForm] = useState({
    name: '',
    email: '',
    location: '',
    phone:'',
    message:'',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(form)
  }
  return (<WrappedComponent
            form={form}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
        />)
  }
}

export default WithForm