import React from 'react'
import { styled } from 'styled-components'

export default function ProgressCard({ title="title",currency="$",percentage="**",positive="1",value="**"}) {
  return (
    <Wrapper>
      <div className="row">
        <h4>{title}</h4>
        {
          positive?<img src="" alt="arrowUp"/>:<img src="" alt="arrowDown"/>
        }
        
      </div>
      <div className="row">
        <h4>{currency}{value}</h4>
        <h4>{positive?"+":"-"}{percentage}%</h4>
        
      </div>

    </Wrapper>
  )
}
export const Wrapper=styled.div`
width: 100%;
position: relative;
display: flex;
flex-direction: column;
gap: 20px;
padding:  20px 16px;
border-radius: 10px;
background-color: white;

.row{
  display: flex;
  justify-content: space-between;
  align-items: center;
}




`
