import "./Card.scss";
const Card = ({ result }) => {
  return (
    <div key={result.name} className="card">
      <div className="card__seller-info">
        <h2>{result.name}</h2>
        <p>{result.description}</p>
      </div>
      <div className="card__distance-time-container">
        <p>{result.distance}</p>
        <p>{result.time}</p>
      </div>
    </div>
  );
};

export default Card;
