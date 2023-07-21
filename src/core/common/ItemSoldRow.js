import React from 'react'
import { styled } from 'styled-components'

export default function ItemSoldRow({img="",title="",item=""}) {
  return (
    <Wrapper>
      <div className="img-wrapper">
        <img src={img}/>
      </div>
      <h3 className='title'>{title}</h3>
      <h3 className='item'>{item} Item</h3>
    </Wrapper>
  )
}

const Wrapper=styled.td`
position: relative;
width: 100%;
display: flex;
align-items: center;
gap: 20px;
margin:8px 0;
color: #11142d;
.img-wrapper{
  height: 70px;
  width: 70px;
  border-radius: 10px;
  background-color: #e2e2ea;
}
.title{
  flex:1
}
.item{
  color: #92929d;
  font-weight: 600;
}


`
