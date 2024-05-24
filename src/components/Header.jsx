import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import data from "../data";

const Header = () => {
  const [pet, setPet] = useState("");
  const [pets, setPets] = useState(data);
  const handleSubmit = (e) => {
    e.preventDefault();
    //filter pets array if value in input is equal to any pet name
    setPets(
      data.filter((pet) => {
        return pet.name.toLowerCase().includes(pet.toLowerCase());
      })
    );
    console.log(pets);
  };
  return (
    <div className="header">
      <Link className="logo">Petlover</Link>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={pet}
          onChange={(e) => setPet(e.target.value)}
        />
        <button type="submit">
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default Header;
