import Swal from 'sweetalert2'
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function AddProduct() {
  const Swal = require('sweetalert2')
  const selector = useSelector((state) => state.dataReducer);
  console.log(selector);
  const dispatch = useDispatch();
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: 0,
    image: "",
  });
  const handleInput = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };
  console.log(newProduct);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_DATA", payload: newProduct });
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Your product has been added',
      showConfirmButton: false,
      timer: 1500
    })
  };
  return (
    <div className="Container w-11/12 mx-auto">
      <div className="inputs mt-10 flex flex-col mx-auto lg:mx-0 w-full sm:w-3/4 lg:w-2/4 2xl:w-2/6">
        <input
          onChange={handleInput}
          name="name"
          className="rounded-lg p-2 "
          type="text"
          placeholder="Name"
        />
        <input
          onChange={handleInput}
          name="price"
          className="rounded-lg p-2 my-3"
          type="number"
          placeholder="Price"
        />
        <input
          onChange={handleInput}
          name="image"
          className="rounded-lg p-2 "
          type="text"
          placeholder="Image"
        />
        <button
          onClick={handleSubmit}
          className="hover:bg-gray-400 hover:text-white duration-200 cursor-pointer rounded-lg py-1 my-3 w-40 bg-mycolors-mybtn text-mycolors-dark font-bold text-xl mx-auto"
          type="submit"
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default AddProduct;
