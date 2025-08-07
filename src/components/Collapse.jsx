import { useState } from "react";
// import chevronDown from "../assets/img/chevron-down.png";
import chevronUp from "../assets/img/chevron-up.png";

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(0);

  const toggleCollapse = () => {
    if (isOpen === 0 || isOpen === -1) {
      setIsOpen(1);
    } else {
      setIsOpen(-1);
    }
  };

  return (
    <div className="collapse">
      <div
        className={`collapse__title ${
          isOpen === 1 ? "open" : isOpen === -1 ? "closed" : ""
        }`}
      >
        <p>{title}</p>
        <span className="chevron" onClick={toggleCollapse}>
          <img src={chevronUp} alt="état du menu" />
        </span>
      </div>

      <div
        className={`collapse__content ${
          isOpen === 1 ? "open" : isOpen === -1 ? "closed" : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Collapse;
