import "./Card.scss";
const Card = ({ result }) => {
  return (
    <div key={result.ChargeDeviceName} className="card">
      <div className="card__seller-info">
        <h2>{result.ChargeDeviceName}</h2>
        <p>
          {result.ChargeDeviceLocation &&
            result.ChargeDeviceLocation.Address.Street}
        </p>
      </div>
      <div className="card__distance-time-container">
        <p>
          {result.ChargeDeviceLocation &&
            result.ChargeDeviceLocation.Address.PostCode}
        </p>
      </div>
    </div>
  );
};

export default Card;
