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
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path='/' exact component={Home} />
          <Route path="/generos" component={Generos} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
