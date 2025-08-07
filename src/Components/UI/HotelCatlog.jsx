import React from "react";
import { useNavigate } from "react-router-dom";

const HotelCatlog = ({ hotel }) => {
  const { hotelName, city, price, imageUrl, description,_id } = hotel;
  const navigate = useNavigate(); 

  return (
    <div
      onClick={() => navigate(`/hotel/${_id}`)} 
      className="bg-white rounded-md shadow-lg overflow-hidden transition transform hover:scale-105 duration-300 w-full max-w-sm sm:max-w-xs md:max-w-sm lg:max-w-md mx-auto cursor-pointer"
    >
      <img
        src={imageUrl}
        alt={hotelName}
        className="w-full h-56 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">{hotelName}</h2>
        <p className="text-sm text-gray-500 mb-2">{city}</p>
        <p className="text-gray-700 text-sm line-clamp-3">{description}</p>

        <div className="mt-4 flex justify-between items-center">
          <span className="text-blue-600 font-semibold text-lg">
            ₹{price}/night
          </span>
          <button className="bg-blue-600 text-white px-4 py-1 rounded-full hover:bg-blue-700 transition">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelCatlog;
