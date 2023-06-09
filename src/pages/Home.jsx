import Banner from "../components/Banner";
import BannerImg from "../assets/images/banner-img-home.jpg";
import Logements from "../components/Logements";
import logements from "../data/logements.json";
export default function Home() {
  return (
    <div>
      <Banner
        page="Home"
        text="Chez vous, partout et ailleurs"
        src={BannerImg}
      />
      <Logements logements={logements} />
    </div>
  );
}
