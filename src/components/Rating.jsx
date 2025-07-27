import starEmpty from "../assets/img/starEmpty.png";
import starFull from "../assets/img/starFull.png";

const Rating = ({ rating }) => {
  const totalStars = 5;

  return (
    <div className="rating">
      {[...Array(totalStars)].map((_, index) => (
        <img
          key={index}
          src={index < rating ? starFull : starEmpty}
          alt={index < rating ? "étoile remplie" : "étoile vide"}
        />
      ))}
    </div>
  );
};

export default Rating;
