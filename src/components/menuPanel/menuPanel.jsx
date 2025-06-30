import styles from "./menuPanel.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStore,
  faPencil,
  faUser,
  faGift,
} from "@fortawesome/free-solid-svg-icons";

export default function MenuPanel() {
  return (
    <section className={styles.menuSection}>
      <div>
        <FontAwesomeIcon icon={faPencil} size="2x" className={styles.icon} />
      </div>
      <div>
        <FontAwesomeIcon icon={faGift} size="2x" className={styles.icon} />
      </div>
      <div>
        <FontAwesomeIcon icon={faUser} size="2x" className={styles.icon} />
      </div>
      <div>
        <FontAwesomeIcon icon={faStore} size="2x" className={styles.icon} />
      </div>
    </section>
  );
}
