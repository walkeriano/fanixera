import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import styles from "./accesWarning.module.css";

export default function AccesWarning() {
  const [show, setShow] = useState(true);

  return (
    <section className={styles.containerGeneral}>
      <section className={styles.containerOn}>
        {show ? (
          <>
            <FontAwesomeIcon
              icon={faUserSecret}
              size="2x"
              className={styles.icon}
            />
            <input type="text" placeholder="Acceder" />
            <button onClick={() => setShow(false)} className={styles.btnActive}>
              GO!
            </button>
          </>
        ) : (
          <>
            <h2>Bienvenido Alexander</h2>
            <section className={styles.formContainer}>
              <input type="text" placeholder="usuario" />
              <input type="password" placeholder="contraseña" />
            </section>
            <button
              onClick={() => setShow(true)}
              className={styles.btnActiveTwo}
            >
              entrar
            </button>
          </>
        )}
      </section>
    </section>
  );
}
