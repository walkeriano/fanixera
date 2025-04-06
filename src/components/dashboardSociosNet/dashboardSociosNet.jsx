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
import LoaderSpecific from "@/components/loaderSpecific/loaderSpecific";

export default function DashboardSociosNet() {
  const { user } = useContext(AuthContext);
  const [change, setChange] = useState(false);
  const { userData, loading, error } = useUserProfile();

  if (loading) return <LoaderSpecific/>;
  if (error) return <p>Error: {error}</p>;
  if (!userData) return <p>No se encontró el perfil.</p>;

  // Verificar si el usuario autenticado es dueño de la marca actual
  const isOwner = user?.nombreMarca === userData?.nombreMarca;

  return (
    <section className={styles.containerDashboard}>
      <PerfilBrand userData={userData} />
      {isOwner ? (
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
        <AllAdsBrand nombreMarca={userData?.nombreMarca} />
      )}
    </section>
  );
}
