import React, { useEffect, useState } from "react";
import Layout from "../../layout/Layout";
import axios from "axios";
import { Navigate, useParams } from "react-router-dom";
export default function AddProduct() {

  let initialState = {
    id: "",
    product_id: "",
    product_name: "",
    product_price: "",
    product_categorie: "",
    available_quantity: "",
    product_description: "",
    stock_alert: "",
    file: "",
  }

  const parms = useParams().id
  const [message, setMessage] = useState('')
  const [addproduct, setAddProduct] = React.useState(initialState);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const ChangeFile = (e) => {
    setAddProduct((prev) => ({
      ...prev,
      file: e.target.files[0],
    }));
  };

  let {
    id,
    product_id,
    product_name,
    product_price,
    product_categorie,
    available_quantity,
    product_description,
    stock_alert,
    file,
  } = addproduct;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let formData = new FormData();
      formData.append("product_id", product_id);
      formData.append("product_name", product_name);
      formData.append("product_price", product_price);
      formData.append("product_categorie", product_categorie);
      formData.append("available_quantity", available_quantity);
      formData.append("product_description", product_description);
      formData.append("stock_alert", stock_alert);
      formData.append("file", file);

      let res = await axios.post(
        "http://localhost:5000/api/product/register",
        formData
      );
      if (res === false) {
      } else {
        setAddProduct(initialState)
        setMessage(res.data.message)
      }
    } catch (error) { }
  };



  useEffect(() => {
    let fetch = async () => {
      let res = await axios.post(
        `http://localhost:5000/api/product/getProductSingle/${parms}`,
      )
      // setProducts(res.data.data)
      console.log("Res", res)
      let data = {
        id: res.data.data._id,
        product_id: res.data.data.ProductId,
        product_name: res.data.data.ProductName,
        product_price: res.data.data.product_price,
        product_categorie: res.data.data.Catagory,
        available_quantity: res.data.data.Quantity,
        product_description: res.data.data.Description,
        stock_alert: res.data.data.stock,
      }

      setAddProduct(data)


    }

    fetch();
    if (message !== "") {
      setTimeout(() => {
        setMessage('')
      }, 2000);
    }
  }, [message])




  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      

      let data = {
        id,
        product_id,
        product_name,
        product_price,
        product_categorie,
        available_quantity,
        product_description,
        stock_alert,
        // file,
      }

      let res = await axios.post(
        `http://localhost:5000/api/product/updateProduct`,
        data
      );
      console.log("res", res);
      if (res === false) {
      } else {
        setMessage(res.data.message)
         
      }
    } catch (error) { }
  };









  return (
    <Layout>
      <div className="card w-50 mx-auto">
        {message && <div className="alert alert-success" >{message}</div>}
        {message && (
          <Navigate to="/viewproduct" replace={true} />
        )}
        <div className="card-header">
          <p className="card-title text-center text-dark fs-4">
            {parms ? "Update Product" : "Add Product"}
          </p>
        </div>
        <div className="card-body">
          <div className="container bg-white box-shadow-sm rounded ms-0">
            <form className="row">
              <div className="col-md-6">
                <label class=" form-label" for="product_id">
                  PRODUCT ID
                </label>
                <input
                  id="product_id"
                  name="product_id"
                  onChange={handleChange}
                  value={product_id}
                  placeholder="PRODUCT ID"
                  class="form-control"
                  required=""
                  type="text"
                />
              </div>
              <div className="col-md-6">
                <label class=" form-label" for="product_name">
                  PRODUCT NAME
                </label>
                <input
                  id="product_name"
                  name="product_name"
                  onChange={handleChange}
                  value={product_name}
                  placeholder="PRODUCT NAME"
                  class="form-control"
                  required=""
                  type="text"
                />
              </div>
              <div className="col-md-6">
                <label class=" form-label" for="product_price">
                  PRODUCT PRICE
                </label>
                <input
                  id="product_price"
                  name="product_price"
                  onChange={handleChange}
                  value={product_price}
                  placeholder="PRODUCT PRICE"
                  class="form-control"
                  required=""
                  type="text"
                />
              </div>
              <div className="col-6">
                <label class=" form-label" for="product_categorie">
                  PRODUCT CATEGORY
                </label>
                <select
                  id="product_categorie"
                  name="product_categorie"
                  onChange={handleChange}
                  value={product_categorie}
                  class="form-control"
                >
                  <option>Shirts</option>
                  <option>Shoes</option>
                </select>
              </div>
              <div className="col-md-12">
                <label class=" form-label" for="available_quantity">
                  AVAILABLE QUANTITY
                </label>
                <input
                  id="available_quantity"
                  name="available_quantity"
                  onChange={handleChange}
                  value={available_quantity}
                  placeholder="AVAILABLE QUANTITY"
                  class="form-control"
                  required=""
                  type="text"
                />
              </div>
              <div className="col-md-12">
                <label class="form-label" for="product_description">
                  PRODUCT DESCRIPTION
                </label>
                <textarea
                  class="form-control"
                  id="product_description"
                  name="product_description"
                  onChange={handleChange}
                  value={product_description}
                ></textarea>
              </div>
              <div className="col-md-6">
                <label class="from-label" for="percentage_discount">
                  STOCK ALERT
                </label>
                <input
                  id="stock_alert"
                  name="stock_alert"
                  onChange={handleChange}
                  value={stock_alert}
                  placeholder="STOCK ALERT"
                  class="form-control"
                  required=""
                  type="text"
                />
              </div>

              <div className="col-md-6 my-2">
                <label class="form-label" for="filebutton">
                  main_image
                </label>

                <input
                  id="picture"
                  name="picture"
                  onChange={ChangeFile}
                  accept="images/*"
                  class="input-file"
                  type="file"
                />
              </div>
              <div className="col-md-12">
                <button
                  id="singlebutton"
                  name="singlebutton"
                  class="btn btn-primary w-100"
                  onClick={(e) => parms ? handleUpdate(e) : handleSubmit(e)}
                >
                  {parms ? "Update Data" : "ADD DATA"}

                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
