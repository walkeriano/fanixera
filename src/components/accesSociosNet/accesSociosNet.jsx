import React, { useState, useContext } from "react";
import AuthContext from "@/state/auth/auth-context";
import styles from "./accesSociosNet.module.css";
import Image from "next/image";
import FormAccesSociosNet from "@/components/formAccesSociosNet/formAccesSociosNet";
import FormRegistro from "@/components/formRegistro/formRegistro";
export default function AccesSociosNet() {
  const [perfilSesionUser, setPerfilSesionUser] = useState(true);
  const { user } = useContext(AuthContext);

  return (
    <section className={styles.containerAccesSociosNet}>
      <section className={styles.containerTitle}>
        <h2>Centro de control para empresas</h2>
        <p>Administración de beneficios</p>
        <div className={styles.boxBanner}>
          <Image src="/mobile-pc.png" alt="banner-socios-net" fill={true} />
        </div>
      </section>
      {user && user.userType === "client" ? (
        <></>
      ) : (
        <section className={styles.containerAccesos}>
        <section className={styles.accesBtns}>
          <button
            onClick={() => setPerfilSesionUser(true)}
            className={`${styles.btnAction} ${
              perfilSesionUser ? styles.active : styles.inactive
            }`}
          >
            Iniciar Sesion
          </button>
          <button
            onClick={() => setPerfilSesionUser(false)}
            className={`${styles.btnAction} ${
              !perfilSesionUser ? styles.active : styles.inactive
            }`}
          >
            Registro
          </button>
        </section>
        {perfilSesionUser ? <FormAccesSociosNet /> : <FormRegistro />}
      </section>
      )}
    </section>
  );
}
