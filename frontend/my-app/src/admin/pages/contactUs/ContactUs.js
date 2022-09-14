import React from "react";

export default function ContactUs({contact}) {
  return (
    <div className="card">
      <div className="card-header">
        <strong className="card-title">Basic Table</strong>
      </div>
      <div className="card-body">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Fullname</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            {contact?.map((item, index) => (
              <tr key={index}>
                <th scope="row" >{index + 1}</th>
                <td>{item.fname}</td>
                <td>{item?.email}</td>
                <td>{item?.address}</td>
                <td>{item?.desc}</td>
              </tr>

            ))}

          </tbody>
        </table>
      </div>
    </div>
  );
}
