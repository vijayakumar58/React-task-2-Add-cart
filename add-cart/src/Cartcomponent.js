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
        <div class="col mb-5">
        <div class="card h-100">
            <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
             <div class="card-body p-4">
                <div class="text-center">
                    <h5 class="fw-bolder">Fancy Product</h5>
                    $40.00 - $80.00
                </div>
            </div>
           <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">View options</a></div>
            </div>
        </div>
    </div>
    )
}
}
export default Cartcomponent