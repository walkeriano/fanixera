import React, { useState, useContext } from "react";
import styles from "./headerSesion.module.css";
import AuthContext from "@/state/auth/auth-context";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faDeleteLeft,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";

export default function HeaderSesion() {
  const { user, logout } = useContext(AuthContext);
  const [showMenu, setShowMenu] = useState(true);
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
      <Link href="/">
        <Image src="/next.png" width={100} height={45} alt="logo-fanixera" />
      </Link>
      <section className={styles.sectionbtns}>
        {showMenu ? (
          <>
            {user && (
              <button className={styles.boxOutSesion} onClick={handleLogout}>
                <FontAwesomeIcon
                  icon={faDeleteLeft}
                  size="2x"
                  className={styles.icon}
                />
                Salir
              </button>
            )}

            <div className={styles.btnmenu} onClick={() => setShowMenu(false)}>
              <FontAwesomeIcon
                icon={faEllipsis}
                size="2x"
                className={styles.icon}
              />
            </div>
          </>
        ) : (
          <section className={styles.menuShow}>
            <button
              onClick={() => setShowMenu(true)}
              className={styles.btnCloseMenu}
            >
              <FontAwesomeIcon
                icon={faDeleteLeft}
                size="2x"
                className={styles.icon}
              />
            </button>
            <Link href="/explicacion" className={styles.linkDirect}>
              ¿Qué es Tomi?
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                size="2x"
                className={styles.icon}
              />
            </Link>
            <Link href="/" className={styles.linkDirect}>
              Beneficios
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                size="2x"
                className={styles.icon}
              />
            </Link>
            <Link href="/boveda" className={styles.linkDirect}>
              bóveda
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                size="2x"
                className={styles.icon}
              />
              <span>reservas</span>
            </Link>
            <Link href="/socios-net" className={styles.linkDirect}>
              Socios Net
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                size="2x"
                className={styles.icon}
              />
              <span>empresas</span>
            </Link>
            <Link href="/" className={styles.linkDirect}>
              contacto
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                size="2x"
                className={styles.icon}
              />
            </Link>
            <div className={styles.imgbgmenu}>
              <Image src="/mascot-blue.png" alt="icon-random" fill={true} />
            </div>
            <section className={styles.legal}>
              <Image
                src="/next.png"
                width={85}
                height={40}
                alt="logo-fanixera"
              />
              <div>
                <p>Desarrollado por:</p>
                <h4>Tomi Cibermarketing S.A.C</h4>
              </div>
            </section>
          </section>
        )}
      </section>
    </section>
  );
}
