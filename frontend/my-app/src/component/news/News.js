import React from "react";
import moment from "moment";
export default function News() {
  let date = moment().format("dddd, MMMM D YYYY, h:mm:ss A");
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3 className="mt-5">LATEST NEWS</h3>
            <div className="bg-warning" style={{ height: "5px" }}></div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mt-3">
            <img src="images/news_img1.jpg" />
          </div>
          <div className="col-md-6 my-5">
            <h4>Specimen book. It has survived not only five</h4>
            <p className="my-4">{date}</p>
            <div className="bg-dark" style={{ height: "1px" }}></div>
            <p className="text-break fw-normal lh-lg mt-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mt-3">
            <img src="images/news_img2.jpg" />
          </div>
          <div className="col-md-6 my-5">
            <h4>Specimen book. It has survived not only five</h4>
            <p className="my-4">{date}</p>
            <div className="bg-dark" style={{ height: "1px" }}></div>
            <p className="text-break fw-normal lh-lg mt-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mt-3">
            <img src="images/news_img3.jpg" />
          </div>
          <div className="col-md-6 my-5">
            <h4>Specimen book. It has survived not only five</h4>
            <p className="my-4">{date}</p>
            <div className="bg-dark" style={{ height: "1px" }}></div>
            <p className="text-break fw-normal lh-lg mt-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
