import Pets from "../components/Pets";
import Hero from "../components/Hero";
import data from "../data";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <Hero title={"Find Your perfect Pet"} />
      <Pets pets={"pets"}>
        {data.map((pet, index) => {
          return (
            <Link className="pet__card" key={index} to={`/${pet.name}`}>
              <div className="pet__card__img">
                <img src={pet.image} alt={pet.name} />
              </div>
              <h3>{pet.name}</h3>
              <p>{pet.gender}</p>
            </Link>
          );
        })}
      </Pets>
    </>
  );
};

export default Home;
