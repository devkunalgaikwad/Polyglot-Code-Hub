import React from 'react'

function Product(props) {
  return (
    <>
        <h1>{props.name}</h1>
        <h2>{props.discription}</h2>
        <h3>${props.price}</h3>
    </>
  )
}

export default Product;