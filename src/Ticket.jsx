import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FlightContext } from './FlightContext';
import Sidebar from './Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Ticket.css';

function Ticket() {
  const { bookedTickets, setBookedTickets } = useContext(FlightContext);
  const navigate = useNavigate();

  const handlePayNow = () => {
    alert("Payment successful!");
    navigate('/Schedules');
  };

  const handleCancel = (id) => {
    const updatedTickets = bookedTickets.filter(ticket => ticket.id !== id);
    setBookedTickets(updatedTickets);
  };

  return (
    <div className="d-flex min-vh-100">
      <div className="sidebar-wrapper bg-light">
        <Sidebar />
      </div>
      <div className="flex-grow-1 p-4">
        <h2 className="mb-4">Your Booked Tickets</h2>
        {bookedTickets.length === 0 ? (
          <p>No tickets booked yet.</p>
        ) : (
          <div className="container">
            <div className="row">
              {bookedTickets.map((ticket, index) => (
                <div key={index} className="col-md-4 mb-4">
                  <div className="card h-100 shadow-sm ticket-card">
                    <div className="card-body d-flex flex-column justify-content-between">
                      <div>
                        <p><strong>From:</strong> {ticket.from}</p>
                        <p><strong>To:</strong> {ticket.to}</p>
                        <p><strong>Date:</strong> {ticket.date}</p>
                        <p><strong>Time:</strong> {ticket.time}</p>
                        <p><strong>Airline:</strong> {ticket.airline}</p>
                        <p><strong>Class:</strong> {ticket.class}</p>
                        <p><strong>Trip Type:</strong> {ticket.tripType}</p>
                        <p><strong>Passengers:</strong> 
                          {ticket.passengers.adults} Adults, 
                          {ticket.passengers.children} Children, 
                          {ticket.passengers.infants} Infants
                        </p>
                        <p><strong>Total Price:</strong> ₹{ticket.totalPrice.toLocaleString()}</p>
                      </div>
                      <div className="text-end mt-3">
                        <button className="btn btn-success mt-3 w-100" onClick={handlePayNow}>
                          Pay Now
                        </button>
                        <button className="btn btn-danger mt-2 w-100" onClick={() => handleCancel(ticket.id)}>
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Ticket;
 