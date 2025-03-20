import React, { useEffect, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import AuthContext from "@/state/auth/auth-context";
import styles from "./dashboardSociosNet.module.css";
import PerfilBrand from "@/components/perfilBrand/perfilBrand";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen, faFolderPlus } from "@fortawesome/free-solid-svg-icons";
import AllAdsBrand from "@/components/allAdsBrand/allAdsBrand";
import FormCreationAd from "@/components/formCreationAd/formCreationAd";

export default function DashboardSociosNet() {
  const [change, setChange] = useState(false);
  const [viewPerfil, setViewPerfil] = useState(false);


  return (
    <section className={styles.containerDashboard}>
      <PerfilBrand />
      {viewPerfil ? (
        <AllAdsBrand />
      ) : (
        <>
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
              Beneficios
            </section>
          </section>
          {change ? <AllAdsBrand /> : <FormCreationAd />}
        </>
      )}
    </section>
  );
}
