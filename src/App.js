import React from "react"
import Header from "./Header"
import Generos from "./Generos"
import NovoGenero from "./NovoGenero"
import EditarGenero from "./EditarGenero"
import Series from "./Series"
import NovaSerie from "./NovaSerie"
import InfoSerie from "./InfoSerie"
import {
  BrowserRouter as Router,
  Routes, Route
}
  from 'react-router-dom'

const Home = () => {
  return <h1>Home</h1>
}

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path="/generos" exact element={<Generos />} />
          <Route path="/generos/novo" exact element={<NovoGenero />} />
          <Route path="/generos/:id" exact element={<EditarGenero />} />
          <Route path="/series" exact element={<Series />} />
          <Route path="/series/novo" exact element={<NovaSerie />} />
          <Route path="/series/:id" exact element={<InfoSerie />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
