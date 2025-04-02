import React, { useState, useContext } from "react";
import styles from "./verifiedUser.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faPencil,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import AllAdsClient from "@/components/allAdsBrand/allAdsClient";
import FormEditPerfil from "@/components/formEditPerfil/formEditPerfil";
import AuthContext from "@/state/auth/auth-context";

export default function VerifiedUser() {
  const [editPerfil, setEditPerfil] = useState(false);
  const { user } = useContext(AuthContext);

  return (
    <section className={styles.containerBrand}>
      <section className={styles.imgBrand}>
        <button
          onClick={() => setEditPerfil((prev) => !prev)}
          className={`${styles.editData} ${
            editPerfil ? styles.activeEdit : ""
          }`}
        >
          {editPerfil ? (
            <FontAwesomeIcon icon={faXmark} size="2x" className={styles.icon} />
          ) : (
            <FontAwesomeIcon
              icon={faPencil}
              size="2x"
              className={styles.icon}
            />
          )}
        </button>
        {editPerfil && (
          <button className={styles.editImgProfile}>
            <FontAwesomeIcon icon={faUser} size="2x" className={styles.icon} />
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
      <AllAdsClient />
    </section>
  );
}
