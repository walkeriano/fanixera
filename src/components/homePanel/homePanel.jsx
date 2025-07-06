import React, { useState } from "react";
import styles from "./homePanel.module.css";
import HeaderSesion from "@/components/headerSesion/headerSesion";
import AllResume from "@/components/allResume/allResume";
import MenuPanel from "@/components/menuPanel/menuPanel";
import OnlyBenefits from "@/components/onlyBenefits/onlyBenefits";
import OnlyUsers from "@/components/onlyUsers/onlyUsers";
export default function HomePanel() {
  const [vistaActual, setVistaActual] = useState("pencil");

  const renderVista = () => {
    switch (vistaActual) {
      case "pencil":
        return <AllResume/>;
      case "gift":
        return <OnlyBenefits/>;
      case "user":
        return <OnlyUsers/>;
      case "store":
        return <div>hello world4</div>;
      default:
        return <div>hello world5</div>;
    }
  };

  return (
    <section className={styles.homePanelContainer}>
      <HeaderSesion />
      <section className={styles.flexContainer}>{renderVista()}</section>
      <MenuPanel vistaActual={vistaActual} setVistaActual={setVistaActual} />
    </section>
  );
}
