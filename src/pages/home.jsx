import React, { useState } from 'react';
import GetTravelPlan from '../utility/gemini';

// import { forwardLocation } from '.';

export default function Home({forwardLocation}) {
    console.log(forwardLocation + "<<")

    const [formValues, setFormValues] = useState({
        location: forwardLocation,
        age: '',
        interests: '',
        startDate: '',
        endDate: '',
    });

    const [showTravelPlan, setShowTravelPlan] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleGetTravelPlan = () => {
        console.log("planning....");
        setShowTravelPlan(true);
    };

    return (
        <div className="flex flex-col items-left bg-indigo-500 text-xl text-white p-6">
            <div>
                <label>Location:</label>
                <input className="ml-1 shadow appearance-none border rounded w-[100%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="location" value={formValues.location} onChange={handleInputChange} />
            </div>
            <div>
                <label className="ml-1">Age:</label>
                <input className="ml-1 shadow appearance-none border rounded w-[100%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="age" value={formValues.age} onChange={handleInputChange} />
            </div>
            <div>
                <label className="ml-1">Interests:</label>
                <input className="ml-1 shadow appearance-none border rounded w-[100%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="interests" value={formValues.interests} onChange={handleInputChange} />
            </div>
            <div>
                <label className="ml-1">Start Date:</label>
                <input className="ml-1 shadow appearance-none border rounded w-[100%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="startDate" value={formValues.startDate} onChange={handleInputChange} />
            </div>
            <div>
                <label className="ml-1">End Date:</label>
                <input className="ml-1 shadow appearance-none border rounded w-[100%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="endDate" value={formValues.endDate} onChange={handleInputChange} />
            </div> 
            <br></br>
            <button type="button" className="bg-indigo-900 rounded-md p-3 ml-8" onClick={handleGetTravelPlan}>Submit</button>
            <br />
            <div clasName="absolute">
                {showTravelPlan && <GetTravelPlan {...formValues} />}
            </div>
        </div>
    );
}