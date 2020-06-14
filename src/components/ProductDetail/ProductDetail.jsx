import React, { Component } from 'react'
import './ProductDetail.css'
import Layout from '../shared/Layout'
import axios from 'axios'

class ProductDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            product: {
                name: '',
                description: '',
                imgURL: ''
            }
        }
    }

    async componentDidMount() {
        const { id } = this.props.match.params
        const response = await axios(`https://products-api-01.herokuapp.com/products/${id}`)
        const product = response.data
        this.setState({ product })
    }

    render() {
        const { product } = this.state
        return (
            <Layout>
                <div className="product-detail">
                    <img className="product-detail-image" src={product.imgURL} alt={product.name} />
                    <div className="detail">
                        <div className="name">{product.name}</div>
                        <div className="price">{`$${product.price}`}</div>
                        <div className="description">{product.description}</div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default ProductDetail