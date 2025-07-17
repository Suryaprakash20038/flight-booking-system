import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FlightContext } from "./FlightContext";
import "./FlightList.css";

function FlightCard({ flight }) {
  const {
    bookedTickets,
    setBookedTickets,
    tripType,
    adults,
    children,
    infants
  } = useContext(FlightContext);

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function calculateTotalPrice(basePrice) {
    const multiplier = tripType === "roundtrip" ? 2 : 1;
    const totalPassengers = adults + children + infants;
    return basePrice * multiplier * totalPassengers;
  }

  const handleBook = async () => {
    const alreadyBooked = bookedTickets.some(f => f.id === flight.id);
    if (alreadyBooked) {
      alert("This flight is already booked.");
      return;
    }

    setIsLoading(true);

    try {
      await new Promise((res) => setTimeout(res, 2000));

      const totalPrice = calculateTotalPrice(flight.price);

      const bookedFlight = {
        ...flight,
        totalPrice,
        passengers: { adults, children, infants },
        tripType
      };

      setBookedTickets([...bookedTickets, bookedFlight]);

      alert(`Flight booked! Total Price: ₹${totalPrice}`);
      navigate("/ticket");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flight-card">
      <div className="flight-airline">
        <h5>{flight.airline}</h5>
        <p>{flight.class} · {flight.duration || "1h 30m"}</p>
      </div>

      <div className="flight-route">
        <p><strong>From:</strong> {flight.from}</p>
        <p><strong>To:</strong> {flight.to}</p>
        <p><strong>Date:</strong> {flight.date}</p>
        <p><strong>Time:</strong> {flight.time}</p>
      </div>

      <div className="flight-price text-end">
        <p><strong>Total Price:</strong> ₹ {calculateTotalPrice(flight.price)}</p>

        {isLoading ? (
          <button className="book-btn" disabled>
            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            &nbsp;Booking...
          </button>
        ) : (
          <button className="book-btn" onClick={handleBook}>
            Book Now
          </button>
        )}
      </div>
    </div>
  );
}

export default FlightCard;
