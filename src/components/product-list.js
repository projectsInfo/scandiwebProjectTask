import React from "react";
import { Link, Route } from 'react-router-dom';

import { useContext, useState } from "react";
import { AppContext } from "../Context";


const ProductList = () => {

    // const [isChecked] = useState([]);
    const { products, deleteProduct } = useContext(AppContext);

    const handleChange = (e) => {
        let seletedCase = e.target.value;
    }

    const getData = () => {
        let data = localStorage.getItem('myData');
        return data;
    }

    const deleteConfirm = (id) => {
        // if (window.confirm("Are you sure?")) {
        deleteProduct(id);
        // }
    };

    return (
        <div>
            <div className="container">
                <form style={{ marginTop: 50, marginBottom: 100 }}>
                    <div className="row">
                        <div className="col-8">
                            <p style={{ fontSize: 30 }}>Product List</p>
                        </div>
                        <div className="col-4">
                            <Link to="/addproduct" className="btn btn-primary" style={{ marginRight: 5, width: 150 }}>ADD</Link>
                            <button className='btn btn-danger' id="delete-product-btn" onClick={() => deleteProduct(10)} style={{ width: 150, marginRight: 5 }}>MASS DELETE</button>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div style={{ borderTopStyle: 'solid' }}></div>
                    </div>
                    <div className="row mt-5">
                        {products.map(({ id, sku, name, price, type, attribute }) => {
                            return type === 'DVD' ? (
                                <div className="col-2" key={id}>
                                    <div className="card" >
                                        <input type="checkbox" className="delete-checkbox" value={id} onChange={(e) => handleChange(e)} style={{ marginLeft: 20, marginTop: 20 }}></input>
                                        <div className="card-body" style={{ textAlign: "center" }}>
                                            <h5 className="card-title">{sku}</h5>
                                            <p className="card-text">{name}</p>
                                            <p className="card-text">{price} $</p>
                                            <p className="card-text">Size: {attribute} MB</p>
                                        </div>
                                    </div>
                                </div>
                            ) : ''
                        })}
                    </div>
                    <div className="row mt-5">
                        {products.map(({ id, sku, name, price, type, attribute }) => {
                            return type === 'Book' ? (
                                <div className="col-2" key={id}>
                                    <div className="card" >
                                        <input type="checkbox" className="delete-checkbox" value={id} onChange={e => handleChange(e)} style={{ marginLeft: 20, marginTop: 20 }}></input>
                                        <div className="card-body" style={{ textAlign: "center" }}>
                                            <h5 className="card-title">{sku}</h5>
                                            <p className="card-text">{name}</p>
                                            <p className="card-text">{price} $</p>
                                            <p className="card-text">Weight: {attribute} KG</p>
                                        </div>
                                    </div>
                                </div>
                            ) : ''
                        })}
                    </div>
                    <div className="row mt-5">
                        {products.map(({ id, sku, name, price, type, attribute }) => {
                            return type === 'Furniture' ? (
                                <div className="col-2" key={id}>
                                    <div className="card">
                                        <input type="checkbox" className="delete-checkbox" value={id} onChange={e => handleChange(e)} style={{ marginLeft: 20, marginTop: 20 }}></input>
                                        <div className="card-body" style={{ textAlign: "center" }}>
                                            <h5 className="card-title">{sku}</h5>
                                            <p className="card-text">{name}</p>
                                            <p className="card-text">{price}$</p>
                                            <p className="card-text">Dimention: {attribute}</p>
                                        </div>
                                    </div>
                                </div>
                            ) : ''
                        })}
                    </div>
                </form>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="footer col-10  text-center py-3" style={{ borderTopStyle: 'solid' }}>Scandiweb Test assignment</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductList;