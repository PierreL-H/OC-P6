import logements from "../data/logements.json";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import Slideshow from "../components/Slideshow";
import classes from "./LogementPage.module.scss";
import LogementDetails from "../components/LogementDetails";

const LogementPage = () => {
  const params = useParams();
  const logement = logements.find((item) => item.id === params.id);
  const navigate = useNavigate();
  useEffect(() => {
    !logement && navigate("not-found");
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  console.log(logement);

  return (
    <div className={classes.Content}>
      <Slideshow images={logement.pictures} />
      <LogementDetails logement={logement} />
    </div>
  );
};

export default LogementPage;
