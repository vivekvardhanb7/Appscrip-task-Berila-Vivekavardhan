import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";
import Fabric from "./FABRIC/Fabric";
import "./Sidebar.css";
import SuitableFor from "./Suitable/SuitableFor";
import Pattern from "./Pattern/Pattern";

const Sidebar = ({ handleChange }) => {
  return (
    <section className="sidebar">
      {/* Add a checkbox */}
      <div className="custom">
        <input type="checkbox" id="customizable-checkbox" />
        <label htmlFor="customizable-checkbox">CUSTOMIZABLE</label>
      </div>

      {/* Render other components */}
      <Category handleChange={handleChange} />
      <Price handleChange={handleChange} />
      <Colors handleChange={handleChange} />
      <Fabric handleChange={handleChange} />
      <SuitableFor handleChange={handleChange} />
      <Pattern handleChange={handleChange} />
    </section>
  );
};

export default Sidebar;
