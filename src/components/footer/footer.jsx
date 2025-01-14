import styles from "./footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <section  className={styles.leftPart}>
        <Image
          src="/next.svg"
          alt="icon-logo"
          width={100}
          height={55}
        />
        <div className={styles.legalBrand}>
          <p>Desarrollado por:</p>
          <h5>Tomi Cibermarketing S.A.C</h5>
        </div>
      </section>
      <section className={styles.rightPart}>
        <p>Todos los derechos reservados - Copyright 2025.</p>
      </section>
    </footer>
  );
}
