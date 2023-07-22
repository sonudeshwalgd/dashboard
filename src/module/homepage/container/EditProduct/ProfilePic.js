import React from 'react'
import { styled } from 'styled-components'

export default function ProfilePic() {
  return (
    <Wrapper>
        <div className="img-wrapper">
            <img/>
        </div>
        <div className="text-wrapper">
            <h3>Select Youy product picture</h3>
            <input type="file" id="update" />
            <label className='primary-btn' htmlFor="update">
                Browser
            </label>
        </div>
    </Wrapper>
  )
}

const Wrapper=styled.form`
position: relative;
width: 100%;
display: flex;
justify-content: row;
gap: 18px;
.img-wrapper{
    height: 100px;
    width: 100px;
    border-radius: 10px;
    background-color: #e2e2ea;
}
.text-wrapper{
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    h3{
        padding-top: 20px;
    }

}


`
