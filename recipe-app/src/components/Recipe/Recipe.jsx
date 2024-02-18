import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Recipe = (props) => {
    const { _id, Recipe_Name, Ingreients, Desription, Image } = props.recipe;
    const history = useNavigate();
    const [showConfirmation, setShowConfirmation] = useState(false);

    const deleteHandler = async () => {
        setShowConfirmation(true);
    };

    const handleDeleteConfirmed = async () => {
        await axios.delete(`http://localhost:5001/recipes/${_id}`).then(res=>res.data).then(()=>history("/"))
    };

    const handleCancelDelete = () => {
        setShowConfirmation(false);
    };

    return (
        <div>
            {showConfirmation && (
                <div className="fixed flex-wrap top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <p className="mb-4">Are you sure you want to delete the recipe?</p>
                        <div className="flex justify-between">
                            <button onClick={handleDeleteConfirmed} className="px-4 py-2 bg-red-500 text-white rounded mr-4">
                                Yes
                            </button>
                            <button onClick={handleCancelDelete} className="px-4 py-2 bg-gray-300 rounded">Cancel</button>
                        </div>
                    </div>
                </div>
            )}
            <div>
            <div className="flex flex-col items-center justify-center w-full gap-5 md:flex-row md:mt-8 md:p-2 md:gap-20">
                <div className="max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="rounded-t-lg" src={Image} alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{Recipe_Name}</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{Ingreients}</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{Desription}</p>
                        <div className="flex justify-between">
                            <a href={`/recipe/${_id}`} className="w-1/3 bg-blue-800">Update</a>
                            <button onClick={deleteHandler} className="w-1/3 bg-blue-800">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Recipe;
