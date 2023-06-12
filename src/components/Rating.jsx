import starR from "../assets/images/star_red.svg";
import starG from "../assets/images/star_grey.svg";
import classes from "./Rating.module.scss";

const Rating = ({ rating }) => {
  let ratings = [starG, starG, starG, starG, starG];
  ratings.fill(starR, 0, rating);
  console.log("ratings: ", ratings);
  return (
    <div className={classes.Container}>
      {ratings.map((star, index) => (
        <img src={star} key={index} alt="rating star"></img>
      ))}
    </div>
  );
};

export default Rating;
