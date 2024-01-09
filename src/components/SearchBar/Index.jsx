import { DatePicker, Input, Button } from "antd";
import Flightlist from "../Flightlist"
import { GlobalOutlined } from '@ant-design/icons';
import { useState } from "react";
import data from "../../data/data.json"


  
  const SearchBar = () =>{ 
    
    const [flight, setFlight]= useState({Start :"",End : ""})
    const [isFocus1, setFocus1] = useState(false);
    const [isFocus2, setFocus2] = useState(false);
    const [departureDate,setDepartureDate] =useState("")
    const [arrivalDate,setArrivalDate] =useState("")
    



    const handleChange = (event) => {
    setFlight({...flight,[event.target.name]: event.target.value})
  }

    const handleDepartureDate = (date,dateString) => {
    setDepartureDate(dateString); }

    const handleArrivalDate = (date,dateString) => {
      setArrivalDate(dateString) }
  
        
        const searchedFlights = data.filter(item => (item.departure_airport_name.toLowerCase().includes(flight.Start.toLowerCase()) && item.arrival_airport_name.toLowerCase().includes(flight.End.toLowerCase()) && item.departure_date == departureDate && item.arrival_date == arrivalDate))
      
    
  

  return (
    <div className="h-[50%] bg-sky-500 flex flex-col justify-center items-center text-center">
    <div className=" bg-slate-400 h-[300px] w-[400px] p-4 rounded-xl">
    <label className="flex flex-col items-center space-x-2">
      <p className=" font-bold hover:text-xl text-white hover:text-slate-600">From</p>
      <Input name="Start" required className="w-full" onFocus={()=>setFocus1(true)} onBlur={()=>setFocus1(false)} onChange={handleChange} />
      {isFocus1 && <Flightlist />}
    </label>
    <label className="flex   flex-col items-center space-x-2">
      <p className=" font-bold  hover:text-xl text-white hover:text-slate-600">To</p>
      <Input  required onChange={()=>handleChange} name="End"  onFocus={()=>setFocus2(true)} onBlur={()=>setFocus2(false)} className="w-full" />
      {isFocus2 && <Flightlist />}
    </label>
    <div className="flex w-full justify-evenly items-center">
    <label className="mr-2">
    <p className=" font-bold  hover:text-l text-white hover:text-slate-600">From</p>
      <DatePicker  onChange={handleDepartureDate}  className="w-40" />
    </label>
    <label>
    <p className=" font-bold  hover:text-l text-white hover:text-slate-600">To</p>
      <DatePicker onChange={handleArrivalDate}  className="w-40" />
    </label>
     </div>
    {/* <Button onClick={()=>search} className="bg-white mt-4 mx-auto flex items-center justify-center text-black"><GlobalOutlined /> Explore The World!</Button> */}
    </div> 
    <div className="bg-white w-full text-black rounded-lg">
      <h2 className=" font-bold text-black text-2xl mb-2">Your Flights</h2>
   { searchedFlights.map((item,index) => <div className="grid grid-flow-col" key={index}> 
    <p>{item.departure_airport} </p>
    <p>{item.arrival_airport_nameairport} </p>
    <p>{item.departure_date} </p>
    <p>{item.arrival_date} </p>
    <p>{item.price + "$"} </p>

   </div>)
    }
    </div>
  </div>
  )
}

export default SearchBar