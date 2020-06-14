import axios from 'axios'

const apiUrl = `https://products-api-01.herokuapp.com`

export const getProducts = async () => {
    try {
        const response = await axios(`${apiUrl}/products`)
        const products = response.data
        return products
    } catch (error) {
        throw error
    }
}

export const getProduct = async id => {
    try {
        const response = await axios(`${apiUrl}/products/${id}`)
        const product = response.data
        return product
    } catch (error) {
        throw error
    }
}