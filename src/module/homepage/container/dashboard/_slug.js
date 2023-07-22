import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { styled } from 'styled-components'
import ProductCard from '../../../../core/common/ProductCard';
import { useMutation } from "react-query";
import { getProduct } from '../../../../server/dashboardAPI';
  

export default function _Slug() {
  const {state} =useLocation()
 return state?.slug.map(ele=><CategoryRow slugTitle={ele.toLowerCase()} key={ele}/>)
}

const CategoryRow=({slugTitle=""})=>{
  const [cardContent,setCardContent]=useState([])
  const {mutate}=useMutation("['dashboard','getProduct]",getProduct,{
    onSuccess:(res)=>{
      setCardContent(res.data)
    },
    onError:(err)=>{
      console.log(err)
    }
  })

  useEffect(()=>{
    mutate({category:slugTitle})
  },[slugTitle])
  return(
    <>
    {
      cardContent.length>0 &&
      <Wrapper>
        <h1>{slugTitle}</h1>
        <div className='content-body'>
          {cardContent.map(ele=>(
            <div key={ele?.title} className="card-wrapper">
              <ProductCard {...ele}/>
            </div>
          ))}
        </div>
      </Wrapper>
    }
    </>
  )
}

 const Wrapper=styled.div`
padding: 10px 20px 10px;
h1{
  padding:20px 0;
  text-transform: capitalize;
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
