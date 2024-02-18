import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddRecipe = () => {
    const history=useNavigate();
    const[inputs,setInputs]=useState({
        Recipe_Name:"",
        Ingreients:"",
        Desription:"",
        Image:"",

    });
     const handleChange=(e)=>{
        setInputs((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value
        }))
    // console.log(e.target.name, "Value" ,e.target.value);
     }
     const sendRequest =async()=>{
        await axios.post("http://localhost:5001/recipes",{
            Recipe_Name:String(inputs.Recipe_Name),
            Ingreients:String(inputs.Ingreients),
            Desription:String(inputs.Desription),
            Image:String(inputs.Image),
            


        }).then(res=>res.data);

     }
   const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(inputs)
    sendRequest().then(()=>history('/recipe'))
   }
  return (
    

<form class="max-w-sm mx-auto" onSubmit={handleSubmit}>
  <div class="mb-5">
    <label  class="block mb-2 text-sm font-medium  text-black">Recipe Name</label>
    <input type="text" value={inputs.Recipe_Name} onChange={handleChange} name='Recipe_Name' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"   />
  </div>
  <div class="mb-5">
    <label for="N" class="block mb-2 text-sm font-medium  text-black">Ingreients</label>
    <input type="text"  value={inputs.Ingreients} onChange={handleChange}  name='Ingreients' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"   />
  </div>
  <div class="mb-5">
    <label class="block mb-2 text-sm font-medium  text-black">Desription</label>
    <input type="text"  value={inputs.Desription} onChange={handleChange}  name='Desription' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
  </div>
  
  <div class=" mb-5">
  <label class="block mb-2 text-sm font-medium  text-black">Image</label>
  <input type="text"  value={inputs.Image} onChange={handleChange}  name='Image' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
 
  </div>
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Submit</button>
</form>
  )
}

export default AddRecipe
