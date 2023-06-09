import classes from "./Logements.module.scss";
import LogementCard from "./LogementCard";
import { Link } from "react-router-dom";

const Logements = ({ logements }) => {
  return (
    <div className={classes.Container}>
      {logements.map((logement) => (
        <Link to={`logement/${logement.id}`} key={logement.id}>
        <LogementCard logement={logement} key={logement.id} />
        </Link>
      ))}
    </div>
  );
};

export default Logements;
