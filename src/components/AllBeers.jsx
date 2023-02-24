import {React, useState, useEffect} from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import {Link} from 'react-router-dom'


function AllBeers() {
  const [beers, setBeers] = useState([])
  const [search, setSearch] = useState('')
  const fetchData = async () => {
    const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers')
    setBeers(response.data)
  }

    const fetchSearch = async () => {
        const q = search.toLowerCase()
        const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${q}`)
        setBeers(response.data)}

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    fetchSearch()
  }
  , [search])

  return (
    <div>
    <Navbar />
    <input type='text' value={search} onChange = {event => setSearch(event.target.value)} />
    {beers.map(beer => (

    <Link to={`/AllBeers/${beer._id}`}>
    <div key={beer._id}>
    <img src={beer.image_url} alt='beer' style={{height: '6rem'}}/>
    <h2>{beer.name}</h2> 
    <h4>{beer.tagline}</h4>
    <h6>Created by: {beer.contributed_by}</h6>
    </div>
    </Link>
    ))}
    </div>
  )
}

export default AllBeers