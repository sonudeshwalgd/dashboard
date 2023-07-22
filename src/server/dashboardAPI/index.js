import axios from "axios"
export const addProduct=(data)=>{
      try {
      return  axios.post("https://graphql-inginix-server.vercel.app/v1/api/add-product",data,{
            headers:{
              "Content-Type":"application/json"
            }
          })
        
      } catch (error) {
        console.log(error.message)
      }
    
} 
export const getProduct=(data)=>{
      try {
      return  axios.post("https://graphql-inginix-server.vercel.app/v1/api/get-product",data,{
            headers:{
              "Content-Type":"application/json"
            }
          })
        
      } catch (error) {
        console.log(error.message)
      }
    
} 