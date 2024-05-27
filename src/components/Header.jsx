import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import data from "../data";
import { useEffect } from "react";

const Header = ({ search, setSearch, setSearchResults, setSearchHeading }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (search === "") {
      setSearchResults(data);
      setSearchHeading("");
    }
  }, [search, data]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (search === "") {
      setSearchResults(data);
      setSearchHeading("");
    } else {
      setSearchResults(
        data.filter((pet) =>
          pet.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
    setSearchHeading(search);
    navigate(`/`);
  };
  return (
    <div className="header">
      <Link className="logo" to="/">
        Petlover
      </Link>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default Header;
