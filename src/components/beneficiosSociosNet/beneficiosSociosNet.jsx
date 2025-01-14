import styles from "./beneficiosSociosNet.module.css";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function BeneficiosSociosNet() {
  return (
    <section className={styles.containerBeneficios}>
      <section className={styles.beneficiosTitle}>
        <h2>magnifica el alcance <span>de tu marca</span></h2>
        <p>
          Socios Net es el sistema administrativo de Fani Promcenter, creado
          exclusivamente para las marcas con el objetivo de brindarles el acceso
          a nuevas herramientas de marketing que les permitan crear promcards
          con eficiencia y comodidad desde cualquier dispositivo.
        </p>
      </section>
      <section className={styles.detallesBeneficios}>
        <section className={styles.beneficio}>
          <h3>Uso libre y gratuito</h3>
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            size="2x"
            className={styles.icon}
          />
        </section>
        <section className={styles.beneficio}>
          <h3>Panel administrativo</h3>
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            size="2x"
            className={styles.icon}
          />
        </section>
        <section className={styles.beneficio}>
          <h3>Recolección de datos</h3>
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            size="2x"
            className={styles.icon}
          />
        </section>
        <section className={styles.beneficio}>
          <h3>Libre de comisiones</h3>
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            size="2x"
            className={styles.icon}
          />
        </section>
      </section>
    </section>
  );
}
