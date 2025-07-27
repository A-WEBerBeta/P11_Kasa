import { Link } from "react-router";

const Card = ({ id, title, cover }) => {
  return (
    <Link to={`/logement/${id}`} className="card">
      <div
        className="card__background"
        style={{ backgroundImage: `url(${cover})` }}
      >
        <div className="card__overlay">
          <h2 className="card__title">{title}</h2>
        </div>
      </div>
    </Link>
  );
};

export default Card;
