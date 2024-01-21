import React, { useState } from 'react';
import airplaneImage from '../components/airplane.png';
import Home from './home';

export var forwardLocation = "";

function setForwardLocation(newLocation) {
  forwardLocation = newLocation;
}

let arrow = '>'

export default function Index() {

  const [go, setGo] = useState(false)

  return go ? (
    <Home forwardLocation={forwardLocation} />
  ) : (
    <div className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-indigo-500 to-white">
      <div
        className="absolute w-1/2 h-1/2 rounded-b-full transform rotate-180 bottom-[20%]"
        style={{ backgroundColor: 'rgb(226, 226, 253)', zIndex: 1 }}
      ></div>
      <div style={{ zIndex: 2 }}>
        <img src={airplaneImage} alt="airplane" className="w-[800px] absolute left-[22%] top-[36%]" />
      </div>
      <div className="absolute font-poppins" style={{ zIndex: 3, top: '20%' }}>
        <input
        type="text"
        className="pl-10 bg-indigo-500 rounded-full p-6"
        style={{ fontSize: '75px', color: 'white' }}
        placeholder="Your Destination"
        onChange={(e) => {setForwardLocation(e.target.value)}}
        />
        <button className="absolute text-6xl bg-white rounded-full top-[25%] left-[84%] w-[90px] h-[90px] font-bold text-gray-500 hover:opacity-60 transition duration-300 ease-in-out" onClick={(e) => {setGo(true)}} > {arrow} </button>
      </div>
    </div>
  );
}
