import { render } from "@testing-library/react";
import React, { Component } from "react";

export class Cartcomponent extends Component{
    constructor(){
    super();
    this.state ={
          id:0,
    }
}
render(){

    return(
        <div className="col mb-5">
        <div className="card h-100">
        <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div>
            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
             <div className="card-body p-4">
                <div className="text-center">
                    <h5 className="fw-bolder">Fancy Product</h5>
                    <div class="d-flex justify-content-center small text-warning mb-2">
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                    </div>
                    <span class="text-muted text-decoration-line-through">$20.00</span> 
                    $40.00 - $80.00
                </div>
            </div>
           <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
            </div>
        </div>
    </div>
    )
}
}
export default Cartcomponent