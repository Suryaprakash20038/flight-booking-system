import React, { useContext } from 'react';
import { FlightContext } from '../context/FlightContext'; 
import './BookingSummary.css'; 

function BookingSummary() {
  const {
    selectedFlight,
    tripType,
    adults,
    children,
    infants
  } = useContext(FlightContext);
  
  function calculateTotalPrice(basePrice, tripType, adults, children, infants) {
    const multiplier = tripType === 'roundtrip' ? 2 : 1;
    const totalPassengers = adults + children + infants;
    return basePrice * multiplier * totalPassengers;
  }

  if (!selectedFlight) {
    return <p>Please select a flight to see the summary.</p>;
  }

  const basePrice = selectedFlight.price;
  const totalPrice = calculateTotalPrice(basePrice, tripType, adults, children, infants);

  return (
    <div className="booking-summary">
      <h2>Flight Booking Summary</h2>
      <p><strong>Airline:</strong> {selectedFlight.airline}</p>
      <p><strong>From:</strong> {selectedFlight.from}</p>
      <p><strong>To:</strong> {selectedFlight.to}</p>
      <p><strong>Trip Type:</strong> {tripType}</p>
      <p><strong>Base Price per Person:</strong> ₹{basePrice}</p>
      <p><strong>Passengers:</strong> {adults} Adults, {children} Children, {infants} Infants</p>
      <h3>Total Price: ₹{totalPrice}</h3>
    </div>
  );
}

export default BookingSummary;
