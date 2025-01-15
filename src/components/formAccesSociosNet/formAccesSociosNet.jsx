import styles from "./formAccesSociosNet.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faAt,
  faKey
} from "@fortawesome/free-solid-svg-icons";

export default function FormAccesSociosNet() {
  return (
    <section className={styles.containerForm}>
      <section className={styles.titleAcces}>
        <h2>Iniciar sesión</h2>
        <p>Ingresar credenciales</p>
      </section>
      <form  className={styles.formularioRegistro}>
        <label>
          <input type="email" placeholder="Ingresar email" />
          <FontAwesomeIcon
            icon={faAt}
            size="2x"
            className={styles.icon}
          />
        </label>
        <label>
          <input type="password" placeholder="Ingresar password" />
          <FontAwesomeIcon
            icon={faKey}
            size="2x"
            className={styles.icon}
          />
        </label>
        <button type="submit" className={styles.btnAction}>
          Ingresar
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            size="2x"
            className={styles.icon}
          />
        </button>
        <button type="submit" className={styles.btnAction}>
          Comprar suscripción
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            size="2x"
            className={styles.icon}
          />
        </button>
      </form>
    </section>
  );
}
