import React from "react"
import Header from "./Header"
import {
  BrowserRouter as Router,
  Routes, Route
}
  from 'react-router-dom'

const Home = () => {
  return <h1>Home</h1>
}

const Generos = () => {
  return <h1>Genêros</h1>
}

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path="/generos" element={<Generos />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
