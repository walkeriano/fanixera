import styles from "./verifiedUser.module.css";
import Image from "next/image";


export default function VerifiedUser() {
  return (
    <section className={styles.containerBrand}>
      <section className={styles.imgBrand}>
        <Image src="/prom.png" alt="img-perfil-marca" fill={true} />
        <span></span>
      </section>
      <section className={styles.infoBrand}>
        <h3>walkeriano</h3>
        <p>awalker@gmail.com</p>
        <p>993 744 958</p>
        <p>San miguel</p>
      </section>
    </section>
  );
}
