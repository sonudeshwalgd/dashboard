import React from 'react'
import { styled } from 'styled-components'

export default function LatestOrdersRow({no=0,item="",quantity="",currency="",revenue="",profit=""}) {
  return (
    <Wrapper>
        <tr>{no}</tr>
        <tr>{item}</tr>
        <tr>{quantity}</tr>
        <tr>{currency}{revenue}</tr>
        <tr>{currency}{profit}</tr>
    </Wrapper>
  )
}

const Wrapper=styled.td`
position: relative;
width: 100%;

`
