import React from 'react'
import { Main, Row } from '../components'
import requests from '../Request'

const Home = () => {
  return (
    <>
      <Main />
      <Row title='Up Coming' fetchURL={requests.reqestUpcoming} />
      <Row title='Popular' fetchURL={requests.requestPopular} />
      <Row title='Trending' fetchURL={requests.requestTrending} />
      <Row title='Top Rated' fetchURL={requests.requestTopRated} />
      <Row title='Horror' fetchURL={requests.requestHorror} />
    </>
  )
}

export default Home