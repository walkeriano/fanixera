import React, { useState } from "react";
import styles from "./registroDirecto.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserSecret,
  faBell,
  faUserShield,
  faUserPen,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGooglePlusG } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import FormRegistroClient from "@/components/formRegistroClient/formRegistroClient";
import FormLoginClient from "@/components/formLoginClient/formLoginClient";

export default function RegistroDirecto() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <section className={styles.boxRegistroDirecto}>
      <section className={styles.titleSection}>
        <div className={styles.circleIcon}>
          <FontAwesomeIcon
            icon={faUserSecret}
            size="2x"
            className={styles.icon}
          />
          <span>
            <FontAwesomeIcon icon={faBell} size="2x" className={styles.icon} />
          </span>
        </div>
        <h4>Confirmar identidad</h4>
        <p>
          El código de beneficio es único por usuario, al cobrarlo deberá
          mostrar su documento de identidad.
        </p>
      </section>
      <section className={styles.linkSection}>
        <Link href="/" className={styles.linkContactBrand}>
          <FontAwesomeIcon
            icon={faGooglePlusG}
            size="2x"
            className={styles.icon}
          />
          <p>Acceder con Gmail</p>
        </Link>
        <Link href="/" className={styles.linkContactBrand}>
          <FontAwesomeIcon
            icon={faFacebook}
            size="2x"
            className={styles.icon}
          />
          <p>Acceder con Facebook</p>
        </Link>
      </section>
      <section className={styles.containerAccesos}>
        <section className={styles.accesBtns}>
          <button
            onClick={() => setShowLogin(true)}
            className={`${styles.btnAction} ${
              showLogin ? styles.active : styles.inactive
            }`}
          >
            Iniciar Sesion
          </button>
          <button
            onClick={() => setShowLogin(false)}
            className={`${styles.btnAction} ${
              !showLogin ? styles.active : styles.inactive
            }`}
          >
            Registro
          </button>
        </section>
        {showLogin ? <FormLoginClient /> : <FormRegistroClient />}
      </section>
    </section>
  );
}
