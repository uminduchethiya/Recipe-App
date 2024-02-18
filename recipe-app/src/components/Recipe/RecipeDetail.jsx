import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const RecipeDetail = () => {
  const [inputs, setInputs] = useState({});
  const ID = useParams().id;
  const history=useNavigate();
  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5001/recipes/${ID}`)
        .then((res) => res.data).then(data=>setInputs(data.recipe));
    };
    fetchHandler();
  }, [ID]);
  const sendRequest =async()=>{
    await axios.put(`http://localhost:5001/recipes/${ID}`,{
        Recipe_Name:String(inputs.Recipe_Name),
        Ingreients:String(inputs.Ingreients),
        Desription:String(inputs.Desription),
        Image:String(inputs.Image),
        

    }).then(res=>res.data)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(()=>history("/recipe"))
  };
  const handleChange = (e) => {
    setInputs((prevState)=>({
        ...prevState,
        [e.target.name]:e.target.value
    }))
   
  };
  console.log(inputs);
  return (
    <div>{inputs &&(
      <form class="max-w-sm mx-auto" onSubmit={handleSubmit}>
        <div class="mb-5">
          <label class="block mb-2 text-sm font-medium  text-black">
            Recipe Name
          </label>
          <input
            type="text"
            value={inputs.Recipe_Name}
            onChange={handleChange}
            name="Recipe_Name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div class="mb-5">
          <label for="N" class="block mb-2 text-sm font-medium  text-black">
            Ingreients
          </label>
          <textarea
            type="text"
            value={inputs.Ingreients}
            onChange={handleChange}
            name="Ingreients"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  w-[400px] h-[150px]"
          />
        </div>
        <div class="mb-5">
          <label class="block mb-2 text-sm font-medium  text-black">
            Desription
          </label>
          <textarea
            type="text"
            value={inputs.Desription}
            onChange={handleChange}
            name="Desription"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[400px] h-[150px]"
          />
        </div>

        <div class=" mb-5">
          <label class="block mb-2 text-sm font-medium  text-black">
            Image
          </label>
          <input
            type="text"
            value={inputs.Image}
            onChange={handleChange}
            name="Image"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 recipe-app/src/components/AddRecipe.jsx"
          />
        </div>
        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Update Recipes
        </button>
      </form>
      )}
    </div>
  );
};

export default RecipeDetail;
