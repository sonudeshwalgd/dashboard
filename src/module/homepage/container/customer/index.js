import React from 'react'
import { styled } from 'styled-components'

export default function Index() {
  return (
    <Wrapper>
        <div className="search">
          <img src={dashboardImages.search} alt="" />
            <input placeholder="Search Here..." type="text" />
        </div>
    </Wrapper>
  )
}

const Wrapper=styled.div`
position: relative;
width: 100%;
margin: 30px;
 flex:1;
 background-color: white;
 border-radius: 10px;
 position: relative;
 padding-top: 10px;
 .search{
    margin: 20px;
    flex: 1;
    position: relative;
    flex-direction: row;
    display: flex;
    background-color: #f7f7fc;
    border-radius: 10px;
    padding-left: 20px;
    /* border: solid; */
    /* margin-top: 20px !important; */
    input{
      background-color: #f7f7fc;
      border: none;
      outline: none;
      width: 100%;
      padding: 12px;
      &::placeholder{
      color: #9a9ab0;
      font-weight: 500;
    }
    }
    
  }

`
