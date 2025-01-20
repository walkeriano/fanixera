import React, { useState, useEffect, useContext } from "react";
import styles from "./nuevoExpediente.module.css";
import AuthContext from "@/state/auth/auth-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLink,
  faStore,
  faAt,
  faFingerprint,
  faImage,
  faCamera,
  faTriangleExclamation,
  faFileShield,
  faListOl,
  faCommentMedical,
  faLocationArrow
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

export default function NuevoExpediente() {
  const { user } = useContext(AuthContext);

  return (
    <section className={styles.containerExpediente}>
      <section className={styles.identidadUsuario}>
        <Image src="/mascot-blue.png" alt="icon-mascot" width={160} height={160} className={styles.imgMoney} />
        <h2>
          Exclente! <span>Ahora puedes crear beneficios para tus clientes</span>
        </h2>
        <p className={styles.pId}>
          Registra el expediente de tu marca para comenzar
        </p>
        <section className={styles.idExpediente}>
          <section className={styles.titleSection}>
            <h3>1. Identidad de marca</h3>
            <FontAwesomeIcon
              icon={faFingerprint}
              size="2x"
              className={styles.icon}
            />
          </section>
          <section className={styles.boxVerifyUser}>
            <div className={styles.itemVerify}>
              <div className={styles.flexDescription}>
                <p>Nombre comercial</p>
                <FontAwesomeIcon
                  icon={faStore}
                  size="2x"
                  className={styles.icon}
                />
              </div>
              <h3>{user?.email}</h3>
            </div>
            <div className={styles.itemVerify}>
              <div className={styles.flexDescription}>
                <p>Email de acceso</p>
                <FontAwesomeIcon
                  icon={faAt}
                  size="2x"
                  className={styles.icon}
                />
              </div>
              <h3>{user?.email}</h3>
            </div>
          </section>
        </section>
      </section>
      <section className={styles.boxForm}>
        <section className={styles.itemForm}>
          <section className={styles.titleSection}>
            <h3>2. Logotipo de marca</h3>
            <FontAwesomeIcon icon={faImage} size="2x" className={styles.icon} />
          </section>
          <section className={styles.imagePerfil}>
            <FontAwesomeIcon
              icon={faCamera}
              size="2x"
              className={styles.icon}
            />
            <p>Adjuntar aqui...</p>
          </section>
          <section className={styles.boxDetalles}>
            <div className={styles.notificación}>
              <h4>Campo vacío</h4>
              <FontAwesomeIcon
                icon={faTriangleExclamation}
                size="2x"
                className={styles.icon}
              />
            </div>
            <p>Formato JPG o PNG</p>
            <p>Tamaño máx. 1MB</p>
          </section>
        </section>
        <section className={styles.itemForm}>
          <section className={styles.titleSection}>
            <h3>3. Datos informativos</h3>
            <FontAwesomeIcon icon={faFileShield} size="2x" className={styles.icon} />
          </section>
          <section className={styles.flexInputs}>
            <label>
              <input type="text" placeholder="Nº de Ruc empresarial..." />
              <FontAwesomeIcon
                icon={faListOl}
                size="2x"
                className={styles.icon}
              />
            </label>
            <label>
              <input type="text" placeholder="Categoría..." />
              <FontAwesomeIcon
                icon={faLink}
                size="2x"
                className={styles.icon}
              />
            </label>
            <label>
              <input type="text" placeholder="Descripción..." />
              <FontAwesomeIcon
                icon={faCommentMedical}
                size="2x"
                className={styles.icon}
              />
            </label>
          </section>
        </section>
        <section className={styles.itemForm}>
          <section className={styles.titleSection}>
            <h3>3. Canales de contacto</h3>
            <FontAwesomeIcon icon={faLocationArrow} size="2x" className={styles.icon} />
          </section>
          <section className={styles.flexInputs}>
            <label>
              <input type="text" placeholder="Sitio web..." />
              <FontAwesomeIcon
                icon={faLink}
                size="2x"
                className={styles.icon}
              />
            </label>
            <label>
              <input type="text" placeholder="Facebook..." />
              <FontAwesomeIcon
                icon={faFacebook}
                size="2x"
                className={styles.icon}
              />
            </label>
            <label>
              <input type="text" placeholder="Instagram..." />
              <FontAwesomeIcon
                icon={faInstagram}
                size="2x"
                className={styles.icon}
              />
            </label>
            <label>
              <input type="text" placeholder="Tiktok..." />
              <FontAwesomeIcon
                icon={faTiktok}
                size="2x"
                className={styles.icon}
              />
            </label>
          </section>
        </section>
      </section>
    </section>
  );
}
