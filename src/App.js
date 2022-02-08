import React, { useState, useEffect } from "react"
import Header from "./Header"
import Generos from "./Generos"
import NovoGenero from "./NovoGenero"
import EditarGenero from "./EditarGenero"
import axios from "axios"
import {
  BrowserRouter as Router,
  Routes, Route
}
  from 'react-router-dom'

const Home = () => {
  return <h1>Home</h1>
}

function App() {
  const [data, setData] = useState({})
  useEffect(() => {
    axios.get('/api').then(res => {
      setData(res.data)
    })
    //console.log(1)
  }, [])
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path="/generos/:id" exact element={<EditarGenero />} />
          <Route path="/generos/novo" exact element={<NovoGenero />} />
          <Route path="/generos" exact element={<Generos />} />
        </Routes>
        <pre>{JSON.stringify(data)}</pre>
      </Router>
    </>
  )
}

export default App
