import { DatePicker, Input, Button } from "antd";
import { GlobalOutlined } from '@ant-design/icons';
import { useState } from "react";

  
  const SearchBar = () =>{ 
    
    const [flight, setFlight]= useState({Start :"",End : ""})
    const handleChange = (event) => {
    setFlight({...flight,[event.target.name]: event.target.value})}
    function handleDate(date,dateString) {
      console.log(dateString); // Tarihi konsola yazdırıyoruz
    }
  

  return (
    <div className="h-[50%] bg-sky-500 flex flex-col justify-center items-center text-center">
    
    <div className=" bg-slate-400 h-[300px] w-[400px] p-4 rounded-xl">

    <label className="flex flex-col items-center space-x-2">
      <p className=" font-bold hover:text-xl text-white hover:text-slate-600">From</p>
      <Input name="Start" required className="w-full" onChange={handleChange} />
    </label>
    <label className="flex   flex-col items-center space-x-2">
      <p className=" font-bold  hover:text-xl text-white hover:text-slate-600">To</p>
      <Input  required onChange={handleChange} name="End" className="w-full" />
    </label>
    <div className="flex w-full justify-evenly items-center">
    <label className="mr-2">
    <p className=" font-bold  hover:text-xl text-white hover:text-slate-600">From</p>
      <DatePicker required onChange={handleDate}  name="DepartureTime" className="w-40" />
    </label>
    <label>
    <p className=" font-bold  hover:text-xl text-white hover:text-slate-600">To</p>
      <DatePicker required onChange={handleDate} name="ArrivalTime" className="w-40" />
    </label>
    </div>
   
    <Button onClick={()=>{console.log(flight)}} className="bg-white mt-4 mx-auto flex items-center justify-center text-black"><GlobalOutlined /> Explore The World!</Button>
    </div>
  </div>
  )
}

export default SearchBar