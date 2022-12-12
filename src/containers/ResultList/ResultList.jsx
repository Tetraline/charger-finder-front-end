import Card from "../../components/Card/Card";

const ResultList = ({ results }) => {
  const resultsJSX =
    results.length &&
    results.map((result) => (
      <Card key={result.ChargeDeviceLocation.Latitude} result={result} />
    ));

  return <>{resultsJSX}</>;
};

export default ResultList;
