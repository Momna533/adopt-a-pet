import { Link, NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const data = [
  {
    name: "Gracie",
    category: "cat",
    Gender: "female",
    image:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fHww",
  },
  {
    name: "Daisy",
    category: "cat",
    Gender: "female",

    image:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fHww",
  },
  {
    name: "Mitty",
    category: "cat",
    Gender: "male",

    image:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fHww",
  },
  {
    name: "Mocha",
    category: "cat",
    Gender: "female",

    image:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fHww",
  },
  {
    name: "Kiki",
    category: "cat",
    Gender: "male",

    image:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fHww",
  },
  {
    name: "Kaity",
    category: "cat",
    Gender: "female",

    image:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fHww",
  },
  {
    name: "Christy",
    category: "cat",
    Gender: "female",

    image:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fHww",
  },
  {
    name: "Stormy",
    category: "dog",
    Gender: "female",
    image:
      "https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Snickers",
    category: "dog",
    Gender: "female",
    image:
      "https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Nosey",
    category: "dog",
    Gender: "female",
    image:
      "https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Gia",
    category: "dog",
    Gender: "male",
    image:
      "https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Thumper",
    category: "rabbit",
    Gender: "male",
    image:
      "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFiYml0fGVufDB8fDB8fHww",
  },
  {
    name: "Peter",
    category: "rabbit",
    Gender: "male",
    image:
      "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFiYml0fGVufDB8fDB8fHww",
  },
  {
    name: "Acer",
    category: "rabbit",
    Gender: "male",
    image:
      "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFiYml0fGVufDB8fDB8fHww",
  },
  {
    name: "Arnold",
    category: "rabbit",
    Gender: "male",
    image:
      "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFiYml0fGVufDB8fDB8fHww",
  },
  {
    name: "Audelia",
    category: "rabbit",
    Gender: "male",
    image:
      "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFiYml0fGVufDB8fDB8fHww",
  },
];
const App = () => {
  return (
    <div>
      <div className="header">
        <Link className="logo">Petlover</Link>
        <form>
          <input type="text" placeholder="Search" />
          <button type="submit">
            <FaSearch />
          </button>
        </form>
      </div>
      <div className="nav">
        <NavLink className="nav__link" to="/">
          All Pets
        </NavLink>
        <NavLink className="nav__link" to="/about">
          Dogs
        </NavLink>
        <NavLink className="nav__link" to="/contact">
          Cats
        </NavLink>
        <NavLink className="nav__link" to="/contact">
          Rabbits
        </NavLink>
        <NavLink className="nav__link" to="/contact">
          Birds
        </NavLink>
      </div>
      <div className="hero">
        <h1 className="hero__title">Find Your perfect Pet</h1>
      </div>
      <h2>Pets available for adoption near you</h2>
      <div className="pets__catalog">
        {data.map((pet, index) => {
          return (
            <div className="pet__card" key={index}>
              <div className="pet__card__img">
                <img src={pet.image} alt={pet.name} />
              </div>
              <h3>{pet.name}</h3>
              <p>{pet.Gender}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
