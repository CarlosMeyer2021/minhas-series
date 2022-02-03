import React from "react"
import Header from "./Header"
import {
  BrowserRouter as Router,
  Route
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
    <Router>
      <div>
        <Header />
        <Route path='/' exact element={Home} />
        <Route path="/generos" element={Generos} />
      </div>
    </Router>
  )
}

export default App
