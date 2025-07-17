import bgAbout from "../assets/img/source2.png";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";

const About = () => {
  return (
    <div className="About">
      <PageHeader backgroundImage={bgAbout} title="" overlayOpacity={0.3} />
      <Footer />
    </div>
  );
};

export default About;
