import React, { useState, useEffect } from 'react';
import { stateCityMap } from "../../../public/data/stateCity";
import DisplayDetailsCard from './DisplayDetailsCard';
import { validateForm } from "../../validators/formValidators";
import "../../App.css"
const AddDetailsCard = ({ sendData, editIndex, updateData, details }) => {


    const [formData, setFormData] = useState({
        name: "",
        birthdate: "",
        age: "",
        language: [],
        gender: "",
        address: "",
        state: "",
        city: "",
        pincode: ""
    });

    const [record, setRecord] = useState([]);

    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (editIndex !== null) {
            setFormData(details[editIndex])
        }
    }, [editIndex, details])


    // handle text, radio, date
    const handleChange = (e) => {

        const { name, value } = e.target;

        if (name === "birthdate") {

            const age = countAge(value);

            setFormData({
                ...formData,
                birthdate: value,
                age: age
            })
        } else {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            });
        }
    };

    // handle language
    const handleLanguageChange = (e) => {
        const { name, value, checked } = e.target;

        if (checked) {
            setFormData({
                ...formData,
                [name]: [...formData[name], value]
            });
        } else {
            setFormData({
                ...formData,
                [name]: formData[name].filter(lang => lang !== value)
            });
        }
    };


   const handleSubmit = (e) => {

    e.preventDefault();

    const validationErrors = validateForm(formData);

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
        alert(Object.values(validationErrors).join("\n"));

        return;
    }

    if (editIndex !== null) {
        updateData(formData);
    } else {
        sendData(formData);
    }

    setRecord([...record, formData]);

    console.log(formData);

    setFormData({
        name: "",
        birthdate: "",
        age: "",
        language: [],
        gender: "",
        address: "",
        state: "",
        city: "",
        pincode: ""
    });

    setErrors({});
};


    const countAge = (birthdate) => {

        const today = new Date();
        const birth = new Date(birthdate);

        const age = today.getFullYear() - birth.getFullYear();

        return age;
    }

    return (

        <>
            <div className="row pt-1">
                <div className='col-xl-12 col-lg-12 col-sm-12 colmspadding'>
                    <div className='card mb-2'>
                        <div className="card-header">
                            <h6 className='mb-0'>
                                Add Details
                            </h6>
                        </div>

                        <div className='card-body'>

                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className='col-xl-3 col-lg-3 col-sm-3 colmspadding'>
                                        <div className="form-group">
                                            <label>
                                                Name
                                            </label>

                                            <input
                                                type='text'
                                                name="name"
                                                className='form-control'
                                                id='txtname'
                                                value={formData.name}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className='col-xl-2 col-lg-3 col-sm-3 colmspadding'>
                                        <div className="form-group">
                                            <label>
                                                Birthdate
                                            </label>

                                            <div className='input-group date'>
                                                <input
                                                    type='date'
                                                    className='form-control'
                                                    placeholder='dd/mm/yyyy'
                                                    id='txtbirthday'
                                                    name="birthdate"
                                                    value={formData.birthdate}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-xl-1 col-lg-3 col-sm-3 colmspadding'>
                                        <div className="form-group">
                                            <label>
                                                Age
                                            </label>

                                            <div className='input-group age'>
                                                <input
                                                    type='text'
                                                    className='form-control'
                                                    id='txtage'
                                                    name='age'
                                                    value={formData.age}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-3 col-lg-3 col-sm-3 colmspadding">
                                        <div className='form-group'>
                                            <label>
                                                Language Known
                                            </label>

                                            <div className=''>
                                                <div className='custom-control custom-checkbox top-0 d-inline-block me-2'>
                                                    <input
                                                        type='checkbox'
                                                        className='custom-control-input me-1'
                                                        id='engckbx'
                                                        name='language'
                                                        value='English'
                                                        checked={formData.language.includes("English")}
                                                        onChange={handleLanguageChange}
                                                    />
                                                    <label className="custom-control-label" htmlFor="engckbx">English</label>
                                                </div>

                                                <div className='custom-control custom-checkbox top-0 d-inline-block me-2'>
                                                    <input
                                                        type='checkbox'
                                                        className='custom-control-input me-1'
                                                        id='hinckbx'
                                                        name='language'
                                                        value='Hindi'
                                                        checked={formData.language.includes("Hindi")}
                                                        onChange={handleLanguageChange}
                                                    />
                                                    <label className="custom-control-label" htmlFor="hinckbx">Hindi</label>
                                                </div>

                                                <div className='custom-control custom-checkbox top-0 d-inline-block'>
                                                    <input
                                                        type='checkbox'
                                                        className='custom-control-input me-1'
                                                        id='gujckbx'
                                                        name='language'
                                                        value='Gujarati'
                                                        checked={formData.language.includes("Gujarati")}
                                                        onChange={handleLanguageChange}
                                                    />
                                                    <label className="custom-control-label" htmlFor="gujckbx">Gujarati</label>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className='col-xl-2 col-lg-3 col-sm-3 colmspadding'>
                                        <div className='form-group'>

                                            <label>
                                                Gender
                                            </label>

                                            <div>


                                                <div className="custom-control custom-radio top-0 d-inline-block me-3">
                                                    <input type="radio"
                                                        id="male"
                                                        name="gender"
                                                        className="custom-control-input me-1"
                                                        value="male"
                                                        checked={formData.gender === "male"}
                                                        onChange={handleChange}
                                                    />
                                                    <label className="custom-control-label font-weight-300 m-t-5" htmlFor="male">Male</label>
                                                </div>

                                                <div className="custom-control custom-radio top-0 d-inline-block ml-2">
                                                    <input
                                                        type="radio"
                                                        id="female"
                                                        name="gender"
                                                        className="custom-control-input me-1"
                                                        value="female"
                                                        checked={formData.gender === "female"}
                                                        onChange={handleChange}
                                                    />
                                                    <label className="custom-control-label font-weight-300 m-t-5" htmlFor="female">Female</label>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>


                                <div className='row pl-2 pr-2'>

                                    <div className="col-xl-4 col-lg-3 col-sm-3 colmspadding">
                                        <div className="form-group">
                                            <label>Address</label>
                                            <textarea
                                                className='form-control textareasize'
                                                name="address"
                                                value={formData.address}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-xl-2 col-lg-3 col-sm-3 colmspadding">
                                        <div className="form-group">
                                            <label>State</label>
                                            <select className="form-select py-1"
                                                data-size="5" data-style="lineheight16 bg-transfer"
                                                data-live-search="true" name="state" value={formData.state} onChange={handleChange}>
                                                <option value="">Select</option>
                                                {
                                                    Object.keys(stateCityMap).map((state, index) => (
                                                        <option key={index} value={state}>{state}</option>
                                                    ))
                                                }
                                            </select>

                                        </div>
                                    </div>

                                    <div className="col-xl-2 col-lg-3 col-sm-3 colmspadding">
                                        <div className="form-group">
                                            <label>City</label>
                                            <select className="form-select py-1" data-size="5" data-style="lineheight16 bg-transfer"
                                                data-live-search="true" name="city" value={formData.city} onChange={handleChange}>
                                                <option value="">Select</option>
                                                {
                                                    formData.state && stateCityMap[formData.state].map((city, index) => (
                                                        <option key={index} value={city}>{city}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-xl-1 col-lg-3 col-sm-3 colmspadding">
                                        <div className="form-group">
                                            <label>Pin Code</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="txtpincode"
                                                name="pincode"
                                                value={formData.pincode}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-xl-2 col-lg-3 col-sm-3 colmspadding mt-auto mb-auto">
                                        <div className="form-group">
                                            <button type="submit" className="btn btn-info text-white btn-padding">
                                                {
                                                    editIndex !== null ? "Update" : "Add"
                                                }
                                            </button>

                                            <button className="btn btn-success text-white btn-padding" style={{ display: "none" }}>Update</button>

                                            {/* <button className="btn btn-success text-white btn-padding" style={{ display: "none" }}>Reset</button> */}
                                        </div>
                                    </div>
                                </div>

                            </form>

                        </div>
                    </div >
                </div >
            </div >
        </>
    );
}

export default AddDetailsCard;

