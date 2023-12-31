import React from 'react'
import { styled } from 'styled-components'

export default function ProductCard({ title="title",currency="$",price="**"}) {
  return (
    <Wrapper>
      <div className="img-wrapper">
        <img/>
      </div>
        <h4>{title}</h4>
        <p>{currency} {price}</p>
    </Wrapper>
  )
}
export const Wrapper=styled.div`
width: 100%;
position: relative;
display: flex;
flex-direction: column;
gap: 12px;
padding: 8px 12px 20px 12px;
border: 1px solid #ccc;
border-radius: 10px;
.img-wrapper{
  height:170px;
  background-color: #e2e2ea;
  border-radius: 10px;
  
}
img{
    border-radius: 10px;
    height: 170px;
    object-fit: cover;
    /* border:  1px solid; */
}
h4{
    padding-left: 10px;
}
p{
    padding-left: 10px;
    color:#42bda1;
    font-weight: 600;

}



`
