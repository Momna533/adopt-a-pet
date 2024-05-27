import Hero from "../components/Hero";
import data from "../data";
import { Link } from "react-router-dom";
import Pets from "../components/Pets";

const Cats = () => {
  const pets = data.map((pet) => pet);
  const cats = pets.filter((pet) => pet.category === "cat");
  return (
    <>
      <Hero title={"Cats"} bgImg="catsBg" />
      <Pets pets={"cats"}>
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
      </Pets>
    </>
  );
};

export default Cats;
