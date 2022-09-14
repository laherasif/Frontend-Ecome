import React from "react";
import Layout from "../../layout/Layout";

export default function Category() {
  return (
    <Layout>
      <div className="card w-50 mx-auto">
        <div className="card-header">
          <p className="card-title text-center text-dark fs-4">CATEGORY</p>
        </div>
        <div className="card-body">
          <div className="container bg-white box-shadow-sm rounded ms-0">
            <form className="row">
              <div className="col-md-6">
                <label class=" form-label" for="add_category">
                  ADD CATEGORY
                </label>
                <input
                  id="add_category"
                  name="add_category"
                  placeholder="ADD CATEGORY"
                  class="form-control"
                  required=""
                  type="text"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
