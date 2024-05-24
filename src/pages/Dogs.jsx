import Hero from "../components/Hero";
import data from "../data";
import { Link } from "react-router-dom";
import Pets from "../components/Pets";

const Dogs = () => {
  const pets = data.map((pet) => pet);
  const dogs = pets.filter((pet) => pet.category === "dog");
  return (
    <>
      <Hero title={"Dogs"} />
      <Pets pets={"dogs"}>
        {dogs.map((pet, index) => {
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

export default Dogs;
