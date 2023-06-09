import logements from "../data/logements.json";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import Slideshow from "../components/Slideshow";
import classes from "./LogementPage.module.scss";

const LogementPage = () => {
  const params = useParams();
  const logement = logements.find((item) => item.id === params.id);
  const navigate = useNavigate();
  useEffect(() => {
    !logement && navigate("not-found");
  });
  console.log(logement);

  return (
    <div className={classes.Content}>
      <Slideshow images={logement.pictures} />
      <p>{logement.title}</p>
    </div>
  );
};

export default LogementPage;
