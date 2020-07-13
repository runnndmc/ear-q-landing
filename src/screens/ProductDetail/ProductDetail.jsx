import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import './ProductDetail.css'
import Layout from '../../components/shared/Layout/Layout'
import { getProduct } from '../../services/products'

const ProductDetail = (props) => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    imgURL: ''
  })

  const fetchProduct = async () => {
    const { id } = useParams()
    const product = await getProduct(id)
    setProduct(product)
  }

  useEffect(() => {
    fetchProduct()
  }, []);

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

export default ProductDetail
