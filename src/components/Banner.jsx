import classes from "./Banner.module.scss";
const Banner = (props) => {
  const { page, text, src} = props;
  let bannerClass = classes.Container + ' '
  switch (page) {
    case "Home":
      bannerClass += classes.Container___home;
      break;
    case "About":
      bannerClass += classes.Container___about;
      break;
    default:
      break;
  }

  console.log(bannerClass)
  console.log(text)
  return (
    <div className={bannerClass}>
      <img src={src} alt="" />
      {text && <h2>{text}</h2>}
    </div>
  );
};
export default Banner;
