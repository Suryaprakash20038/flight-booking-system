import { createContext, useState } from 'react';

export const FlightContext = createContext();

export function FlightContextProvider(props) {
  const {
    children 
  } = props;

  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [tripType, setTripType] = useState('oneway');

  const [cabin, setCabin] = useState('');
  const [price, setPrice] = useState('');
  const [airline, setAirline] = useState('');
  const [adults, setAdults] = useState(1);
  const [childrenCount, setChildrenCount] = useState(0); // ⛔ Rename this to avoid conflict
  const [infants, setInfants] = useState(0);
const [loading, setLoading] = useState(false);
  const [bookedTickets, setBookedTickets] = useState([]);
  const [filteredFlights, setFilteredFlights] = useState([]);
  const [selectedFlight, setSelectedFlight] = useState(null);

  return (
    <FlightContext.Provider value={{
      from, setFrom,
      to, setTo,
      date, setDate,
      returnDate, setReturnDate,
      tripType, setTripType,

      cabin, setCabin,
      price, setPrice,
      airline, setAirline,

      adults, setAdults,
      children: childrenCount, setChildren: setChildrenCount, // ✅ Renamed
      infants, setInfants,

      bookedTickets, setBookedTickets,
      filteredFlights, setFilteredFlights,
      selectedFlight, setSelectedFlight,
      loading, setLoading
    }}>
      {children}
    </FlightContext.Provider>
  );
}
