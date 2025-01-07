import styles from "./verifiedBrand.module.css";
import Link from "next/link";
import Image from "next/image";


export default function VerifiedBrand() {
  return (
    <section className={styles.containerBrand}>
      <section className={styles.imgBrand}>
        <Image src="/" alt="" fill="true" />
        <span></span>
      </section>
      <section className={styles.infoBrand}>
        <p>Restaurante</p>
        <h3>Kentucky Fried Chicken</h3>
        <div className={styles.flexEnlace}>
            <Link className={styles.linkWebsite} href="/">kfcperu.com</Link>
        </div>
      </section>
      <section>

      </section>
    </section>
  );
}
