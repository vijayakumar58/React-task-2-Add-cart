import { render } from "@testing-library/react";
import React, { Component } from 'react';

export class Cartcomponent extends Component{
    // constructor(){
    // super();
    //  this.props ={
    //             id:0,
    //          }
    //   }
render(){

    return(
        <div className="col mb-5">
        <div className="card h-100">
        <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">{this.props.data.product}</div>
            <img className="card-img-top" src={this.props.data.image} alt="..." />
             <div className="card-body p-4">
                <div className="text-center">
                    <h5 className="fw-bolder">{this.props.data.productname}</h5>
                    <div class="d-flex justify-content-center small text-warning mb-2">
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                    </div>
                    <span class="text-muted text-decoration-line-through">{this.props.data.offerprice}</span> 
                    {this.props.data.price}
                </div>
            </div>
           <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">{this.props.data.button}</a></div>
            </div>
        </div>
    </div>
    )
}
}
export default Cartcomponent