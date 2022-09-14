import axios from "axios";
import React, { useEffect } from "react";
export default function Feature({ load }) {
  const [data , setData ] = React.useState([]);
  useEffect(() => {
    let fetch = async () => {
      let res = await axios.get(
        "http://localhost:5000/api/product/getProduct",
      )
      console.log("REs", res)
      setData(res.data.data)
    }
    fetch()
  }, [])


  const localCart = (data) => {
    debugger;
    let arr = [];
    if (JSON.parse(localStorage.getItem("carts")) === null) {
      arr.push(data);
      localStorage.setItem("carts", JSON.stringify(arr));
    } else {
      const localItems = JSON.parse(localStorage.getItem("carts"));
      localItems.map((item) => {
        if (item._id === data._id) {
          data.Quantity = item.Quantity + data.Quantity;
          return item;
        }

        return arr.push(item);
      });

      arr.push(data);
      localStorage.setItem("carts", JSON.stringify(arr));
      load(true);
    }
  };
  return (
    <>
      <div className="project ">
        <div className="container">
          <div className="row">
            <div className="col-md-12 ">
              <div>
                <h1 className="text-center">Features Product</h1>
              </div>
            </div>
            <div
              className="w-25  bg-warning mx-auto my-3"
              style={{ height: "5px" }}
            ></div>
          </div>
          <div>
            <div className="row">
              <div className="product_main ">
                {data.map((item, index) => {
                  return (
                    <div className="project_box " key={index}>
                      <div className="dark_white_bg">
                        <img src={`http://localhost:5000/uploads/${item.media}`} alt="#" />
                        <h3 className="text-warning">{item.product_price}</h3>
                      </div>
                      <button
                        className="btn btn-danger w-100 my-2"
                        onClick={() => localCart(item)}
                      >
                        Add To Cart
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="row mt-5">
              <button
                type="button"
                className="btn rounded-5 w-25  text-white mx-auto "
                style={{ backgroundColor: "#183661" }}
              >
                See More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
