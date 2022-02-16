import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { Navigate } from 'react-router-dom'

const EditarGenero = () => {
  const [name, setName] = useState('')
  const [success, setSuccess] = useState(false)

  const params = useParams()
  const id = params.id

  useEffect(() => {
    axios
      .get('/api/genres/' + params.id)
      .then(res => {
        setName(res.data.name)
      })
  }, [params.id])

  console.log(params.id)

  const OnChange = evt => {
    setName(evt.target.value)
  }

  const save = () => {
    axios.put('/api/genres/' + params.id, {
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
      <h1>Editar Genêro {name}</h1>
      <form>
        <div className='form-group'>
          <label htmlFor='name'>Nome</label>
          <input type='text' value={name} onChange={OnChange} className='form-control' id='name' placeholder='Nome do Genêro' />
        </div>
        <button type='button' onClick={save} className='btn btn-primary'>Editar</button>
      </form>
    </div>
  )
}

export default EditarGenero