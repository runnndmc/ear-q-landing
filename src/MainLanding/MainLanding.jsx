import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import './MainLanding.css'
import Layout from '../components/shared/Layout/Layout'


import Products from '../Products/Products'
import { getProduct } from '../services/products'

const MainLanding = () => {
  // const [product, setProduct] = useState({
  //   name: '',
  //   description: '',
  //   imgURL: ''
  // })

  // const { id } = useParams()

  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     const product = await getProduct(id)
  //     setProduct(product)
  //   }
  //   fetchProduct()
  // }, [id])

  return (

    <Layout>
      <div className="main-landing">
        <img className="product-image" src="https://wizerlist.com/wp-content/uploads/2020/06/oticon-2.jpg" alt="Left and right silver hearing aid pieces" />
        <div className="detail">
          <div className="name">$500 off</div>
          <div className="price">Oticon More Technology</div>
          <div className="description">FOR A LIMITED TIME ONLY WHEN YOU SIGN UP</div>
        </div>
       </div>
    </Layout>
  )
}

export default MainLanding
