import React from 'react'
import { Link } from 'react-router-dom'
import beers from '../assets/beers.png'
import newBeer from '../assets/new-beer.png'
import randomBeer from '../assets/random-beer.png'


function Home() {
  return (
    <div>
        <Link to={'/AllBeers'}>
        <img src={beers} alt='beers'/>
        <h2>All Beers</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid</p>
        </Link>
        <Link to={'/NewBeer'}>
        <img src={newBeer} alt='newbeer'/>
        <h2>New Beer</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid</p>
        </Link>
        <Link to={'/RandomBeer'}>
        <img src={randomBeer} alt='random-beer'/>
        <h2>Random Beer</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid</p>
        </Link>
    </div>
  )
}

export default Home