import airplane from "../../assets/airplane.svg"
const Navbar = () => {
  return (
    <div className="bg-yellow-500 flex justify-between items-center">
      <div className="mx-4 text-red-600 font-extrabold  text-2xl py-4">AFS</div>
      <div><img src={airplane} alt="" /></div>
      <div className="flex flex-col items-center text-center mx-4">
      <div className="text-red-600 font-extrabold   text-xl ">Amadeus Airlines </div>
      <p className="text-white font-bold">Cheapest Way to FLY!</p>

      </div>

    </div>
  );
};

export default Navbar;
