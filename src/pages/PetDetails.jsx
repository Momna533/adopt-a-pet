import { useParams } from "react-router-dom";
import data from "../data";
import Hero from "../components/Hero";

const PetDetails = () => {
  const { id } = useParams();
  const pet = data.find((pet) => pet.name === id);
  const { name, gender, image } = pet;
  return (
    <>
      <Hero title={name} bgImg="homeImg" />
      <div className="single__pet__card">
        <div className="single__pet__card__img">
          <img src={image} alt={name} />
        </div>
        <h3>{name}</h3>
        <p>{gender}</p>
      </div>
    </>
  );
};

export default PetDetails;
