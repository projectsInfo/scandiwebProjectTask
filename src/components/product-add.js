import React from 'react';
import { useState, useContext } from "react";
import { Link, Route } from 'react-router-dom';
import { AppContext } from "../Context";
import history from '../history';


const AddProduct = () => {
    //init data 
    const { insertProduct } = useContext(AppContext);
    const [myProfession, setMyProfession] = useState("DVD");
    const [newProduct, setNewProduct] = useState({});


    // Storing the Insert data Form Data.
    const addNewProduct = (e, field) => {
        setNewProduct({
            ...newProduct,
            [field]: e.target.value,
        });
    };


    // Inserting a new data into the Database.
    const submitProduct = (e) => {
        //   e.preventDefault();
        insertProduct(newProduct);
        e.target.reset();
    };

    return (
        <div className='body'>
            <div className='container' style={{ marginTop: 20 }}>
                <form id='product_form' style={{ marginTop: 50 }} method="POST" onSubmit={submitProduct}>
                    <div className="row">
                        <div className="col-9">
                            <p style={{ fontSize: 30 }}>Product Add</p>
                        </div>
                        <div className="col-3">
                            <button className='btn btn-success' onClick={() => history.push('/')} type='submit' style={{ width: 100, marginRight: 5 }}>Save</button>
                            <Link to="/" className="btn btn-primary" style={{ width: 100 }}>Cancel</Link>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div style={{ borderTopStyle: 'solid' }}></div>
                    </div>

                    <label className="form-lable mt-5" htmlFor="_name">SKU</label>
                    <input
                        id="sku"
                        className="form-control"
                        type="text"
                        onChange={(e) => addNewProduct(e, "item_sku")}
                        placeholder="Enter SKU"
                        autoComplete="off"
                        required
                    />
                    <label className="form-lable" htmlFor="_email">Name</label>
                    <input
                        id="name"
                        className="form-control"
                        type="text"
                        placeholder="Enter Name"
                        autoComplete="off"
                        required
                        onChange={(e) => addNewProduct(e, "item_name")}
                    />
                    <label className="form-lable" htmlFor="_email">Price ($)</label>
                    <input
                        id="price"
                        className="form-control"
                        type="number"
                        placeholder="Enter Price"
                        autoComplete="off"
                        required
                        onChange={(e) => addNewProduct(e, "item_price")}
                    />

                    <select id='productType' style={{ marginTop: 50, width: 200 }} className="form-control" onChange={(e) => {
                        const selectedType = e.target.value;
                        setMyProfession(selectedType); addNewProduct(e, selectedType)
                    }}>
                        <option value='DVD'>DVD</option>
                        <option value='Book'>Book</option>
                        <option value='Furniture'>Furniture</option>
                    </select>
                    <div className="col mt-3">

                        {myProfession === "DVD" && (
                            <>
                                <span>Size (MB)</span>
                                <input
                                    id="size"
                                    className="form-control"
                                    type="number"
                                    placeholder="Enter Size"
                                    autoComplete="off"
                                    required
                                    onChange={(e) => addNewProduct(e, "item_size")}
                                />
                            </>
                        )}

                        {myProfession === "Book" && (
                            <>
                                <span>Weight (KG)</span>
                                <input
                                    className="form-control"
                                    type="number"
                                    id="weight"
                                    placeholder="Enter Weight"
                                    autoComplete="off"
                                    required
                                    onChange={(e) => addNewProduct(e, "item_weight")}
                                />
                            </>
                        )}


                        {myProfession === "Furniture" && (
                            <>
                                <span>Height (CM)</span>
                                <input
                                    id="height"
                                    className="form-control"
                                    type="number"
                                    placeholder="Enter Height"
                                    autoComplete="off"
                                    required
                                    onChange={(e) => addNewProduct(e, "item_height")}
                                />
                                <span>Width (CM)</span>
                                <input
                                    id="width"
                                    className="form-control"
                                    type="number"
                                    placeholder="Enter Width"
                                    autoComplete="off"
                                    required
                                    onChange={(e) => addNewProduct(e, "item_width")}
                                />
                                <span>Length (CM)</span>
                                <input
                                    id="length"
                                    className="form-control"
                                    type="number"
                                    placeholder="Enter Length"
                                    autoComplete="off"
                                    required
                                    onChange={(e) => addNewProduct(e, "item_length")}
                                />
                            </>
                        )}


                    </div>
                </form>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-10">
                        <div className="footer col-10  text-center py-3" style={{ borderTopStyle: 'solid' }}>Scandiweb Test assignment</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AddProduct;