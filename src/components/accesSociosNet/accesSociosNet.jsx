import styles from "./accesSociosNet.module.css";
import Image from "next/image";
import FormAccesSociosNet from "../formAccesSociosNet/formAccesSociosNet";

export default function AccesSociosNet() {
  return (
    <section className={styles.containerAccesSociosNet}>
      <section className={styles.containerTitle}>
        <h2>Centro de control para empresas</h2>
        <p>Administración de beneficios</p>
        <div className={styles.boxBanner}>
          <Image src="/mobile-pc.png" alt="banner-socios-net" fill={true} />
        </div>
      </section>
      <section className={styles.containerAccesos}>
        <FormAccesSociosNet />
      </section>
    </section>
  );
}
