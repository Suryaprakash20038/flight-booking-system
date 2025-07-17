
import React, { useContext } from 'react';
import { FlightContext } from './FlightContext';
import FlightCard from './FlightCard';
import './FlightList.css';

function FlightList() {
  const { filteredFlights } = useContext(FlightContext);

  return (
    <div className="flight-list-container">
      {filteredFlights && filteredFlights.length > 0 ? (
        filteredFlights.map(flight => (
          <FlightCard key={flight.id} flight={flight} />
        ))
      ) : (
        <p className="no-flights">No flights found.</p>
      )}
    </div>
  );
}

export default FlightList;
