import React from "react";
import { useState } from "react";
import { Class } from "./commponets/Class";
import  pic1  from  "./pic1.webp";
import  pic2  from  "./pic1.webp";
import  pic3  from  "./pic1.webp";

function MyComponent() { 
  const [home, setHome] = useState(
    [
      {
        
        name: "umar",
        price: 19.99,
        color: "red",
        size: "medium",
        img: [pic1]
      },
      {
        name: "Jeans",
        price: 49.99,
        color: "blue",
        size: "large",
        img: [pic2]
      },
      {
        name: "Hat",
        price: 14.99,
        color: "black",
        img: [pic3],
      },
    ]
);
  const [feature, setFeature] = useState(
    [ {
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: {
      bbbbb:{
        hello:10
    }
  }
  },2,8,4]); // [1,2,3,4]
  const [gallery, setGallery] = useState("Gallery");
  const [pricing, setPricing] = useState(
    {
      brand: "Ford", // brand is property ford is the value of property
      model: "Mustang",
      year: "1964",
      color: {
        bbbbb:{
          hello:10
      }
    } // color is property and "{bbbbb:54}" is the value 
    }
  );
  
console.log(feature)
  return (
    <><div className="hidden md:flex items-center">
      <ul className="flex ">
        {home.map((value, index) => {
          return (

            <li className="!h-80 !w-80 border hover:scale-110 hover:transition-all px-8 ml-8 rounded-md bg-gray-500">
              <p className="text-lg ">Product Name:{value.name}</p>
              <p className="font-thin ">Price:{value.price}</p>
              <p className="border-y border-black h-10 ">Color:{value.color}</p>
              <p className="text-green-500   hover:text-blue-700">Size:{value.size}</p>
              <img src={value.img} className="h-48 w-48 "/>
            </li>

          );
        })}
      </ul>

    </div><div><Class /></div></>
  );
}

export default MyComponent; // PascalCase for consistency
