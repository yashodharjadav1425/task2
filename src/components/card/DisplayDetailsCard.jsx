import React from 'react';
import "../../App.css"


const DisplayDetailsCard = ({ details , setEditIndex, deleteData}) => {
    return (
        <div className="row">
            <div className="col-xl-12 col-lg-12 col-sm-12 colmspadding">
                <div className="card">
                    <div className="card-header">
                        <h6 className="mb-0">Display Details</h6>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-sm-12">
                                <table className="table table-bordered mb-0" id="sampleTable">
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Birthdate</th>
                                            <th scope="col">Age</th>
                                            <th scope="col">Language</th>
                                            <th scope="col">Gender</th>
                                            <th scope="col">Address</th>
                                            <th scope="col">State</th>
                                            <th scope="col">City</th>
                                            <th scope="col">Pin Code</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {
                                            details.map((item, index) => (
                                                <tr key={index}>
                                                    <td>{item.name}</td>
                                                    <td>{item.birthdate}</td>
                                                    <td>{item.age}</td>
                                                    <td>{item.language.join(", ")}</td>
                                                    <td>{item.gender}</td>
                                                    <td>{item.address}</td>
                                                    <td>{item.state}</td>
                                                    <td>{item.city}</td>
                                                    <td>{item.pincode}</td>
                                                    <td>
                                                        <button className="btn btn-success btn-padding me-2" onClick={() => setEditIndex(index)}>
                                                            Edit
                                                        </button>

                                                        <button className="btn btn-danger btn-padding ml-1" onClick={() => {
                                                            deleteData(index);
                                                        }}>
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DisplayDetailsCard;