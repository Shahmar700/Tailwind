import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function ProductDetails() {
  const selector = useSelector((state) => state.dataReducer);
  let { id } = useParams();
  let item = selector[id-1]
  return <div className="w-11/12 mx-auto mt-10 md:flex">
    {/* Left Side  */}
    <div className="h-270 w-full mobile:w-2/4 mx-auto mb-5 md:mb-0 md:h-240 md:w-0.3 lg:w-1/4">
      <img src={item.image} alt="" className="w-full h-full object-cover rounded-lg"/>
    </div>
    {/* Rigt Side  */}
    <div className="md:w-3/5 lg:w-2/4 text-center mx-auto">
      <h1 className="text-white text-lg font-bold">{item.name}</h1>
      <h1 className="text-white text-lg font-bold">$ {item.price}</h1>
      <h3>{item.description}</h3>
    </div>
  </div>;
}


export default ProductDetails;
