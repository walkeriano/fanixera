import styles from "./formEditPerfil.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRetweet } from "@fortawesome/free-solid-svg-icons";

export default function FormEditBrand({ userData }) {
  return (
    <section className={styles.containerFormEditPerfil}>
      <form action="">
        <label htmlFor="">Nombre de marca:</label>
        <input type="text" placeholder={userData?.nombreMarca} />
        <label htmlFor="">Categoría:</label>
        <input type="text" placeholder={userData?.expediente?.category} />
        <label htmlFor="">Nº de RUC:</label>
        <input type="email" placeholder={userData?.expediente?.ruc} />
        <label htmlFor="">Descripción:</label>
        <input type="email" placeholder={userData?.expediente?.descripcion} />
        <label htmlFor="">Sitio web:</label>
        <input
          type="email"
          placeholder={userData?.expediente?.contacto?.sitioWeb}
        />
        <label htmlFor="">Facebook:</label>
        <input
          type="email"
          placeholder={userData?.expediente?.contacto?.facebook}
        />
        <label htmlFor="">Instagram:</label>
        <input
          type="email"
          placeholder={userData?.expediente?.contacto?.instagram}
        />
        <label htmlFor="">Tik tok:</label>
        <input type="email" placeholder={userData?.expediente?.contacto?.tiktok} />
        <button>
          Actualizar datos
          <FontAwesomeIcon icon={faRetweet} size="2x" className={styles.icon} />
        </button>
      </form>
    </section>
  );
}
