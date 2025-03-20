import React, { useState, useContext } from "react";
import AuthContext from "@/state/auth/auth-context";
import styles from "./dashboardSociosNet.module.css";
import PerfilBrand from "@/components/perfilBrand/perfilBrand";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolderOpen,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";
import AllAdsBrand from "@/components/allAdsBrand/allAdsBrand";
import FormCreationAd from "@/components/formCreationAd/formCreationAd";
import useUserProfile from "@/state/hook/useUserProfile";

export default function DashboardSociosNet() {
  const { user } = useContext(AuthContext);
  const [change, setChange] = useState(false);
  const { userData, loading, error } = useUserProfile();

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!userData) return <p>No se encontró el perfil.</p>;

  return (
    <section className={styles.containerDashboard}>
      <PerfilBrand userData={userData} />
      {user ? (
        <>
          <section className={styles.buttonPannel}>
            <section
              onClick={() => setChange(false)}
              className={`${styles.sec} ${
                !change ? styles.active : styles.inactive
              }`}
            >
              <FontAwesomeIcon
                icon={faScrewdriverWrench}
                size="2x"
                className={styles.icon}
              />
              Crear
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
          {change ? (
            <AllAdsBrand nombreMarca={userData?.nombreMarca} />
          ) : (
            <FormCreationAd />
          )}
        </>
      ) : (
        <p>promociones de marca para usuario</p>
      )}
    </section>
  );
}
