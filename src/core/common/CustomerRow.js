import React from 'react'
import { styled } from 'styled-components'

export default function CustomerRow({id="XXX1",name="Arlene McCoy",join_date="1 February 2021",total_visit="2",purchased_item="",total_spend="490.5.",currency="$"}) {
  return (
    <Wrapper>
        <tr>{id}</tr>
        <tr>{name}</tr>
        <tr>{join_date}</tr>
        <tr>{total_visit}</tr>
        <tr>
          {purchased_item
        }<br/>
        <p>See Detail</p>
        </tr>
        <tr>{currency}{total_spend}</tr>
    </Wrapper>
  )
}

const Wrapper=styled.td`
position: relative;
width: 100%;
p{
  color:#5541d7;
  font-weight: 600;
  padding-top: 14px;
}
tr{
  /* padding-left: 12px; */
  padding-right: 12px;
}

`
