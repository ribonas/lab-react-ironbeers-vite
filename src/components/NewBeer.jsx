import {React, useState} from 'react'
import Navbar from './Navbar'
import axios from 'axios'

function NewBeer() {
    const [name, setName] = useState ('')
    const [tagline, setTagline] = useState ('')
    const [description, setDescription] = useState ('')
    const [first_brewed, setFirstBrewed] = useState ('')
    const [brewers_tips, setBrewersTips] = useState ('')
    const [attenuation_level, setAttenuationLevel] = useState ('')
    const [contributed_by, setContributedBy] = useState ('')

    const handleSubmit = async event => {
        event.preventDefault()
        const newBeer = { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by }

        const response = await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
        console.log(response) }
  return (
    <div>
    <Navbar />
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
    <label for="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="exampleInputPassword1" value={name} onChange={event => setName(event.target.value)}></input>
        </div>
        <div className="mb-3">
    <label for="tagline" className="form-label">Tagline</label>
    <input type="text" className="form-control" id="exampleInputPassword1" value={tagline} onChange={event => setTagline(event.target.value)}></input>
        </div>
        <div className="mb-3">
    <label for="description" className="form-label">Description</label>
    <input type="text" className="form-control" id="exampleInputPassword1" value={description} onChange={event => setDescription(event.target.value)}></input>
        </div>
        <div className="mb-3">
    <label for="firstBrewed" className="form-label">First brewed</label>
    <input type="text" className="form-control" id="exampleInputPassword1" value={first_brewed} onChange={event => setFirstBrewed(event.target.value)}></input>
        </div>
        <div className="mb-3">
    <label for="brewersTips" className="form-label">Brewers tips</label>
    <input type="text" className="form-control" id="exampleInputEmail1" value={brewers_tips} onChange={event => setBrewersTips(event.target.value)}></input>
        </div>
        <div className="mb-3">
    <label for="attenuationLevel" className="form-label">Attenuation level</label>
    <input type="number" className="form-control" id="exampleInputPassword1" value={attenuation_level} onChange={event => setAttenuationLevel(event.target.value)}></input>
        </div>
        <div className="mb-3">
    <label for="contributedBy" className="form-label">Contributed by</label>
    <input type="text" className="form-control" id="exampleInputPassword1" value={contributed_by} onChange={event => setContributedBy(event.target.value)}></input>
        </div>
    <button type="submit" className="btn btn-primary">Create New Beer</button>
        </form>
    </div>
  )
}

export default NewBeer