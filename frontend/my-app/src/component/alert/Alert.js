import React from "react";
export default function Alert() {
  return (
    <>
      <div className="container-fluid alert alert-secondary rounded-0 h-50">
        <div className="row">
          <span className="col-sm-4 col-md-5">
            <span className="ms-5 fs-5">
              <i
                className="fa fa-phone fa-rotate-270 fa-rotate-left"
                aria-hidden="true"
              ></i>
              <i className="fa-thin fa-circle-phone"></i>
              <span className="ms-2 text-white">Call Us:+92-306-1747322</span>
            </span>
          </span>
          <span className="col-sm-4 col-md-4 ms-3">
            <span>
              <i className="fa fa-facebook fs-5" aria-hidden="true"></i>
              <i className="fa fa-twitter fs-5 ms-3" aria-hidden="true"></i>
              <i className="fa fa-linkedin fs-5 ms-3" aria-hidden="true"></i>
              <i className="fa fa-instagram fs-5 ms-3" aria-hidden="true"></i>
            </span>
          </span>
          <span className="col-sm-4 col-md-2 text-center">
            <span className="text-white">Open Hour:8Am-9Pm</span>
          </span>
        </div>
      </div>
    </>
  );
}
