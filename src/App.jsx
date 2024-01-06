import { DatePicker } from "antd";
import Navbar from "./components/Navbar";
import axios from "axios";

const dataFetch = {
  method: "GET",
  url: "https://timetable-lookup.p.rapidapi.com/TimeTable/saw/adb/20240110/",
  headers: {
    "X-RapidAPI-Key": "142508fb75msh82ad7a1f379ca19p10c5e0jsn935fe1b4e829",
    "X-RapidAPI-Host": "timetable-lookup.p.rapidapi.com",
  },
};

try {
  const response = await axios.request(dataFetch);
  console.log(response.data);
} catch (error) {
  console.error(error);
}

const App = () => {
  return <Navbar />;
};

export default App;
