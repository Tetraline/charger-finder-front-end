import Card from "../../components/Card/Card";

const ResultList = ({ results }) => {
  const resultsJSX =
    results.length &&
    results.map((result, i) => (
      <Card key={i + result.ChargeDeviceName} result={result} />
    ));

  return <>{resultsJSX}</>;
};

export default ResultList;
