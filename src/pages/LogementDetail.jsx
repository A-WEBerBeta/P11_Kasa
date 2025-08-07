import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Carousel from "../components/Carousel";
import Collapse from "../components/Collapse";
import Rating from "../components/Rating";
import data from "../data/logements.json";

const LogementDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [logement, setLogement] = useState({});

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    const logement_ = data.find((item) => item.id === id);
    if (logement_) {
      setLogement(logement_);
      const [firstName_, lastName_] = logement_.host.name.split(" ");
      setFirstName(firstName_);
      setLastName(lastName_);
    } else {
      navigate("/logement-non-trouve");
    }
  }, [id, navigate]);

  return (
    <>
      {logement.title ? (
        <div className="logement-detail">
          <div className="logement-detail__carousel">
            <Carousel pictures={logement.pictures} />
          </div>

          <div className="logement-detail__info">
            <div>
              <h1>{logement.title}</h1>
              <p>{logement.location}</p>
              <div className="tags">
                {logement.tags.map((tag, index) => (
                  <span key={index} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="host-rating">
              <div className="host">
                <p>
                  {firstName}
                  <br />
                  {lastName}
                </p>
                <img src={logement.host.picture} alt={logement.host.name} />
              </div>
              <div className="rating">
                <Rating rating={logement.rating} />
              </div>
            </div>
          </div>

          <div className="toggle">
            <Collapse title="Description">
              <p>{logement.description}</p>
            </Collapse>
            <Collapse title="Équipements">
              <ul>
                {logement.equipments.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </Collapse>
          </div>
        </div>
      ) : (
        <h1>Chargement...</h1>
      )}
    </>
  );
};

export default LogementDetail;
