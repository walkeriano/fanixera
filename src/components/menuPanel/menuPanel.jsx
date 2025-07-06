import styles from "./menuPanel.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStore,
  faPencil,
  faUser,
  faGift,
} from "@fortawesome/free-solid-svg-icons";

export default function MenuPanel({ vistaActual, setVistaActual }) {
  return (
    <section className={styles.menuSection}>
      <div
        onClick={() => setVistaActual("pencil")}
        className={`${styles.iconContainer} ${
          vistaActual === "pencil" ? styles.active : ""
        }`}
      >
        <FontAwesomeIcon icon={faPencil} size="2x" className={styles.icon} />
      </div>
      <div
        onClick={() => setVistaActual("gift")}
        className={`${styles.iconContainer} ${
          vistaActual === "gift" ? styles.active : ""
        }`}
      >
        <FontAwesomeIcon icon={faGift} size="2x" className={styles.icon} />
      </div>
      <div
        onClick={() => setVistaActual("user")}
        className={`${styles.iconContainer} ${
          vistaActual === "user" ? styles.active : ""
        }`}
      >
        <FontAwesomeIcon icon={faUser} size="2x" className={styles.icon} />
      </div>
      <div
        onClick={() => setVistaActual("store")}
        className={`${styles.iconContainer} ${
          vistaActual === "store" ? styles.active : ""
        }`}
      >
        <FontAwesomeIcon icon={faStore} size="2x" className={styles.icon} />
      </div>
      <span></span>
    </section>
  );
}
