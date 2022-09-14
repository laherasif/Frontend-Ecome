import React from "react";

export default function ShowOrder({ orders }) {
  return (
    <div>
      <div className="card">
        <div className="card-header">
          <strong className="card-title">Orders Table</strong>
        </div>
        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Fullname</th>
                <th scope="col">Email</th>
                <th scope="col">Address</th>
                <th scope="col">Amount</th>
              </tr>
            </thead>
            <tbody>
              {orders?.map((item , index ) => (
                <tr key={index}>
                  <th scope="row" >{index+ 1}</th>
                  <td>{item.fname}</td>
                  <td>{item?.email}</td>
                  <td>{item?.address}</td>
                  <td>{item?.amount}</td>
                </tr>

              ))}

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
