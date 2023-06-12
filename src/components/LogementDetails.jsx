import classes from "./LogementDetails.module.scss";
import Rating from "./Rating";
import Tags from "./Tags";
import Collapsible from "./Collapsible";

const LogementDetails = ({ logement }) => {
  //   console.log("name: ", logement.title);
  //   console.log("location: ", logement.location);
  //   console.log("host name: ", logement.host.name);
  //   console.log("host picture: ", logement.host.picture);
  //   console.log("tags: ", logement.tags);
  //   console.log("description: ", logement.description);
  //   console.log("equipements: ", logement.equipments);
  console.log("rating: ", logement.rating);

  return (
    <div className={classes.Container}>
      <div className={classes.top_block}>
        <div className={classes.title_block}>
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
          <Tags tags={logement.tags} />
        </div>
        <div className={classes.host_block}>
          <div className={classes.host}>
            <span>{logement.host.name}</span>
            <img
              src={logement.host.picture}
              alt=""
              className={classes.host_picture}
            />
          </div>
          <Rating rating={logement.rating} />
        </div>
      </div>
      <div className={classes.description_block}>
        <div className={classes.collapsible_container}>
          <Collapsible title="Description" children={logement.description} />
        </div>
        <div className={classes.collapsible_container}>
          <Collapsible title="Équipements" children={logement.equipments} />
        </div>
      </div>
    </div>
  );
};

export default LogementDetails;
