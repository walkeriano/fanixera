import styles from "./adminDashboard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faGlobe,
  faGift,
  faEyeSlash,
  faUsersViewfinder,
  faCodePullRequest,
  faCodeCompare,
  faCodeCommit
} from "@fortawesome/free-solid-svg-icons";

export default function AdminDashboard() {
  return (
    <section className={styles.containerAdminDashboard}>
      <section className={styles.titleSection}>
        <h2>Hola, Bienvenido</h2>
        <h3>Walkeriano</h3>
      </section>
      <section className={styles.contInfo}>
        <h4>Resumen en tiempo real:</h4>
        <section className={styles.containerItemView}>
          <div className={styles.titleFlex}>
            <FontAwesomeIcon icon={faGift} size="2x" className={styles.icon} />
            <p>Total beneficios creados</p>
          </div>
          <p>15</p>
        </section>
        <section className={styles.containerItemView}>
          <div className={styles.titleFlex}>
            <FontAwesomeIcon icon={faEye} size="2x" className={styles.icon} />
            <p>Total beneficios activos</p>
          </div>
          <p>15</p>
        </section>
        <section className={styles.containerItemView}>
          <div className={styles.titleFlex}>
            <FontAwesomeIcon icon={faEyeSlash} size="2x" className={styles.icon} />
            <p>Total beneficios terminados</p>
          </div>
          <p>15</p>
        </section>
        <section className={styles.containerItemView}>
          <div className={styles.titleFlex}>
            <FontAwesomeIcon icon={faUsersViewfinder} size="2x" className={styles.icon} />
            <p>Total usuarios</p>
          </div>
          <p>15</p>
        </section>
        <section className={styles.containerItemView}>
          <div className={styles.titleFlex}>
            <FontAwesomeIcon icon={faCodePullRequest} size="2x" className={styles.icon} />
            <p>Total reservas</p>
          </div>
          <p>15</p>
        </section>
        <section className={styles.containerItemView}>
          <div className={styles.titleFlex}>
            <FontAwesomeIcon icon={faCodeCompare} size="2x" className={styles.icon} />
            <p>Total aprobadas</p>
          </div>
          <p>15</p>
        </section>
        <section className={styles.containerItemView}>
          <div className={styles.titleFlex}>
            <FontAwesomeIcon icon={faCodeCommit} size="2x" className={styles.icon} />
            <p>Total denegadas</p>
          </div>
          <p>15</p>
        </section>
      </section>
      <section className={styles.containerUsersList}>
        <p>listado de usuarios actuales</p>
        <section className={styles.listadoUser}>
            lista
        </section>
      </section>
      <section className={styles.containerUsersList}>
        <p>beneficios actuales</p>
        <section className={styles.listadoUser}>
            lista
        </section>
      </section>
    </section>
  );
}
