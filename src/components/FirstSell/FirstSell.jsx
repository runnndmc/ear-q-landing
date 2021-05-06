import React from 'react'

import './FirstSell.css'
import Layout from '../shared/Layout/Layout'

const FirstSell = () => {

  return (
    <Layout>
      <div className="main-landing">
        <img className="product-image" src="https://wizerlist.com/wp-content/uploads/2020/06/oticon-2.jpg" alt="Left and right silver hearing aid pieces" />
        <div className="detail">
          <div className="name">Get $500 off</div>
          <div className="price">Oticon More Technology</div>
          <div className="description">FOR A LIMITED TIME ONLY WHEN YOU SIGN UP</div>
        </div>
       </div>
    </Layout>
  )
}

export default FirstSell
