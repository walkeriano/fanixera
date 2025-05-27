import styles from "./presentacion.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLink,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Presentacion() {
  return (
    <section className={styles.presentacionBox}>
      <section className={styles.boxMockup}>
        <Image
          src="/mobile-pc.png"
          alt="mockup-tomi-cibermarketing"
          fill={true}
        />
      </section>
      <section className={styles.allInfo}>
        <h1>
          Beneficios de tus marcas favoritas,
          <span> cuando más los necesitas!</span>
        </h1>
        <p>
          Tomi Cibermarketing, es un sistema de beneficios que busca generar un
          fidelización entre la marca y sus consumidores, facilitando el acceso
          directo a productos y servicios través de beneficios limitados.
        </p>
        <section className={styles.channels}>
          <Link href="/" className={styles.channel}>
            <FontAwesomeIcon
              icon={faFacebook}
              size="2x"
              className={styles.icon}
            />
          </Link>
          <Link href="/" className={styles.channel}>
            <FontAwesomeIcon
              icon={faInstagram}
              size="2x"
              className={styles.icon}
            />
          </Link>
          <Link href="/" className={styles.channel}>
            <FontAwesomeIcon
              icon={faTiktok}
              size="2x"
              className={styles.icon}
            />
          </Link>
        </section>
        <Link href="/" className={styles.linkContactBrand}>
          Adquirir beneficios
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            size="2x"
            className={styles.icon}
          />
        </Link>
      </section>
      <div className={styles.bgColors}></div>
    </section>
  );
}
