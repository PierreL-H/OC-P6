import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import classes from "./Root.module.scss"
export default function RootLayout() {
  return (
    <>
      <div className={classes.Wrapper}>
        <Header />
        <main className={classes.Content}>
          <Outlet></Outlet>
        </main>
      <Footer />
      </div>
    </>
  );
}
