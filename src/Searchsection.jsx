import React, { useContext } from 'react';
import { FlightContext } from './FlightContext';
import './HomePage.css';

function SearchSection() {
  const {
    from, setFrom,
    to, setTo,
    date, setDate,
    returnDate, setReturnDate,
    tripType, setTripType,
    adults, setAdults,
    children, setChildren,
    infants, setInfants,
    filterFlights 
  } = useContext(FlightContext);

  const handleReset = () => {
    setFrom('');
    setTo('');
    setDate('');
    setReturnDate('');
    setTripType('oneway');
    setAdults(1);
    setChildren(0);
    setInfants(0);
  };

  return (
    <section className="search-section">
      <h3>Where would you want to go?</h3>
      <div className="search-box">
        <input 
          type="text" 
          placeholder="From" 
          value={from} 
          onChange={(e) => setFrom(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="To" 
          value={to} 
          onChange={(e) => setTo(e.target.value)} 
        />
        <input 
          type="date" 
          value={date} 
          onChange={(e) => setDate(e.target.value)} 
        />

        <div className="trip-type">
          <label>
            <input
              type="radio"
              name="tripType"
              value="oneway"
              checked={tripType === 'oneway'}
              onChange={() => setTripType('oneway')}
            /> One Way
          </label>
          <label>
            <input
              type="radio"
              name="tripType"
              value="roundtrip"
              checked={tripType === 'roundtrip'}
              onChange={() => setTripType('roundtrip')}
            /> Round Trip
          </label>
        </div>

        {tripType === 'roundtrip' && (
          <input 
            type="date" 
            value={returnDate} 
            onChange={(e) => setReturnDate(e.target.value)} 
            placeholder="Return Date"
          />
        )}

        <div className="passengers">
          <label>Adults:
            <input type="number" value={adults} min="1" onChange={e => setAdults(Number(e.target.value))} />
          </label>
          <label>Children:
            <input type="number" value={children} min="0" onChange={e => setChildren(Number(e.target.value))} />
          </label>
          <label>Infants:
            <input type="number" value={infants} min="0" onChange={e => setInfants(Number(e.target.value))} />
          </label>
        </div>

        <div className="button-group">
          <button className="search-btn" onClick={filterFlights}>
            Search
          </button>
          <button className="reset-btn" onClick={handleReset} type="button">
            Reset
          </button>
        </div>
      </div>
    </section>
  );
}

export default SearchSection;
