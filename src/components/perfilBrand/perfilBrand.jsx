import React, { useState } from "react";
import styles from "./perfilBrand.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faXmark,
  faPencil,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import FormEditBrand from "@/components/formEditPerfil/formEditBrand";

export default function PerfilBrand({ userData }) {
  const [editPerfil, setEditPerfil] = useState(false);
  console.log(userData);

  return (
    <section className={styles.containerBrand}>
      <section className={styles.imgBrand}>
        {!editPerfil && (
          <>
            <Link
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkCircle}
            >
              <FontAwesomeIcon
                icon={faBagShopping}
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
                icon={faFacebookF}
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
              <FontAwesomeIcon
                icon={faTiktok}
                size="2x"
                className={styles.icon}
              />
            </Link>
          </>
        )}
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
          src={userData?.expediente?.imageUrl || "/prom.png"}
          alt="img-perfil-marca"
          fill={true}
        />
        <span></span>
      </section>
      {editPerfil ? (
        <FormEditBrand userData={userData} />
      ) : (
        <section className={styles.infoBrand}>
          <h3>{userData?.nombreMarca}</h3>
          <p>{userData?.expediente?.category}</p>
          <p>{userData?.email}</p>
          <p>{userData?.expediente?.ruc}</p>
        </section>
      )}
    </section>
  );
}
