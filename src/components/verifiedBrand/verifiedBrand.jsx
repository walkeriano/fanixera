import styles from "./verifiedBrand.module.css";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export default function VerifiedBrand() {
  return (
    <section className={styles.containerBrand}>
      <section className={styles.imgBrand}>
        <Image src="/prom.png" alt="img-perfil-marca" fill="true" />
        <span></span>
      </section>
      <section className={styles.infoBrand}>
        <p>Restaurante</p>
        <h3>Kentucky Fried Chicken</h3>

        <Link className={styles.linkWebsite} href="/">
          kfcperu.com
          <FontAwesomeIcon icon={faLink} size="2x" className={styles.icon} />
        </Link>
      </section>
      <section></section>
    </section>
  );
}
