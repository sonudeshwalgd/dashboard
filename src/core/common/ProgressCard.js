import React from 'react'
import { styled } from 'styled-components'
import dashboardImages from '../../assets/images/dashboard'

export default function ProgressCard({ title="title",currency="$",percentage="**",positive="1",value="**"}) {
  return (
    <Wrapper>
      <div className="row">
        <h4>{title}</h4>
        {
          Boolean(+positive)?<img src={dashboardImages.arrowUp} key={"arrowUp"} alt="arrowUp"/>:<img src={dashboardImages.arrowDown} key={"arrowDown"} alt="arrowDown"/>
        }
        
      </div>
      <div className="row">
        <h4>{currency}{value}</h4>
        <h4 className={Boolean(+positive)?"up":"down"}>{positive?"+":"-"}{percentage}%</h4>
        
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
img{
  height: 20px ;
  padding-right: 10px;
}
.down{
  color: #f04461;
}
.up{
  color:#42bda1
}




`
