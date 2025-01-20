import React, { useState, useEffect, useContext } from "react";
import styles from "./nuevoExpediente.module.css";
import AuthContext from "@/state/auth/auth-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export default function NuevoExpediente() {
  const { user } = useContext(AuthContext);

  return (
    <section className={styles.containerExpediente}>
      <section className={styles.identidadUsuario}>
        <h2>
          Exclente! <span>Ahora puedes crear beneficios para tus clientes</span>
        </h2>
        <p className={styles.pId}>Registra el expediente de tu marca para comenzar</p>
        <section className={styles.idExpediente}>
          <section className={styles.titleSection}>
            <h3>1. Identidad de marca</h3>
            <FontAwesomeIcon icon={faLink} size="2x" className={styles.icon} />
          </section>
          <section className={styles.boxVerifyUser}>
            <div className={styles.itemVerify}>
              <p>Nombre:</p>
              <h3>{user?.email}</h3>
            </div>
            <div className={styles.itemVerify}>
              <p>Email:</p>
              <h3>{user?.email}</h3>
            </div>
          </section>
        </section>
      </section>
      <section className={styles.boxForm}>
        <section className={styles.itemForm}>
          <section className={styles.titleSection}>
            <h3>1. Imagen de marca</h3>
            <FontAwesomeIcon icon={faLink} size="2x" className={styles.icon} />
          </section>
          <section className={styles.imagePerfil}>
            <FontAwesomeIcon icon={faLink} size="2x" className={styles.icon} />
          </section>
          <section className={styles.boxDetalles}>
            <div className={styles.notificación}>
              <h4>Campo vacío</h4>
              <FontAwesomeIcon
                icon={faLink}
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
            <h3>2. Datos corporativos</h3>
            <FontAwesomeIcon icon={faLink} size="2x" className={styles.icon} />
          </section>
          <section>
            <input type="text" placeholder="Nº Ruc..." />
            <input type="text" placeholder="Categoría..." />
            <input type="text" placeholder="Descripción..." />
          </section>
        </section>
        <section className={styles.itemForm}>
          <section className={styles.titleSection}>
            <h3>3. Canales de contacto</h3>
            <FontAwesomeIcon icon={faLink} size="2x" className={styles.icon} />
          </section>
          <section>
            <input type="text" placeholder="website..." />
            <input type="text" placeholder="Categoría..." />
            <input type="text" placeholder="Descripción..." />
          </section>
        </section>
      </section>
    </section>
  );
}
