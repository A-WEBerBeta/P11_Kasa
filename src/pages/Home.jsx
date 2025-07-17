import bgHome from "../assets/img/source1.png";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import PageHeader from "../components/PageHeader";

const Home = () => {
  return (
    <div className="Home">
      <PageHeader
        backgroundImage={bgHome}
        title="Chez vous, partout et ailleurs"
        overlayOpacity={0.6}
      />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Home;
