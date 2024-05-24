import { useParams } from "react-router-dom";
import data from "../data";
import Hero from "../components/Hero";

const SinglePet = () => {
  const { id } = useParams();
  console.log(id);
  const pet = data.find((pet) => pet.name === id);
  const { name, gender, image } = pet;
  return (
    <>
      <Hero title={id} />
      <div className="pet__card">
        <div className="pet__card__img">
          <img src={image} alt={name} />
        </div>
        <h3>{name}</h3>
        <p>{gender}</p>
      </div>
    </>
  );
};

export default SinglePet;
