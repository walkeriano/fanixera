import styles from "./verifiedUser.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGears } from "@fortawesome/free-solid-svg-icons";

export default function VerifiedUser({ user, loadingUserData }) {
  if (loadingUserData) {
    return <p className={styles.loading}>Cargando datos de la marca...</p>;
  }
  return (
    <section className={styles.containerBrand}>
      <section className={styles.imgBrand}>
        <img src={user?.expediente?.imageUrl} alt="img-perfil-marca" />
        <span></span>
      </section>
      <section className={styles.infoBrand}>
        <h3>{user?.nombreMarca}</h3>
        <p>{user?.expediente?.category}</p>
        <p>{user?.expediente?.descripcion}</p>
        <p>{user?.expediente?.ruc}</p>
      </section>
      <button className={styles.editData}>
        Editar perfil
        <FontAwesomeIcon icon={faGears} size="2x" className={styles.icon} />
      </button>
    </section>
  );
}
