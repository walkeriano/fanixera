import styles from "./totalBeneficios.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function TotalBeneficios() {
  return (
    <section className={styles.totalBeneficios}>
      <section className={styles.titleBox}>
        <div className={styles.titleDescription}>
          <p>Nº de beneficios creados</p>
          <FontAwesomeIcon
            icon={faChevronDown}
            size="2x"
            className={styles.icon}
          />
        </div>
        <section className={styles.totalBox}>
          <p>1400</p>
          <FontAwesomeIcon icon={faUser} size="2x" className={styles.icon} />
        </section>
      </section>
      <section className={styles.listItem}>
        <section className={styles.itemBenefit}>
          <div className={styles.imageBrand}>
            <Image src="/prom.png" alt="image-prom" fill={true} />
          </div>
          <div className={styles.infoItem}>
            <h4>2x1 en todas las zapatillas</h4>
            <p>23:00 pm</p>
          </div>
          <div className={styles.imageContainer}>
            <Image src="/prom.png" alt="image-prom" fill={true} />
          </div>
        </section>
        <section className={styles.itemBenefit}>
          <div className={styles.imageBrand}>
            <Image src="/prom.png" alt="image-prom" fill={true} />
          </div>
          <div className={styles.infoItem}>
            <h4>2x1 en todas las zapatillas</h4>
            <p>23:00 pm</p>
          </div>
          <div className={styles.imageContainer}>
            <Image src="/prom.png" alt="image-prom" fill={true} />
          </div>
        </section>
        <section className={styles.itemBenefit}>
          <div className={styles.imageBrand}>
            <Image src="/prom.png" alt="image-prom" fill={true} />
          </div>
          <div className={styles.infoItem}>
            <h4>2x1 en todas las zapatillas</h4>
            <p>23:00 pm</p>
          </div>
          <div className={styles.imageContainer}>
            <Image src="/prom.png" alt="image-prom" fill={true} />
          </div>
        </section>
        <section className={styles.itemBenefit}>
          <div className={styles.imageBrand}>
            <Image src="/prom.png" alt="image-prom" fill={true} />
          </div>
          <div className={styles.infoItem}>
            <h4>2x1 en todas las zapatillas</h4>
            <p>23:00 pm</p>
          </div>
          <div className={styles.imageContainer}>
            <Image src="/prom.png" alt="image-prom" fill={true} />
          </div>
        </section>
      </section>
    </section>
  );
}
