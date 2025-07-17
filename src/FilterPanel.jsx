import React, { useContext } from 'react'
import { FlightContext } from './FlightContext';
import './FilterPanel.css'

function FilterPanel() {
    const{cabin,setCabin,price,setPrice,airline,setAirline,}=useContext(FlightContext);
    const resetFliters=()=>{
        setCabin('');
        setPrice('');
        setAirline('');
        setFrom('');
        setTo('');
        setDate('');
    };
  return (
   <div className='filter-panle'>
    <h4>Fliter</h4>
    <label> Cabin class</label>
    <select value={cabin} onChange={e=>setCabin(e.target.value)}>
        <option value="">select</option>
        <option value="Business">Business</option>
        <option value="Economy">Economy</option>

    </select>
    <label> Airline </label>
    <select value={airline}onChange={e=>setAirline(e.target.value)}>
        <option value="">Select Airline</option>
        <option value="Air india">Air India</option>
        <option value="Indigo">India GO</option>
        <option value="Goair">GoAir</option>
    </select>
    <button className='reset-btn' onClick={resetFliters}>Reset</button>
   </div>
  );
}

export default FilterPanel;