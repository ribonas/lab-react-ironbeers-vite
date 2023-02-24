import { useState } from 'react'
import { Routes, Route } from 'react-router'
import './App.css'
import Home from './components/Home'
import AllBeers from './components/AllBeers'
import SingleBeer from './components/SingleBeer'
import NewBeer from './components/NewBeer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/AllBeers" element={<AllBeers />} />
      <Route path="/NewBeer" element={<NewBeer />} />
      <Route path="/AllBeers/:beerId" element={<SingleBeer />} />
      </Routes>
    </div>
  )
}

export default App
