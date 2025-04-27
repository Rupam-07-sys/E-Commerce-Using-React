import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/Popular/popular'
import Offer from '../components/offers/offer'
import NewCollections from '../components/new_collections/NewCollections'
import NewsLetter from '../components/NewsLetter/NewsLetter'


function Shop() {
  return (
    <div>
      <Hero />
      <Popular/>
      <Offer/>
      <NewCollections/>
      <NewsLetter/>
    </div>
  )
}

export default Shop