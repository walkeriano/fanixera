import styles from "./verifiedBrand.module.css";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLink,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

export default function VerifiedBrand({ user, loadingUserData }) {
  if (loadingUserData) {
    return <p className={styles.loading}>Cargando datos de la marca...</p>; // Reemplázalo con un Skeleton si lo prefieres
  }

  return (
    <section className={styles.containerBrand}>
      <section className={styles.imgBrand}>
        <img src={user?.expediente?.imageUrl} alt="img-perfil-marca" />
        <span></span>
      </section>
      <section className={styles.infoBrand}>
        <p>{user?.expediente?.category}</p>
        <h3>{user?.nombreMarca}</h3>
        <section className={styles.channelBtns}>
          <Link className={styles.linkWebsite} href="/">
            kfcperu.com
            <FontAwesomeIcon icon={faLink} size="2x" className={styles.icon} />
          </Link>
          <Link className={styles.perfilGo} href="/">
            Perfil
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              size="2x"
              className={styles.icon}
            />
          </Link>
        </section>
        <div className={styles.flexChannels}>
          <Link href="/" className={styles.channel}>
            <FontAwesomeIcon
              icon={faFacebook}
              size="2x"
              className={styles.icon}
            />
          </Link>
          <Link href="/" className={styles.channel}>
            <FontAwesomeIcon
              icon={faInstagram}
              size="2x"
              className={styles.icon}
            />
          </Link>
          <Link href="/" className={styles.channel}>
            <FontAwesomeIcon
              icon={faTiktok}
              size="2x"
              className={styles.icon}
            />
          </Link>
        </div>
      </section>
    </section>
  );
}
