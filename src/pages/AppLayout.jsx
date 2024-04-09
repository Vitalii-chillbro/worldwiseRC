import { useState } from "react";
import Map from "../components/Map";
import Sidebar from "../components/Sidebar";
import User from "../components/User";
import styles from "./AppLayout.module.css";

function AppLayout() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.app}>
      <Sidebar isOpen={isOpen} />
      <Map onMapClick={handleClick} />
      <User />
      <div
        className={`${styles.burger} ${isOpen ? "" : styles["burger-x"]}`}
        onClick={handleClick}
      >
        {isOpen ? <>&#9776;</> : <>&#88;</>}
      </div>
    </div>
  );
}

export default AppLayout;
