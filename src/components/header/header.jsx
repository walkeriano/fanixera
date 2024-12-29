import React, { useState } from "react";
import styles from "./header.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [showMenu, setShowMenu] = useState(true);
  return (
    <section className={styles.header}>
      <Image src="/next.svg" width={90} height={35} alt="logo-fanixera" />
      <section className={styles.sectionbtns}>
        {showMenu ? (
          <div className={styles.btnmenu} onClick={() => setShowMenu(false)}>
            <Image src="/globe.svg" alt="icon-menu" width={30} height={20} />
          </div>
        ) : (
          <section className={styles.menuShow}>
            <button
              onClick={() => setShowMenu(true)}
              className={styles.btnCloseMenu}
            >
              x
            </button>
            <Link href="/" className={styles.linkDirect}>
              ¿Qué es Faxr?
            </Link>
            <Link href="/" className={styles.linkDirect}>
              Socios Net
            </Link>
            <Link href="/" className={styles.linkDirect}>
              Atención al cliente
            </Link>
            <div className={styles.imgbgmenu}>
            <Image src="/window.svg" alt="icon-random" fill={true} />
            </div>
            
            <p className={styles.legal}>
              Desarrollado por
              <br />
              <span>Tomi Cibermarketing S.A.C</span>
            </p>
          </section>
        )}
      </section>
    </section>
  );
}
