//import { render } from "@testing-library/react";
import React from 'react'
import './Cartdata.css'

function Cartcomponent(props) {
    console.log(props)
   return<div key={props.Cartcomponent.id} className="col mb-5">
                <div className="card h-100">
                <div className="badge bg-dark text-white position-absolute" style={{top: '0.5 rem', right: '0.5rem'}}>{props.Cartcomponent.product}</div>
            <img className="card-img-top" src={props.Cartcomponent.image} alt="..." />
             <div className="card-body p-4">
                <div className="text-center">
                    <h5 className="fw-bolder">{props.Cartcomponent.productname}</h5>
                    <div className="d-flex justify-content-center small text-warning mb-2">
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>                
                        </div>
                    <span className="text-muted text-decoration-line-through">{props.Cartcomponent.offerprice}</span> 
                    {props.Cartcomponent.price}
                </div>
            </div>
           <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">{props.Cartcomponent.button}</a></div>
            </div>
        </div>
    </div>
            
}
export default Cartcomponent