import { Component } from "react";
import Cartcomponent from "./Cartcomponent";

export class Carddata extends Component {
    constructor(){
        super();
    let data=[
        {
         product:"",
         productEnable:false,
         image:"https://media.istockphoto.com/id/502129687/photo/decorative-cosmetics-for-makeup.jpg?s=1024x1024&w=is&k=20&c=wGmovDLR3scv2NWrha6VGUO82qn_cWwxBh1ljemwo-0=",
         productname:"Fancy Products",
         rating:"",
         ratingEnable:false,
         offerprice:"",
         offerpriceEnable:false,
         price:"$40.00-$80.00",
         button:"View Options"
        },
        {
          product:"sale",
          productEnable:true,
          image:"https://m.media-amazon.com/images/I/71u3QxI3QvL._UY695_.jpg",
          productname:"Special Item",
          rating:"",
          ratingEnable:true,
          offerprice:"$20.00",
          offerpriceEnable:true,
          price:"$18.00",
          button:"Add To Cart"
         },
         {
          product:
          productEnable:
          image:
          productname:
          productnameEnable:
          rating:
          ratingEnable:
          offerprice:
          offerpriceEnable:
          price:
          button:
         },
         {
          product:
          productEnable:
          image:
          productname:
          productnameEnable:
          rating:
          ratingEnable:
          offerprice:
          offerpriceEnable:
          price:
          button:
         },
         {
          product:
          productEnable:
          image:
          productname:
          productnameEnable:
          rating:
          ratingEnable:
          offerprice:
          offerpriceEnable:
          price:
          button:
         },
         {
          product:
          productEnable:
          image:
          productname:
          productnameEnable:
          rating:
          ratingEnable:
          offerprice:
          offerpriceEnable:
          price:
          button:
         },
         {
          product:
          productEnable:
          image:
          productname:
          productnameEnable:
          rating:
          ratingEnable:
          offerprice:
          offerpriceEnable:
          price:
          button:
         },
         {
          product:
          productEnable:
          image:
          productname:
          productnameEnable:
          rating:
          ratingEnable:
          offerprice:
          offerpriceEnable:
          price:
          button:
         }
    ]
    }
    render (){
        return(
            <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
              <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                {/* <Card card={data[0]}/>
                <Card card={data[1]}/>
                <Card card={data[2]}/> */}
                {
                  data.map((e)=>{
                    return <Card card={e}/>
                  })
                }
              </div>
            </div>
          </section>
        );
    }

    
}

export default Carddata;
