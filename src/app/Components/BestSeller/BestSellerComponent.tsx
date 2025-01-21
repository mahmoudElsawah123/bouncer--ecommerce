import React from 'react'
import SellerMenu from './SellerMenu'

const BestSellerComponent = async() => {
  const getBestCategory = await fetch('https://api.escuelajs.co/graphql',{
    method : 'POST',
    headers : {
      "Content-Type": "application/json"
    },
    body : JSON.stringify({
      query : `
      query {
        categories {
          id
          name
        }
      }
      `
    })
  })
  const category = await getBestCategory.json();
  const CategoryData = category.data?.categories
  return (
    <div className='container pt-lg pb-sm'>
      <SellerMenu Category={CategoryData}/>
    </div>
  )
}

export default BestSellerComponent
