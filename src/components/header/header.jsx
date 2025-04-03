import React, { useState, useContext } from "react";
import AuthContext from "@/state/auth/auth-context";
import styles from "./header.module.css";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faDeleteLeft,
  faEllipsis,
  faMagnifyingGlass,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

export default function Header({ showSearch, setShowSearch, resetSearch }) {
  const { user } = useContext(AuthContext);
  const [showMenu, setShowMenu] = useState(true);

  const toggleSearch = () => {
    setShowSearch((prev) => !prev); // Alternar el estado de showSearch
    if (!showSearch) {
      resetSearch(); // Limpiar los resultados de la búsqueda
    }
  };

  return (
    <section className={styles.header}>
      <Link href="/">
      <Image src="/next.svg" width={125} height={45} alt="logo-fanixera" />
      </Link>
      
      <section className={styles.sectionbtns}>
        {showMenu ? (
          <>
            {user && (
              <Link className={styles.imgUserAuth} href={user?.userType === "brand" ? `/perfil-socios-net/${user?.nombreMarca}`  : "/perfil-usuario"}>
                <Image
                  src={user?.expediente?.imageUrl || user?.imageUrl || "/prom.png"}
                  alt="Foto de perfil usuario"
                  fill={true}
                />
              </Link>
            )}
            {showSearch ? (
              <div onClick={toggleSearch} className={styles.btnSearchOn}>
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  size="2x"
                  className={styles.icon}
                />
              </div>
            ) : (
              <button onClick={toggleSearch} className={styles.btnSearchOf}>
                <FontAwesomeIcon
                  icon={faXmark}
                  size="2x"
                  className={styles.icon}
                />
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
              <Image src="/next.svg" width={125} height={45} alt="logo-fanixera" />
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
