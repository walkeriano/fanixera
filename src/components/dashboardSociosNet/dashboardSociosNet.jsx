import React, { useState } from "react";
import styles from "./dashboardSociosNet.module.css";
import PerfilBrand from "@/components/perfilBrand/perfilBrand";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen, faFolderPlus } from "@fortawesome/free-solid-svg-icons";
import AllAdsBrand from "@/components/allAdsBrand/allAdsBrand";
import FormCreationAd from "@/components/formCreationAd/formCreationAd";

export default function DashboardSociosNet() {
  const [change, setChange] = useState(false);

  return (
    <section className={styles.containerDashboard}>
      <PerfilBrand />
      <section className={styles.buttonPannel}>
        <section
          onClick={() => setChange(false)}
          className={`${styles.sec} ${
            !change ? styles.active : styles.inactive
          }`}
        >
          <FontAwesomeIcon
            icon={faFolderPlus}
            size="2x"
            className={styles.icon}
          />
          Creador
        </section>
        <section
          onClick={() => setChange(true)}
          className={`${styles.sec} ${
            change ? styles.active : styles.inactive
          }`}
        >
          <FontAwesomeIcon
            icon={faFolderOpen}
            size="2x"
            className={styles.icon}
          />
          Bandeja
        </section>
      </section>
      {change ? <AllAdsBrand /> : <FormCreationAd />}
    </section>
  );
}
