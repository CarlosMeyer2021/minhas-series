import React, { useState } from "react"
import axios from "axios"
import { Navigate } from 'react-router-dom'

const NovaSerie = () => {
  const [name, setName] = useState('')
  const [success, setSuccess] = useState(false)
  const OnChange = evt => {
    setName(evt.target.value)
  }

  const save = () => {
    axios.post('/api/series', {
      name
    })
      .then(res => {
        setSuccess(true)
      })
  }

  if (success) {
    return <Navigate replace to='/series' />
  }

  return (
    <div className='container'>
      <h1>Nova Série {name}</h1>
      <form>
        <div className='form-group'>
          <label htmlFor='name'>Nome</label>
          <input type='text' value={name} onChange={OnChange} className='form-control' id='name' placeholder='Nome da Série' />
        </div>
        <button type='button' onClick={save} className='btn btn-primary'>Salvar</button>
      </form>
    </div>
  )
}

export default NovaSerie