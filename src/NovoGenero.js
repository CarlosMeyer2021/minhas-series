import React, { useState } from "react"
import axios from "axios"
import { Navigate } from 'react-router-dom'

const NovoGenero = () => {
  const [name, setName] = useState('')
  const [success, setSuccess] = useState(false)
  const OnChange = evt => {
    setName(evt.target.value)
  }

  const save = () => {
    axios.post('/api/genres', {
      name
    })
      .then(res => {
        setSuccess(true)
      })
  }

  if (success) {
    return <Navigate replace to='/generos' />
  }

  return (
    <div className='container'>
      <h1>Novo Genêros {name}</h1>
      <form>
        <div className='form-group'>
          <label htmlFor='name'>Nome</label>
          <input type='text' value={name} onChange={OnChange} className='form-control' id='name' placeholder='Nome do Genêro' />
        </div>
        <button type='button' onClick={save} className='btn btn-primary'>Salvar</button>
      </form>
    </div>
  )
}

export default NovoGenero