import { React, useEffect, useState} from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function SingleBeer({random}) {
    const [beer, setBeer] = useState({

  })
  const {beerId} = useParams() 
  
  useEffect(() => {
    async function fetchBeer() {
      let response = {}
      random ? (response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`))
      :
      (response =
      await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
      ));
      setBeer(response.data);
    }
    fetchBeer();
  }, [])

  return (
    <div>
      <Navbar />
      <img src={beer.image_url} alt={beer.name} style={{height: '25rem'}}/>
      <h1>{beer.name}</h1>
      <h2>{beer.tagline}</h2>
      <h2>{beer.attenuation_level}</h2>
      <h4>{beer.first_brewed}</h4>
      <p>{beer.description}</p>
      <h6>{beer.contributed_by}</h6>
    </div>
  )
}

export default SingleBeer