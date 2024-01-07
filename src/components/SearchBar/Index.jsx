import { DatePicker, Input, Button } from "antd";
import { GlobalOutlined } from '@ant-design/icons';
import { useState } from "react";

const SearchBar = () => {
    // const dataFetch = {
    //     method: "GET",
    //     url: "https://timetable-lookup.p.rapidapi.com/TimeTable/saw/adb/20240110/",
    //     headers: {
    //       "X-RapidAPI-Key": "142508fb75msh82ad7a1f379ca19p10c5e0jsn935fe1b4e829",
    //       "X-RapidAPI-Host": "timetable-lookup.p.rapidapi.com",
    //     },
    //   }
    

    const [flight, setFlight]= useState({Start :"",End : ""})
    const handleChange = (event) => {
        setFlight({...flight,[event.target.name]: event.target.value})

    }

  return (
    <div className="h-[50%] bg-sky-500 flex flex-col justify-center items-center text-center">
    
    <div>

    <label className="flex flex-col items-center space-x-2">
      <p className=" font-bold hover:text-xl text-white hover:text-slate-600">Where</p>
      <Input name="Start" className="w-full" onChange={handleChange} />
    </label>
    <label className="flex   flex-col items-center space-x-2">
      <p className=" font-bold  hover:text-xl text-white hover:text-slate-600">To</p>
      <Input onChange={handleChange} name="End" className="w-full" />
    </label>
    <div className="flex w-full justify-evenly items-center">
    <label className="mr-2">
    <p className=" font-bold  hover:text-xl text-white hover:text-slate-600">From</p>
      <DatePicker className="w-40" />
    </label>
    <label>
    <p className=" font-bold  hover:text-xl text-white hover:text-slate-600">To</p>
      <DatePicker className="w-40" />
    </label>
    </div>
   
    <Button onClick={()=>{console.log(flight)}} className="bg-white mt-4 flex items-center justify-center text-black w-full"><GlobalOutlined /> Explore The World!</Button>
    </div>
  </div>
  )
}

export default SearchBar