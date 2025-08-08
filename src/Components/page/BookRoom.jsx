import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BookRoom = () => {
  const navigate = useNavigate();


  useEffect(() => {
    const token = localStorage.getItem('token'); 
    if (!token) {
      navigate('/login');
    }
  }, [navigate]); //d

  const [formData, setFormData] = useState({
    hotel: '6893806f4174acdf95c3ef45',  // param se la sakte hai per ye page khud param id contain karna chahiye ?
    checkInDate: '',
    checkOutDate: '',
    numberOfGuests: 1,
    room: ''
  });

  //use ref?
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
 
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow rounded mt-6">
      <h2 className="text-xl font-semibold mb-4 text-center">Book Your Room</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label className="block mb-1 font-medium">Check-in Date</label>
          <input
            type="date"
            name="checkInDate"
            value={formData.checkInDate}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Check-out Date</label>
          <input
            type="date"
            name="checkOutDate"
            value={formData.checkOutDate}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Guests</label>
          <input
            type="number"
            name="numberOfGuests"
            value={formData.numberOfGuests}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            min="1"
            required
          />
        </div>

       
        <div>
          <label className="block mb-1 font-medium">Room Type</label>
          <input
            type="text"
            name="room"
            value={formData.room}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            placeholder="e.g., Deluxe Room"
            required
          />
        </div>

      
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Book This Room Now
        </button>
      </form>
    </div>
  );
};

export default BookRoom;
