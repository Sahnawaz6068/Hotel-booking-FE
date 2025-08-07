import React, { useEffect, useState } from 'react';
import HotelCatllog from '../UI/HotelCatlog'; // Make sure the component name 'HotelCatllog' is correct

const Hotels = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/v1/hotel");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        
        // FIX #1: Check if the data is in result.response or just result
        // If your API returns { "response": [...] }, use result.response.
        // If your API returns just [...], use result.
        const data = result.response || result; 
        
        setHotels(data);
      } catch (error) {
        console.error("Error fetching hotel list:", error);
      }
    };

    fetchHotels();
  }, []); // This empty array means the effect runs only once. Correct!

  return (
    <div className="min-h-screen bg-[linear-gradient(to_bottom_left,white,#dbeafe,white)] py-10 px-4 w-full overflow-y-auto">
      <h1 className="text-3xl font-bold text-center text-gray-800">Hotel List</h1>
      <div className="mx-14">
        <div className="flex flex-wrap gap-6 justify-center pt-16">
          {hotels.length > 0 ? (
            hotels.map((hotel) => (
              // FIX #2: Pass the individual 'hotel' object, not the entire 'hotels' array.
              <HotelCatllog key={hotel._id || hotel.id} hotel={hotel} />
            ))
          ) : (
            <p className="text-center text-gray-500">Loading hotels...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hotels;