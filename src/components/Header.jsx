import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search`);
    //filter pets array if value in input is equal to any pet name
  };
  return (
    <div className="header">
      <Link className="logo">Petlover</Link>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search" />
        <button type="submit">
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default Header;
