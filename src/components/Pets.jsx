import data from "../data";
import { Link } from "react-router-dom";

const Pets = ({ pets, children }) => {
  return (
    <div className="pets">
      <h2>{pets} available for adoption near you</h2>
      <div className="pets__catalog">{children}</div>
    </div>
  );
};

export default Pets;
