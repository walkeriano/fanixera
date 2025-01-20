import React, { useState, useContext } from "react";
import styles from "./headerSesion.module.css";
import AuthContext from "@/state/auth/auth-context";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";

export default function HeaderSesion() {
  const { logout } = useContext(AuthContext);
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logout();
      localStorage.removeItem("userProfile");
      console.log("Sesión cerrada con éxito");
      router.push("/");
    } catch (error) {
      console.error("Error al cerrar la sesión:", error.message);
    }
  };

  return (
    <section className={styles.headerSesionContainer}>
      <Image src="/next.png" width={100} height={45} alt="logo-fanixera" />
      <button className={styles.boxOutSesion} onClick={handleLogout}>
        <FontAwesomeIcon icon={faDeleteLeft} size="2x" className={styles.icon} />
        Cerrar sesion
      </button>
    </section>
  );
}
