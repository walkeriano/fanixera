import React, { useState, useContext } from "react";
import styles from "./perfilBrand.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faXmark,
  faPencil,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import FormEditBrand from "@/components/formEditPerfil/formEditBrand";
import AuthContext from "@/state/auth/auth-context";

export default function PerfilBrand() {
  const { user, loadingUserData } = useContext(AuthContext);
  const [editPerfil, setEditPerfil] = useState(false);

  if (loadingUserData) {
    return <Loading />; // Muestra un loader mientras se cargan los datos
  }

  return (
    <section className={styles.containerBrand}>
      <section className={styles.imgBrand}>
        <Link
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.linkCircle}
        >
          <FontAwesomeIcon
            icon={faLink}
            size="2x"
            className={styles.icon}
          />
        </Link>
        <Link
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.linkCircleTwo}
        >
          <FontAwesomeIcon
            icon={faFacebook}
            size="2x"
            className={styles.icon}
          />
        </Link>
        <Link
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.linkCircleTre}
        >
          <FontAwesomeIcon
            icon={faInstagram}
            size="2x"
            className={styles.icon}
          />
        </Link>
        <Link
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.linkCircleFor}
        >
          <FontAwesomeIcon icon={faTiktok} size="2x" className={styles.icon} />
        </Link>
        <button
          onClick={() => setEditPerfil((prev) => !prev)}
          className={`${styles.editData} ${editPerfil ? styles.active : ""}`}
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
          src={user?.expediente?.imageUrl || "/prom.png"}
          alt="img-perfil-marca"
          fill={true}
        />
        <span></span>
      </section>
      {editPerfil ? (
        <FormEditBrand user={user} />
      ) : (
        <section className={styles.infoBrand}>
          <h3>{user?.nombreMarca}</h3>
          <p>{user?.expediente?.category}</p>
          <p>{user?.email}</p>
          <p>{user?.expediente?.ruc}</p>
        </section>
      )}
    </section>
  );
}
