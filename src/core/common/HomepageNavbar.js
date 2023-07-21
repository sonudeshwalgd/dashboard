import React from "react";
import { styled } from "styled-components";



export default function HomepageNavbar() {
  const [showRequest360, setShowRequest360] = React.useState(false);

  return (
    <>
      <h1>Navbar</h1>


    </>
  );
}

const Wrapper=styled.div`
  max-width: 1198px;
  margin:  auto;
  padding: 20px 0;
  justify-content: space-between;
  display: flex;
  background-color: transparent;
  ul{
    display: flex;
    list-style: none;
    align-items: center;
    position: relative;
    &>li{
      margin: 0 20px;
      white-space: nowrap;
      font-size: 24px;
      font-weight: 600;
      &>a{
        color: white;
      text-decoration: none;

      }      

    }
  }

  .active{
    position: relative;
    display: block;
    &::after{
      position: absolute !important;
      bottom: -8px;
      left: 0;
      content: "";
      width: 100%;
      height: 4px;
      border-radius: 4px;
      background-color: white;
    }

  }

`
