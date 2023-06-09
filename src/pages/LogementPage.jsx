import logements from "../data/logements.json";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const LogementPage = () => {
  const params = useParams();
  const logement = logements.find((item) => item.id === params.id);
  const navigate = useNavigate()
  useEffect(() => {
    !logement && navigate("not-found")
  })
  console.log(logement);

  return <p>plop</p>;
};

export default LogementPage;
