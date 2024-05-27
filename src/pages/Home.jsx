import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import Pets from "../components/Pets";
import PetsHeading from "../components/PetsHeading";
const Home = ({ search, searchResults, searchHeading }) => {
  return (
    <>
      <Hero
        title={`${
          searchHeading
            ? `Search results for ${searchHeading}`
            : "Find Your perfect Pet"
        } `}
        bgImg="homeImg"
      />
      <Pets pets={"pets"}>
        {searchResults.length > 0 ? (
          <>
            <PetsHeading pets="pets" />
            <div className="pets__catalog">
              {searchResults.map((pet, index) => {
                return (
                  <Link className="pet__card" key={index} to={`${pet.name}`}>
                    <div className="pet__card__img">
                      <img src={pet.image} alt={pet.name} />
                    </div>
                    <h3>{pet.name}</h3>
                    <p>{pet.gender}</p>
                  </Link>
                );
              })}
            </div>
          </>
        ) : (
          <h2>no pets match your search</h2>
        )}
      </Pets>
    </>
  );
};

export default Home;
