import styles from "./formEditPerfil.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRetweet } from "@fortawesome/free-solid-svg-icons";

export default function FormEditPerfil({ user }) {
  return (
    <section className={styles.containerFormEditPerfil}>
      <form action="">
        <label htmlFor="">
          <input type="text" placeholder={user?.nombreMarca} />
        </label>
        <label htmlFor="">
          <input type="number" placeholder="998 475 547" />
        </label>
        <label htmlFor="">
          <input type="email" placeholder={user?.email} />
        </label>
        <label htmlFor="">
          <input type="text" placeholder="San miguel" />
        </label>
        <button>
          Actualizar datos
          <FontAwesomeIcon icon={faRetweet} size="2x" className={styles.icon} />
        </button>
      </form>
    </section>
  );
}
