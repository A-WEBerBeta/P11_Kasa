import LogoFooter from "../assets/img/logo-footer.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__logo">
        <img src={LogoFooter} alt="logo Kasa" />
      </div>
      <div className="footer__copyright">
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
