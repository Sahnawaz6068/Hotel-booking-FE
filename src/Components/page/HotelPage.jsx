import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const HotelPage = () => {
  const { hotelId } = useParams(); 
  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchHotel = async () => { 
      try {
        const res = await fetch(`http://localhost:3000/api/v1/hotel/${hotelId}`); 
        const data = await res.json();
        setHotel(data.response); 
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    };
    fetchHotel();
  }, [hotelId]);

  if (loading) return <div className="text-center p-10">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto mt-10 p-4 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-4">{hotel.hotelName}</h1>
      <p className="text-gray-600 text-sm mb-2">{hotel.city}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <img
          src={hotel.imageUrl}
          alt="Hotel View 1"
          className="w-full h-64 object-cover rounded-md"
        />
        <img
          src={hotel.imageUrl2}
          alt="Hotel View 2"
          className="w-full h-64 object-cover rounded-md"
        />
      </div>

      <p className="text-gray-700 text-lg mb-4">{hotel.description}</p>

      <div className="flex justify-between items-center mb-6">
        <span className="text-xl font-semibold text-blue-700">
          ₹{hotel.price}/night
        </span>
        <span className="text-sm text-gray-500">
          Rooms Available: {hotel.rooms}
        </span>
      </div>

      <button
        onClick={() => navigate("/booking")} 
        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
      >
        Book This Room Now
      </button>
    </div>
  );
};

export default HotelPage;
