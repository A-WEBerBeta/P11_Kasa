import data from "../data/logements.json";
import Card from "./Card";

const Gallery = () => {
  return (
    <div className="gallery">
      {data.map((logement) => (
        <Card key={logement.id} title={logement.title} cover={logement.cover} />
      ))}
    </div>
  );
};

export default Gallery;
