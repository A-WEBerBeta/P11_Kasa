const PageHeader = ({ backgroundImage, title, overlayOpacity }) => {
  return (
    <div
      className="page-header"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div
        className="page-header__overlay"
        style={{ backgroundColor: `rgba(0,0,0, ${overlayOpacity})` }}
      ></div>
      <h1 className="page-header__title">{title}</h1>
    </div>
  );
};

export default PageHeader;
