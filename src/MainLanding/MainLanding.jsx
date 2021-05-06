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
      
      <h3>Main Landing</h3>

      {/* <div className="product-detail">
        <img className="product-detail-image" src={product.imgURL} alt={product.name} />
        <div className="detail">
          <div className="name">{product.name}</div>
          <div className="price">{`$${product.price}`}</div>
          <div className="description">{product.description}</div>
        </div>
      </div> */}
    </Layout>
  )
}

export default MainLanding
