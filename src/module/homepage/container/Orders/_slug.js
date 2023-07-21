import React from 'react'
import { useLocation } from 'react-router-dom';
import { styled } from 'styled-components'
import ProductCard from '../../../../core/common/ProductCard';

const cardContent=[
  {
    img:"",
    title:"Sashimi",
    price:"22",
    currency:"$"
  },
  {
    img:"",
    title:"Uagi - Grilled Eel",
    price:"15",
    currency:"$"
  },
  {
    img:"",
    title:"Soba - Buckwheat Noodles",
    price:"25",
    currency:"$"
  },
  {
    img:"",
    title:"Sashimi",
    price:"22",
    currency:"$"
  },
  {
    img:"",
    title:"Uagi - Grilled Eel",
    price:"15",
    currency:"$"
  },
  {
    img:"",
    title:"Soba - Buckwheat Noodles",
    price:"25",
    currency:"$"
  },

]


export default function _Slug({location}) {
  console.log(location)
  return (
    <Wrapper>
      <h1>{"location"}</h1>
      <div className='content-body'>
        {cardContent.map(ele=>(
          <div className="card-wrapper">
            <ProductCard {...ele}/>
          </div>
        ))}

      </div>
    </Wrapper>
  )
}

 const Wrapper=styled.div`
padding: 10px 20px 10px;
h1{
  padding:20px 0;
}
.content-body{
  display: flex;
  flex-direction: row;
  gap: 20px;
  position: relative;
  flex-wrap: wrap;
  .card-wrapper{
   width: calc((100% - 40px )/3);
  }
}

`
