import React from 'react';
import Cartcomponent from './Cartcomponent';
import './Cartdata.css'

function Cartdata () {
   
   let data=[
        {
         id:1,
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
          id:2,
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
          id:3,
          product:"sale",
          productEnable:true,
          image:"https://m.media-amazon.com/images/I/71Ye4QY493L._SX679_.jpg",
          productname:"Male Puppets",
          productnameEnable:true,
          rating:"",
          ratingEnable:false,
          offerprice:"$50.00",
          offerpriceEnable:true,
          price:"$25.00",
          button:"Add to cart"
         },
         {
          id:4,
          product:"",
          productEnable:false,
          image:"https://m.media-amazon.com/images/I/413LMwScBjS._SX679_.jpg",
          productname:"Wifi Booster",
          productnameEnable:true,
          rating:"",
          ratingEnable:true,
          offerprice:"",
          offerpriceEnable:false,
          price:"$40.00",
          button:"Add to cart"
         },
         {
          id:5,
          product:"sale",
          productEnable:true,
          image:"https://m.media-amazon.com/images/I/81wN5ep5CAL._SY879_.jpg",
          productname:"JH Gallery Lotus Hangings for Decoration",
          productnameEnable:true,
          rating:"",
          ratingEnable:true,
          offerprice:"$50.00",
          offerpriceEnable:true,
          price:"$25.00",
          button:"Add to cart"
         },
         {
          id:6,
          product:"",
          productEnable:true,
          image:"https://m.media-amazon.com/images/I/71+FRIdP3pL._UL1500_.jpg",
          productname:"Indian Traditional Kanjivaram Silk",
          productnameEnable:true,
          rating:"",
          ratingEnable:true,
          offerprice:"",
          offerpriceEnable:false,
          price:"$120.00-$280.00",
          button:"View options"
         },
         {
          id:7,
          product:"sale",
          productEnable:true,
          image:"https://m.media-amazon.com/images/I/61xlUgke8BL._UX679_.jpg",
          productname:"Men's Beige Silk Blend Sherwani Set",
          productnameEnable:true,
          rating:"",
          ratingEnable:true,
          offerprice:"$20.00",
          offerpriceEnable:true,
          price:"$18.00",
          button:"Add to cart",
         },
         {
          id:8,
          product:"",
          productEnable:false,
          image:"https://m.media-amazon.com/images/I/616e2t492uL._SX679_.jpg",
          productname:"Alpha Bluetooth Calling Smart Watch ",
          productnameEnable:true,
          rating:"",
          ratingEnable:true,
          offerprice:"",
          offerpriceEnable:true,
          price:"$40",
          button:"Add to cart"
         }
    ]
        return<section className="py-5">
            <div className="container px-4 px-lg-5 mt-5" id="cartcontainer">
              <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                {data.map((e)=>{
                return <Cartcomponent Cartcomponent={e}/>
                })}
              </div>
            </div>
          </section>
    }

export default Cartdata;
