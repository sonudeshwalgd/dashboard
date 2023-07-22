import Autocomplete from '@mui/joy/Autocomplete';
import FormLabel from "@mui/joy/FormLabel";
import React from 'react'
import { styled } from 'styled-components'

export default function CommonInput({id="name",title="ID",placeholder="Enter your ID",type="text",dropdownList=[]}) {

    const CompanySize=()=>{
        return(
            <Autocomplete
            placeholder="Company size"
            options={dropdownList}
            sx={{ width: "100%" ,padding:"10px",fontSize:"17px" ,marginTop:"8px",background:"#f7f7fc"}}
            name="company_size"
            />
            )
        }
  return (
    <Wrapper>

        {
            type=="dropdown"?
            <>
            <label >{title}</label>
            <CompanySize/>
            </>:<>
            <div className="input-wrapper">
            <label htmlFor={id} >{title}</label>
            <input id={id} className={type=="textarea"?"textarea":""}  placeholder={placeholder} type={type} />
            </div>
            </>
        }

    </Wrapper>
  )
}

// company component start


// company component end

const Wrapper=styled.div`
    position: relative;
    width: 100%;
    .input-wrapper{
        display: flex;
        border-radius: 10px;
        flex-direction: column;
        overflow: hidden;
        input{
          background-color: #f7f7fc;
          border: 1px solid #dbd7f4;
          outline: none;
          border-radius: 8px;
          width: 100%;
          padding: 18px;
          padding-left:26px;
          font-size: 17px;
    
          &::placeholder{
          color: #9a9ab0;
          font-weight: 500;
        }
        }

    }
    label{
        padding: 5px 20px;
        font-weight: 600;
    }
    .textarea{
        height: 120px ;
        align-items: flex-start;
        display: block;
    }
    
`
