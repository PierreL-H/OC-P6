import { useEffect, useRef, useState } from "react";
import classes from "./Collapsible.module.scss";
import chevron from "../assets/images/chevron.svg";

const Collapsible = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  let renderedChildren = "";
  if (Array.isArray(children)) {
    renderedChildren = <ul>{children.map((child, index) => <li key={index}>{child}</li>)}</ul>;
  } else {
    renderedChildren = children
  }

  const clickHandler = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    isOpen
      ? setHeight(ref.current.getBoundingClientRect().height)
      : setHeight(0);
  }, [isOpen]);

  return (
    <div className={classes.Container}>
      <div className={classes.Container_Header}>
        <h3>{title}</h3>
        <button onClick={clickHandler}>
          <img
            src={chevron}
            alt=""
            className={`${classes.Container_Chevron___rotate} ${
              isOpen ? classes.down : classes.up
            }`}
          />
        </button>
      </div>
      <div className={classes.Container_Children} style={{ height: height }}>
        <div ref={ref} className={classes.Container_Children_Content}>
          {renderedChildren}
        </div>
      </div>
    </div>
  );
};

export default Collapsible;
