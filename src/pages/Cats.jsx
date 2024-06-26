import Hero from "../components/Hero";
import data from "../data";
import { Link } from "react-router-dom";
import Pets from "../components/Pets";
import PetsHeading from "../components/PetsHeading";

const Cats = () => {
  const pets = data.map((pet) => pet);
  const cats = pets.filter((pet) => pet.category === "cat");
  return (
    <>
      <Hero title={"Cats"} bgImg="catsBg" />
      <Pets pets={"cats"}>
        <PetsHeading pets="Cats" />
        <div className="pets__catalog">
          {cats.map((pet, index) => {
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
        </div>
      </Pets>
    </>
  );
};

export default Cats;
