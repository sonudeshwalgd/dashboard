import axios from "axios"
export const formSubmit=(data)=>{
      try {
      return  axios.post("http://localhost:5503/v1/api/form",data,{
            headers:{
              "Content-Type":"application/json"
            }
          })
        
      } catch (error) {
        console.log(error.message)
      }
    
} 