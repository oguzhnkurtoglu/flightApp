import { DatePicker, Input, Button } from "antd";

const Navbar = () => {
  return (
    <div>
      <div>Amadeus Flight Scanner</div>
      <div>
        <label>
          Where
          <Input />
        </label>
        <label>
          To
          <Input />
        </label>
        <label>
          Gidiş Date
          <DatePicker />
        </label>
        <Button>Find</Button>
      </div>
    </div>
  );
};

export default Navbar;
