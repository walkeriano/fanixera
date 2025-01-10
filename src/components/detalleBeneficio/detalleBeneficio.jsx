import styles from "./detalleBeneficio.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function DetalleBeneficio() {
  return (
    <section className={styles.detalleBeneficioContainer}>
      <section className={styles.titleSection}>
        <h4>Detalles del beneficio</h4>
        <div className={styles.boxSectionIcon}>
          <FontAwesomeIcon icon={faLink} size="2x" className={styles.icon} />
        </div>
      </section>
      <section className={styles.flexInfo}>
        <section className={styles.infoAll}>
          <h5>hello motherfucker dsadsadsa dsads</h5>
          <div className={styles.moreDetails}>
            <p>lune</p>
            <p>lunes</p>
            <p>martes</p>
            <p>martes</p>
          </div>
        </section>
        <section className={styles.boxImage}>
          <Image src="/prom.png" alt="image-beneficio" fill={true} />
        </section>
      </section>
    </section>
  );
}
