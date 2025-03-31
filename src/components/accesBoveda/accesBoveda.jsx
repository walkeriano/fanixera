import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import AuthContext from "@/state/auth/auth-context";
import styles from "./accesBoveda.module.css";
import Image from "next/image";
import FormRegistroClient from "@/components/formRegistroClient/formRegistroClient";
import FormLoginClient from "@/components/formLoginClient/formLoginClient";

export default function AccesBoveda() {
  const [perfilSesionUser, setPerfilSesionUser] = useState(true);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      if (user.userType === "client") {
        router.replace("/perfil-usuario");
      } else if (user.userType === "brand") {
        router.replace("/");
      }
    }
    setLoading(false); // Desactiva el loading tras la verificación
  }, [user, router]);

  return (
    <section className={styles.containerAccesSociosNet}>
      <section className={styles.containerTitle}>
        <h2>bóveda de beneficios</h2>
        <p>Revisa tus reservas disponibles</p>
        <div className={styles.boxBanner}>
          <Image src="/mobile-pc.png" alt="banner-socios-net" fill={true} />
        </div>
      </section>
      <section className={styles.containerAccesos}>
        {loading ? (
          <section className={styles.loadingContainer}>
            <h2>Cargando...</h2>
          </section>
        ) : (
          <>
            <section className={styles.accesBtns}>
              <button
                onClick={() => setPerfilSesionUser(true)}
                className={`${styles.btnAction} ${
                  perfilSesionUser ? styles.active : styles.inactive
                }`}
              >
                Iniciar Sesión
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
            {perfilSesionUser ? <FormLoginClient /> : <FormRegistroClient />}
          </>
        )}
      </section>
    </section>
  );
}
