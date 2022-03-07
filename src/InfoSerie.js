import React, { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { Navigate } from 'react-router-dom'
import { Badge } from "reactstrap"

const InfoSerie = () => {
  const [form, setForm] = useState({})
  const [success, setSuccess] = useState(false)
  const [mode, setMode] = useState('INFO')
  const [genres, setGenres] = useState([])

  const params = useParams()
  const id = params.id

  const [data, setData] = useState({})
  useEffect(() => {
    axios
      .get('/api/series/' + params.id)
      .then(res => {
        setData(res.data)
        setForm(res.data)
      })
  }, [params.id])

  useEffect(() => {
    axios
      .get('/api/genres')
      .then(res => {
        setGenres(res.data.data)
      })
  }, [])

  // custom header
  const masterHeader = {
    height: '50vh',
    minHeight: '500px',
    background: `url('${data.background}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }

  const OnChange = field => evt => {
    setForm({
      ...form,
      [field]: evt.target.value
    })
  }

  const seleciona = value => () => {
    setForm({
      ...form,
      status: value
    })
  }

  const save = () => {
    axios
      .put('/api/series/' + params.id, form)
      .then(res => {
        setSuccess(true)
      })
  }

  if (success) {
    //return <Navigate replace to='/series' />
  }

  return (
    <div>
      <header style={masterHeader}>
        <div className="h-100" style={{ background: 'rgba(0,0,0,0.7)' }}>
          <div className="container h-100">
            <div className="row h-100 align-items-center">
              <div className="col-3">
                <img alt={data.name} className="img-fluid img-thumbnail" src={data.poster} />
              </div>
              <div className="col-8">
                <h className='font-weight-light text-white'>{data.name}</h>
                <div className="lead text-white">
                  {data.status === 'ASSISTIDO' && <Badge color="success">Assistido</Badge>}
                  {data.status === 'PARA_ASSISTIR' && <Badge color="warning">Para Assistir</Badge>}
                  Gênero: {data.genre_name}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <button className='btn btn-primary' onClick={() => setMode('EDIT')}>Editar</button>
      </div>

      {
        mode === 'EDIT' &&
        <div className='container'>
          <h1>Editar Série {form.name}</h1>
          <button className='btn btn-primary' onClick={() => setMode('INFO')}>Cancelar edição</button>
          <form>
            <div className='form-group'>
              <label htmlFor='name'>Nome</label>
              <input type='text' value={form.name} onChange={OnChange('name')} className='form-control' id='name' placeholder='Nome da Série' />
            </div>
            <div className='form-group'>
              <label htmlFor='name'>Comentários</label>
              <input type='text' value={form.comments} onChange={OnChange('comments')} className='form-control' id='name' placeholder='Nome da Série' />
            </div>
            <div className='form-group'>
              <label htmlFor='name'>Gênero</label>
              <select className="form-control" onChange={OnChange('genre_id')}>
                {genres.map(genre => <option key={genre.id} value={genre.id} selected={genre.id === form.genre}>{genre.name}</option>)}
              </select>
            </div>

            <div className="form-check">
              <input className="form-check-input" type="radio" name="status" id="assistido" value="ASSISTIDO" onClick={seleciona('ASSISTIDO')} />
              <label className="form-check-label" htmlFor="assistido">
                Assistido
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="status" id="paraAssistir" value="PARA_ASSISTIR" onClick={seleciona('PARA_ASSISTIR')} />
              <label className="form-check-label" htmlFor="paraAssistir">
                Para assistir
              </label>
            </div>


            <button type='button' onClick={save} className='btn btn-primary'>Salvar</button>
          </form>
        </div>
      }
    </div>



  )
}

export default InfoSerie