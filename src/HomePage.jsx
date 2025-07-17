import React, { useContext, useMemo, useEffect } from 'react';
import { FlightContext } from './FlightContext';
import { flightData } from './data';
import Sidebar from './Sidebar';
import SearchSection from './Searchsection';
import FilterPanel from './FilterPanel';
import FlightList from './Flightlist';
import './HomePage.css';


function HomePage() {
  const {
    from, to, date, cabin, price, airline,
    setFilteredFlights
  } = useContext(FlightContext);

  const filtered = useMemo(() => {
    let result = [...flightData()];

    if (from) result = result.filter(f => f.from.toLowerCase().includes(from.toLowerCase()));
    if (to) result = result.filter(f => f.to.toLowerCase().includes(to.toLowerCase()));
    if (airline) result = result.filter(f => f.airline.toLowerCase().includes(airline.toLowerCase()));
    if (price) result = result.filter(f => f.price <= Number(price));
    if (cabin) result = result.filter(f => f.class.toLowerCase() === cabin.toLowerCase());
    if (date) {
      result = result.filter(f => {
        const flightDate = new Date(f.date).toISOString().split('T')[0];
        const selectedDate = new Date(date).toISOString().split('T')[0];
        return flightDate === selectedDate;
      });
    }

    return result;
  }, [from, to, date, cabin, price, airline]);

  
  useEffect(() => {
    setFilteredFlights(filtered);
  }, [filtered, setFilteredFlights]);

  return (
    <div className="homepage-container">
      <Sidebar />
      <div className="main-content">
        <SearchSection />
        <div className="flight-filter-container">
          <FlightList />
          <FilterPanel />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
