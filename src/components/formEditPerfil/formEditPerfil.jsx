import styles from "./formEditPerfil.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRetweet } from "@fortawesome/free-solid-svg-icons";


export default function FormEditPerfil({ user }) {
  return (
    <section className={styles.containerFormEditPerfil}>
      <form action="">
        <label htmlFor="">Nombre de usuario:</label>
        <input type="text" placeholder={user?.nombreMarca} />
        <label htmlFor="">Nº de Teléfono:</label>
        <input type="number" placeholder={user?.email} />
        <label htmlFor="">Ubicación:</label>
        <input type="text" placeholder="San miguel" />
        <button>
          Actualizar datos
          <FontAwesomeIcon icon={faRetweet} size="2x" className={styles.icon} />
        </button>
      </form>
    </section>
  );
}
