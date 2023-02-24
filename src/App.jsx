import { useState } from 'react'
import { Routes, Route } from 'react-router'
import './App.css'
import Home from './components/Home'
import AllBeers from './components/AllBeers'
import SingleBeer from './components/SingleBeer'
import NewBeer from './components/NewBeer'

function App() {

  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/AllBeers" element={<AllBeers />} />
      <Route path="/NewBeer" element={<NewBeer />} />
      <Route path="/AllBeers/:beerId" element={<SingleBeer random={false}/>} />
      <Route path="/RandomBeer" element={<SingleBeer random={true}/>} />
      </Routes>
    </div>
  )
}

export default App
