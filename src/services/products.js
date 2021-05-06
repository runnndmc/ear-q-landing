import axios from 'axios'

const apiUrl = `https://products-api-01.herokuapp.com/api`

export const getProducts = async () => { //service to grab a group of products
  try {
    const response = await axios(`${apiUrl}/products`)
    const products = response.data
    return products
  } catch (error) {
    throw error
  }
}

export const getProduct = async id => { //service to grab a specific product
  try {
    const response = await axios(`${apiUrl}/products/${id}`)
    const product = response.data
    return product
  } catch (error) {
    throw error
  }
}
