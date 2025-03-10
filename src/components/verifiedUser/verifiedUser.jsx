import React, { useState, useContext } from "react";
import styles from "./verifiedUser.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGears,
  faUser,
  faHandPointer,
  faFolderOpen,
  faFolderPlus,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import AllAdsClient from "@/components/allAdsBrand/allAdsClient";
import FormEditPerfil from "@/components/formEditPerfil/formEditPerfil";
import AuthContext from "@/state/auth/auth-context";

export default function VerifiedUser() {
  const [editPerfil, setEditPerfil] = useState(false);
  const [change, setChange] = useState(false);
  const { user } = useContext(AuthContext);

  return (
    <section className={styles.containerBrand}>
      <section className={styles.imgBrand}>
        {editPerfil && (
          <button className={styles.editImgProfile}>
            <FontAwesomeIcon
              icon={faHandPointer}
              size="2x"
              className={styles.icon}
            />
            Editar imagen
          </button>
        )}
        <Image
          src={user?.imageUrl || "/prom.png"}
          alt="img-perfil-marca"
          fill={true}
        />
        <span></span>
      </section>
      {editPerfil ? (
        <FormEditPerfil user={user} />
      ) : (
        <section className={styles.infoBrand}>
          <h3>{user?.nombreMarca}</h3>
          <p>{user?.email}</p>
          <p>993 744 958</p>
          <p>San miguel, Lima</p>
        </section>
      )}
      <button
        onClick={() => setEditPerfil((prev) => !prev)}
        className={styles.editData}
      >
        {editPerfil ? (
          <>
            Volver al perfil
            <FontAwesomeIcon icon={faUser} size="2x" className={styles.icon} />
          </>
        ) : (
          <>
            Editar perfil
            <FontAwesomeIcon icon={faGears} size="2x" className={styles.icon} />
          </>
        )}
      </button>
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
          Mis reservas
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
          Historial
        </section>
      </section>
      {change ? <p>hello world</p> : <AllAdsClient />}
    </section>
  );
}
