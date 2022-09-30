import React from 'react'


function Productitem({brandname,productname,quantity,price,description}) {
  return (
    <div >
        {brandname}
        {productname}
        {quantity}
        {price}
        {description}
    </div>
  )
}

export default Productitem