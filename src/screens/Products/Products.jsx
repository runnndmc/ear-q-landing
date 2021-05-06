import React, { useState, useEffect } from 'react'
import './Products.css'

import Product from '../../components/Product/Product'
import Search from '../../components/Search/Search'
import { AZ, ZA, lowestFirst, highestFirst } from "../../utils/sort"
import Sort from '../../components/Sort/Sort'
import Layout from '../../components/shared/Layout/Layout'
import { getProducts } from '../../services/products'

const Products = () => {
  const [allProducts, setAllProducts] = useState([]) //grab all products
  const [queriedProducts, setQueriedProducts] = useState([])
  const [sortType, setSortType] = useState([])

  useEffect(() => { // to fetch all of the products 
    const fetchProducts = async () => {//all axios calls abstracted to a file
      const products = await getProducts() // imorted from services file that does all axios calls --> import { getProducts } from '../../services/products'
      setAllProducts(products) // set it inside of state 
      setQueriedProducts(products) // set it indise of the queried products state 
    }
    fetchProducts()
  }, [])

  const handleSort = type => { //sourced from js file utils/sort
    setSortType(type)
    switch (type) {
      case "name-ascending":
        setQueriedProducts(AZ(queriedProducts))
        break
      case "name-descending":
        setQueriedProducts(ZA(queriedProducts))
        break
      case "price-ascending":
        setQueriedProducts(lowestFirst(queriedProducts))
        break
      case "price-descending":
        setQueriedProducts(highestFirst(queriedProducts))
        break
      default:
        break
    }
  }

  const handleSearch = event => { 
    const newQueriedProducts = allProducts.filter(product => product.name.toLowerCase().includes(event.target.value.toLowerCase()))
    setQueriedProducts(newQueriedProducts, () => handleSort(sortType))
  }//update new state for queried products -- once thats updated then use that state to get to handle sort

  const handleSubmit = event => event.preventDefault()

  const productsJSX = queriedProducts.map((product, index) =>
    <Product _id={product._id} name={product.name} imgURL={product.imgURL} price={product.price} key={index} /> //resides in the components folder
  )

  return (
    <Layout> {/* highlighing props.children  wrapper to all -- components / shared*/}
     <h3>hello dayna</h3>
      <Search onSubmit={handleSubmit} onChange={handleSearch} /> {/* //abstracted into its own component */}
      <Sort onSubmit={handleSubmit} onChange={handleSort} />
      <div className="products">
        {productsJSX} 
      </div>
    </Layout>
  )
}


export default Products
