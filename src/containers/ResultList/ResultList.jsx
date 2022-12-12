import Card from "../../components/Card/Card";

const ResultList = ({ results }) => {
  const resultsJSX = results.map((result) => (
    <Card key={result.name} result={result} />
  ));

  return <>{resultsJSX}</>;
};

export default ResultList;
