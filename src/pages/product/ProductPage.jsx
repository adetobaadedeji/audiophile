import React from 'react'
import { useParams } from 'react-router-dom'

const ProductPage = () => {
  let { productId } = useParams();
  console.log(productId)
  return (
    <div>
      
    </div>
  )
}

export default ProductPage
