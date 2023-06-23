import React,{useState} from 'react'
import style from "./UpdateProduct.module.css"
const UpdateProduct = () => {

    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const [company, setCompany] = useState("")

     const handleUpdateProduct= async()=>{
 console.log(name,price,category,company)
      
      }
  return (
    <div className={style.main}>
    <div className={style.container}>
   <h1>Update Product </h1>
   
     <input type='text' placeholder='Enter product Name ' value={name} onChange={(e)=>setName(e.target.value)}/>
   
     <input type='text' placeholder='Enter product price ' value={price} onChange={(e)=>setPrice(e.target.value)}/>
   
     <input type='text' placeholder='Enter product category ' value={category} onChange={(e)=>setCategory(e.target.value)}/>
  
     <input type='text' placeholder='Enter product company ' value={company} onChange={(e)=>setCompany(e.target.value)}/>
  
     <button onClick={handleUpdateProduct}>Update Product</button>
     </div>
 </div>
  )
}

export default UpdateProduct
