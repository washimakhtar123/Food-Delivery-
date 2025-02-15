import React, { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';

const PlaceOrder = () => {
  const { getTotalCardAmount } = useContext(StoreContext);

  const subtotal = getTotalCardAmount();
  const deliveryFee = subtotal > 0 ? 10 : 0; // Delivery fee applies only if subtotal > 0
  const total = subtotal + deliveryFee;

  return (
    <form action="" className=" w-[90%] md:w-[80%] mx-auto mt-40 flex flex-col md:flex-row gap-10">
      
      {/* Left Section - Delivery Information */}
      <div className="w-full md:w-2/3 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Delivery Information</h2>
        
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <input type="text" placeholder="First Name" className="flex-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
            <input type="text" placeholder="Last Name" className="flex-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
          </div>
          
          <input type="email" placeholder="Email Address" className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
          
          <input type="text" placeholder="Street Address" className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
          
          <div className="flex flex-col sm:flex-row gap-4">
            <input type="text" placeholder="City" className="flex-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
            <input type="text" placeholder="State" className="flex-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <input type="text" placeholder="Zip Code" className="flex-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
            <input type="text" placeholder="Country" className="flex-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
          </div>
          
          <input type="tel" placeholder="Phone Number" className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
        </div>
      </div>

      {/* Right Section - Order Summary */}
      <div className="w-full md:w-1/3 bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Cart Totals</h2>

        <div className="space-y-4">
          <div className="flex justify-between border-b pb-2">
            <p>Subtotal</p>
            <p className="font-semibold">${subtotal.toFixed(2)}</p>
          </div>

          <div className="flex justify-between border-b pb-2">
            <p>Delivery Fee</p>
            <p className="font-semibold">${deliveryFee.toFixed(2)}</p>
          </div>

          <div className="flex justify-between text-lg font-bold">
            <p>Total</p>
            <p>${total.toFixed(2)}</p>
          </div>
        </div>

        <button 
          disabled={subtotal === 0} 
          className={`w-full mt-6 py-3 rounded-md font-semibold transition 
            ${subtotal > 0 ? "bg-orange-500 hover:bg-orange-600 text-white" : "bg-gray-300 text-gray-500 cursor-not-allowed"}`}
        >
          PROCEED TO PAYMENT
        </button>
      </div>
    </form>
  );
};

export default PlaceOrder;
