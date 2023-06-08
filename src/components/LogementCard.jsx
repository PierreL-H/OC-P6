import classes from "./LogementCard.module.scss";

const LogementCard = ({ logement }) => {
  return (
    <figure>
      <img src={logement.cover} alt="" />
      <figcaption>{logement.title}</figcaption>
    </figure>
  );
};

export default LogementCard;
