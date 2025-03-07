import styles from "./loginDirecto.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import useCopyUserToClients from "@/state/hook/useCopyUserToClients";
import Image from "next/image";

export default function LoginDirecto() {
  const { copyUserData, loading, success, error, promotionId } =
    useCopyUserToClients();

  return (
    <section className={styles.loginDirectoContainer}>
      <section className={styles.imageContainer}>
        <div className={styles.boxImagePerfilUser}>
          <Image src="/prom.png" alt="imgacenter" fill={true} />
        </div>
        <h3>Alexander Walker</h3>
        <p>944 343 433</p>
        <p>awalkerbarreda@gmail.com</p>
      </section>
      <button
        onClick={copyUserData}
        disabled={loading}
        className={styles.linkContactBrand}
      >
        <FontAwesomeIcon
          icon={faUserSecret}
          size="2x"
          className={styles.icon}
        />
        <p>Promotion ID: {promotionId}</p>
        <p>{loading ? "Guardando..." : "Guardar en promoción"}</p>
        {success && <p>¡Usuario guardado con éxito!</p>}
        {error && <p>{error}</p>}
      </button>
    </section>
  );
}
