import React, { useEffect, useState } from 'react'
import style from "./ProductList.module.css"
import { Link } from 'react-router-dom'

const ProductList = () => {
    const [product,setProduct] = useState([])

    useEffect(()=>{
      getProduct()
    },[])

    async function getProduct(){
     const data = await fetch("http://localhost:7000/products")
     const result = await data.json()
     setProduct(result)
     console.log(result)
    }

    const productDelete=async(_id)=>{
     const data = await fetch(`http://localhost:7000/product/${_id}`,{
        method:"Delete"
     })
     const result = await data.json()
     if(result){
        getProduct()
     }
    }
  return (
    <div className={style.productList}>
    <h3> ProductList</h3> 
    <ul>
        <li>S.No</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>company</li>
        <li>Operation</li>
    </ul>
    {
        product.map((item,index)=>{
            return( <ul key={index}>
                 <li>{index+1}</li>
                 <li>{item.name}</li>
                 <li>{item.price}</li>
                 <li>{item.category}</li>
                 <li>{item.company}</li>
                 <li>
                    <button onClick={()=>productDelete(item._id)}>Delete</button>
                    <Link to ={"/update/"+item._id}>Update</Link>
                 </li>
                 
            </ul>
        )})
    }
    </div>
  )
}

export default ProductList
