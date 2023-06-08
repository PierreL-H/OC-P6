import classes from "./Logements.module.scss";
import LogementCard from "./LogementCard";

const Logements = ({ logements }) => {
  return (
    <div className={classes.Container}>
      {logements.map((logement) => (
        <LogementCard logement={logement} key={logement.id} />
      ))}
    </div>
  );
};

export default Logements;
