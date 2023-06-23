import React, { useEffect, useState } from "react";
import style from "./UpdateProduct.module.css";
import { useParams, useNavigate } from "react-router-dom";

const UpdateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");

  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    getProductDetails();
  }, []);

  const getProductDetails = async () => {
    console.log(params);
    const response = await fetch(`http://localhost:7000/product/${params.id}`);
    const result = await response.json();
    setName(result.name);
    setPrice(result.price);
    setCategory(result.category);
    setCompany(result.company);
  };

  const handleUpdateProduct = async () => {
    console.log(name, price, category, company);
    const response = await fetch(`http://localhost:7000/product/${params.id}`, {
      method: "Put",
      body: JSON.stringify({ name, price, category, company }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    console.log(result);
    navigate("/");
  };
  return (
    <div className={style.main}>
      <div className={style.container}>
        <h1>Update Product </h1>

        <input
          type="text"
          placeholder="Enter product Name "
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter product price "
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter product category "
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter product company "
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />

        <button onClick={handleUpdateProduct}>Update Product</button>
      </div>
    </div>
  );
};

export default UpdateProduct;
