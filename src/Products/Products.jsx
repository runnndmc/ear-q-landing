import React, { useState, useEffect } from 'react'
import './Products.css'

import Product from '../components/Product/Product'
import Search from '../components/Hero/Hero'


import Layout from '../components/shared/Layout/Layout'
import { getProducts } from '../services/products'

const Products = () => {
  const [allProducts, setAllProducts] = useState([]) //grab all products
  const [queriedProducts, setQueriedProducts] = useState([])


  useEffect(() => { 
    const fetchProducts = async () => {//all axios calls abstracted to a file
      const products = await getProducts() // imorted from services file that does all axios calls --> import { getProducts } from '../../services/products'
      setAllProducts(products) // set it inside of state 
      setQueriedProducts(products) 
    }
    fetchProducts()
  }, [])

  const handleSearch = event => { 
    const newQueriedProducts = allProducts.filter(product => product.name.toLowerCase().includes(event.target.value.toLowerCase()))
    setQueriedProducts(newQueriedProducts)
  }
  const handleSubmit = event => event.preventDefault()

  const productsJSX = queriedProducts.map((product, index) =>
    <Product _id={product._id} name={product.name} imgURL={product.imgURL} price={product.price} key={index} /> //resides in the components folder
  )

  return (
    <Layout> {/* highlighing props.children  wrapper to all -- components / shared*/}
      <Search onSubmit={handleSubmit} onChange={handleSearch} /> {/* //abstracted into its own component */}
      <div className="products">
        {productsJSX} 
      </div>
    </Layout>
  )
}


export default Products
