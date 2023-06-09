import Banner from "../components/Banner";
import BannerImg from "../assets/images/banner-img-about.jpg";
import Collapsible from "../components/Collapsible";
import classes from "./About.module.scss";
export default function About() {
  return (
    <div className={classes.Body}>
      <Banner page="About" src={BannerImg} />
      <div className={classes.Content}>
        <div className={classes.Collapsible}>
          <Collapsible
            title="Fiabilité"
            children="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
          />
        </div>
        <div className={classes.Collapsible}>
          <Collapsible
            title="Respect"
            children="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          />
        </div>
        <div className={classes.Collapsible}>
          <Collapsible
            title="Service"
            children="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          />
        </div>
        <div className={classes.Collapsible}>
          <Collapsible
            title="Sécurité"
            children="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          />
        </div>
      </div>
    </div>
  );
}
