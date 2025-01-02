import React, { useState } from "react";
import styles from "./tools.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Tools() {
  const [searchSpace, setSearchSpace] = useState(true);

  return (
    <section className={styles.btnSection}>
      {searchSpace ? (
        <section
          onClick={() => setSearchSpace(false)}
          className={styles.btnitemSelect}
        >
          <Image src="/file.svg" alt="icon-random" width={23} height={23} />
        </section>
      ) : (
        <section className={styles.containerSearch}>
          <button  className={styles.btnBack} onClick={() => setSearchSpace(true)}>cerrar</button>
          <section  className={styles.boxInput}>
            <input
              type="text"
              placeholder="Buscar..."
              className={styles.inputSearch}
            />
            <button className={styles.btnSearch}>buscar</button>
          </section>
        </section>
      )}
      <button className={styles.btnAleatorio}>
        <Image src="/window.svg" alt="icon-random" width={50} height={50} />
      </button>
      <Link href="/" className={styles.btnitemSelect}>
        <Image src="/user.svg" alt="icon-random" width={25} height={25} />
      </Link>
    </section>
  );
}
