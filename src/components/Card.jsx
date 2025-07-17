const Card = ({ title, cover }) => {
  return (
    <div className="card" style={{ backgroundImage: `url(${cover})` }}>
      <div className="card__overlay">
        <h2 className="card__title">{title}</h2>
      </div>
    </div>
  );
};

export default Card;
