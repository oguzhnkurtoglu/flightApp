import React, { useState, useEffect } from "react";
import { createContext } from "react";
import axios from "axios";

// Context bileşeni

const AirportsContext = createContext();

// Context sağlayıcısı

const AirportsProvider = ({ children }) => {
  const [airports, setAirports] = useState([]);

  useEffect(() => {
    const options = {
        method: 'GET',
        url: 'https://timetable-lookup.p.rapidapi.com/airports/',
        headers: {
          'X-RapidAPI-Key': '142508fb75msh82ad7a1f379ca19p10c5e0jsn935fe1b4e829',
          'X-RapidAPI-Host': 'timetable-lookup.p.rapidapi.com'
        }
      }.then((result) => {
        
      }).catch((err) => {
        
      });
      
      try {
          const response = await axios.request(options);
          console.log(response.data);
      } catch (error) {
          console.error(error);
      }
  }, []);

  return (
    <AirportsContext.Provider value={airports}>
      {children}
    </AirportsContext.Provider>
  );
};

