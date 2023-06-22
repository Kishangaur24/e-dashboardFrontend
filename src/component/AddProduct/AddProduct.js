import React,{useState} from 'react'
import style from "./AddProduct.module.css"
const AddProduct = () => {
   const [name, setName] = useState("")
   const [price, setPrice] = useState("")
   const [category, setCategory] = useState("")
   const [company, setCompany] = useState("")
   const [error, setError] = useState(false)
    const handleAddProduct= async()=>{

     if(!name || !price || !category || !company){
      setError(true)
        return false
     }

        
        console.log(name,price,category,company)
        const userId = JSON.parse(localStorage.getItem("user"))._id;
        let result = await fetch("http://localhost:7000/add-product",{
            method:"post",
            body:JSON.stringify({name,price,category,company,userId}),
            headers:{
                "Content-Type":"application/json"
            }
        })
        result = await result.json()
        console.log(result)
    }
  return (
    <div className={style.main}>
       <div className={style.container}>
      <h1>Add Product here</h1>
      
        <input type='text' placeholder='Enter product Name ' value={name} onChange={(e)=>setName(e.target.value)}/>
       {error && !name && <span className={style.invalid}>Enter valid name</span>}
        <input type='text' placeholder='Enter product price ' value={price} onChange={(e)=>setPrice(e.target.value)}/>
        {error && !price && <span className={style.invalid}>Enter valid price</span>}
        <input type='text' placeholder='Enter product category ' value={category} onChange={(e)=>setCategory(e.target.value)}/>
        {error && !category && <span className={style.invalid}>Enter valid category</span>}
        <input type='text' placeholder='Enter product company ' value={company} onChange={(e)=>setCompany(e.target.value)}/>
        {error && !company && <span className={style.invalid}>Enter valid company name</span>}
        <button onClick={handleAddProduct}>Add Product</button>
        </div>
    </div>
  )
}

export default AddProduct
