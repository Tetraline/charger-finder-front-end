import "./Card.scss";
const Card = ({ result }) => {
  const openInMaps = (lat, lng) => {
    window.open(`https://maps.google.com/?q=${lat},${lng}`);
  };
  return (
    <div
      key={result.ChargeDeviceName}
      className="card"
      onClick={() =>
        openInMaps(
          result.ChargeDeviceLocation.Latitude,
          result.ChargeDeviceLocation.Longitude
        )
      }
    >
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
