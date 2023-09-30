import HeroSection from "./components/HeroSection";

const About = () => {
  const data = {
    name: "ToxiCoder Ecom.",
  };

  return (
    <>
      <HeroSection myData={data} />
    </>
  );
};

export default About;
