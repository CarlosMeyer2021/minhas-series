import React, { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const Generos = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios
      .get('/api/genres')
      .then(res => {
        setData(res.data.data)
      })
  }, [])

  const renderizaLinha = record => {
    return (
      <tr key={record.id}>
        <th scope="row">{record.id}</th>
        <td>{record.name}</td>
        <td>
          <button className="btn btn-danger" >Remover</button>
          <Link to={'/generos/' + record.id} className='btn btn-warning'>Editar</Link>
        </td>
      </tr>
    )
  }

  /*const deleteGenero = id => {
    axios
      .delete('/api/genres/' + id)
      .then(res => {
        const filtrado = data.filter(item => item.id !== id)
        setData(filtrado)
        onClick={() => deleteGenero (record.id)}
      })
  }*/


  if (data.length === 0) {
    return (
      <div className="container">
        <h1>Genêros</h1>
        <div className="alert alert-warning" role="alert">
          Você não possui genêros criados.
        </div>
      </div>
    )
  }
  console.log(data)

  const id = 2
  const filtrado = data.filter(item => item.id === id)

  console.log(filtrado)

  return (
    <div className="container">
      <h1>Genêros</h1>
      <Link to='/generos/novo' className="btn btn-primary">Novo genêro </Link>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nome</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>
        <tbody>
          {data.map(renderizaLinha)}
        </tbody>
      </table>
    </div>
  )
}

export default Generos