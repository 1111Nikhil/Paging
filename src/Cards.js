const Cards = ({ image, title }) => {
  return (
    <div className="Card">
      <img src={image} alt={title} className="img" />
      <span>{title}</span>
    </div>
  );
};

export default Cards;
