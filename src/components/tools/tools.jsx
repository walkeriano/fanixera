import React, { useState } from "react";
import styles from "./tools.module.css";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Tools({ onRandomize }) {
  const [searchSpace, setSearchSpace] = useState(true);

  return (
    <section className={styles.btnSection}>
      {searchSpace ? (
        <section
          onClick={() => setSearchSpace(false)}
          className={styles.btnitemSelect}
        >
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            size="2x"
            className={styles.icon}
          />
        </section>
      ) : (
        <section className={styles.containerSearch}>
          <button
            className={styles.btnBack}
            onClick={() => setSearchSpace(true)}
          >
            <FontAwesomeIcon icon={faXmark} size="2x" className={styles.icon} />
          </button>
          <section className={styles.boxInput}>
            <input
              type="text"
              placeholder="Buscar..."
              className={styles.inputSearch}
            />
            <button className={styles.btnSearch}>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                size="2x"
                className={styles.icon}
              />
            </button>
          </section>
        </section>
      )}
      <button onClick={onRandomize} className={styles.btnAleatorio}>
        <Image src="/window.svg" alt="icon-random" width={53} height={53} />
      </button>
      <Link href="/" className={styles.btnitemSelect}>
        <Image src="/user.svg" alt="icon-random" width={25} height={25} />
      </Link>
    </section>
  );
}
