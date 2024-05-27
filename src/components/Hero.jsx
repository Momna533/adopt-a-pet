const Hero = ({ title, bgImg }) => {
  return (
    <div className={`hero ${bgImg}`}>
      <h1 className="hero__title">{title}</h1>
    </div>
  );
};

export default Hero;
