import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Lead Solutions Assistant</title>
        <meta property="og:title" content="Lead Solutions Assistant" />
      </Helmet>
    </div>
  )
}

export default Home
