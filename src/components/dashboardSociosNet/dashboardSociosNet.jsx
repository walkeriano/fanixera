import React, { useState, useEffect, useContext } from "react";
import styles from "./dashboardSociosNet.module.css";
import VerifiedBrand from "@/components/verifiedBrand/verifiedBrand";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFolderOpen,
    faFolderPlus
} from "@fortawesome/free-solid-svg-icons";
import AllAdsBrand from "@/components/allAdsBrand/allAdsBrand";
import FormCreationAd from "@/components/formCreationAd/formCreationAd";


export default function DashboardSociosNet(){
    const [change, setChange] = useState(true);

    return(
        <section className={styles.containerDashboard}>
            <VerifiedBrand />
            <section className={styles.buttonPannel}>
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
                bandeja
              </section>
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
                Crear nuevo
              </section>
            </section>
            {change ? <AllAdsBrand/> : <FormCreationAd/>}
        </section>
    )
}