import styles from "./callToAction.module.css";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function CallToAction() {
  return (
    <section className={styles.containerCallToAction}>
      <h2>dsadsadas</h2>
      <section className={styles.boxImageAction}>
        <Image src="/prom.png" fill={true} alt="image-link" />
      </section>
      <Link href="/promociones" className={styles.btnSociosNet}>
        <p>Registrarme ahora</p>
        <FontAwesomeIcon
          icon={faArrowRightArrowLeft}
          size="2x"
          className={styles.icon}
        />
      </Link>
    </section>
  );
}
