import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Recipe = (props) => {
  const { _id, Recipe_Name, Ingreients, Desription, Image, isHomePage } =
    props.recipe;
  const history = useNavigate();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const deleteHandler = async () => {
    setShowConfirmation(true);
  };

  const handleDeleteConfirmed = async () => {
    await axios
      .delete(`http://localhost:5001/recipes/${_id}`)
      .then((res) => res.data)
      .then(() => history("/home"));
  };

  const handleCancelDelete = () => {
    setShowConfirmation(false);
  };

  return (
    <div className=" mt-[100px] ">
      {showConfirmation && (
        <div className="fixed flex-wrap top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 ">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="mb-4">Are you sure you want to delete the recipe?</p>
            <div className="flex justify-between">
              <button
                onClick={handleDeleteConfirmed}
                className="px-4 py-2 bg-red-500 text-white rounded mr-4"
              >
                Yes
              </button>
              <button
                onClick={handleCancelDelete}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col items-center justify-center w-full  md:flex-row md:mt-8 md:p-2 ">
        <div className="max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className=" ">
            <a href="/recipe">
              <img
                className="rounded-t-lg w-[400px] h-[400px]"
                src={Image}
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {Recipe_Name}
                </h5>
              </a>
              {/* Conditionally render the paragraphs */}
              {!isHomePage && (
                <>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    <span className=" text-white font-bold  text-xl">
                      Ingredients
                    </span>
                    <br></br>
                    {Ingreients}
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    <span className=" text-white font-bold  text-xl">
                      Description
                    </span>
                    <br></br>
                    {Desription}
                  </p>
                </>
              )}
              <div className="flex justify-between">
                <a
                  href={`/recipe/${_id}`}
                  className=" w-[100px] h-[40px] text-center py-2 rounded-xl text-white  bg-blue-800 "
                >
                  Update
                </a>
                <button
                  onClick={deleteHandler}
                  className="w-[100px] h-[40px] rounded-xl text-white  bg-blue-800"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
