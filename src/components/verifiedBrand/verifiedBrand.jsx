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

export default function VerifiedBrand() {
  return (
    <section className={styles.containerBrand}>
      <section className={styles.imgBrand}>
        <Image src="/prom.png" alt="img-perfil-marca" fill="true" />
        <span></span>
      </section>
      <section className={styles.infoBrand}>
        <p>Restaurante</p>
        <h3>Kentucky Fried Chicken</h3>
        <Link className={styles.linkWebsite} href="/">
          kfcperu.com
          <FontAwesomeIcon icon={faLink} size="2x" className={styles.icon} />
        </Link>
      </section>
      <section className={styles.channelBtns}>
        <Link className={styles.perfilGo} href="/">
          Ver más
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            size="2x"
            className={styles.icon}
          />
        </Link>
        <div className={styles.flexChannels}>
          <Link href="/" className={styles.channel}>
            <FontAwesomeIcon
              icon={faFacebook}
              size="2x"
              className={styles.icon}
            />
          </Link>
          <Link href="/" className={styles.channel}>
            <FontAwesomeIcon icon={faInstagram} size="2x" className={styles.icon} />
          </Link>
          <Link href="/" className={styles.channel}>
            <FontAwesomeIcon icon={faTiktok} size="2x" className={styles.icon} />
          </Link>
        </div>
      </section>
    </section>
  );
}
