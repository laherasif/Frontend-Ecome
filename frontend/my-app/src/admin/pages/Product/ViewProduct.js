import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../layout/Layout";

export default function ViewProduct() {

  const [products, setProducts] = useState([])
  const [message, setMessage] = useState('')


  useEffect(() => {
    let fetch = async () => {
      let res = await axios.get(
        "http://localhost:5000/api/product/getProduct",
      )
      setProducts(res.data.data)

    }

    fetch()

    if (message !== "") {
      setTimeout(() => {

        setMessage('')
      }, 5000);
    }
  }, [message])


  const handleDel = async (id) => {
    let res = await axios.get(
      `http://localhost:5000/api/product/deleteproduct/${id}`,
    )
    setMessage(res.data.message)
  }



  return (
    <Layout>
      <div className="card">
        {message && <div className="alert alert-success" >{message}</div>}
        <div className="card-body">
          <table className="table table-bordered table-info">
            <thead>
              <tr>
                <th>#</th>
                <th>Product Id</th>
                <th>Product Name</th>
                <th>Product Price</th>
                <th>Product Category</th>
                <th>Available Quantity</th>
                <th>Product Description</th>
                <th>Stock Alert</th>
                <th>Main Image</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((item, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{item.ProductId}</td>
                  <td>{item.ProductName}</td>
                  <td>{item.product_price}</td>
                  <td>{item.Catagory}</td>
                  <td>{item.Quantity}</td>
                  <td>{item.Description}</td>
                  <td>{item.stock}</td>
                  <td>
                    <img src={`http://localhost:5000/uploads/${item.media}`} width="120px" />
                  </td>

                  <td>
                    <span style={{ display: 'flex' }}>
                      <Link to={`/addproduct/${item._id}`}>

                        <div className="cursor-pointer">
                          <i className="fa fa-edit"></i>

                        </div>
                      </Link>

                      <div className="me-2 cursor-pointer" onClick={() => handleDel(item._id)}>
                        <i className="fa fa-trash"></i>
                      </div>
                      {/* <button className="btn btn-info"></button> */}
                      {/* <button className="btn btn-info">Update</button> */}
                    </span>
                  </td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
