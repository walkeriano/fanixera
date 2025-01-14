import styles from "./introSociosNet.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function IntroSociosNet() {
  return (
    <section className={styles.containerIntroSocios}>
      <section className={styles.titleSection}>
        <Image src="/next.svg" alt="logo-socios-net" width={100} height={50} />
        <h3>Crea beneficios <span>para tu clientes</span></h3>
      </section>
      <section className={styles.boxImageSocios}>
        <section className={styles.bannerSection}>
          <section className={styles.boxImageSection}>
            <Image src="/sociosnet.jpg" alt="logo-socios-net" fill={true} />
          </section>
          <p>
            Panel administrativo para empresas con todas las herramientas
            digitales para crear nuevos promcards.
          </p>
        </section>
        <section className={styles.boxBeneficios}>
          <section className={styles.beneficio}>
            <FontAwesomeIcon icon={faLink} size="2x" className={styles.icon} />
            <p>Sin comisiones</p>
          </section>
          <section className={styles.beneficio}>
            <FontAwesomeIcon icon={faLink} size="2x" className={styles.icon} />
            <p>sin membresias</p>
          </section>
          <section className={styles.beneficio}>
            <FontAwesomeIcon icon={faLink} size="2x" className={styles.icon} />
            <p>sin ilimitadas</p>
          </section>
        </section>
        <Link href="/" className={styles.linkSociosNet}>
          Ir a socios net
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            size="2x"
            className={styles.icon}
          />
        </Link>
      </section>
    </section>
  );
}
