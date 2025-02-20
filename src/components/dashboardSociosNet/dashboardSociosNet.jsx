import React, { useState, useEffect, useContext } from "react";
import styles from "./dashboardSociosNet.module.css";
import VerifiedBrand from "@/components/verifiedBrand/verifiedBrand";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen, faFolderPlus } from "@fortawesome/free-solid-svg-icons";
import AllAdsBrand from "@/components/allAdsBrand/allAdsBrand";
import FormCreationAd from "@/components/formCreationAd/formCreationAd";
import AuthContext from "@/state/auth/auth-context";

export default function DashboardSociosNet() {
  const [change, setChange] = useState(false);
  const { user, loadingUserData } = useContext(AuthContext);

  return (
    <section className={styles.containerDashboard}>
      <VerifiedBrand user={user} loadingUserData={loadingUserData} />
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
