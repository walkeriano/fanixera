import styles from "./infoCard.module.css";
import Image from "next/image";

export default function InfoCard() {
  return (
    <section className={styles.allInfoCard}>
      <section className={styles.partOne}>
        <section className={styles.marcaDatos}>
          <div className={styles.imgBox}>
            <Image src="/user.svg" alt="icon-user" width={20} height={20} />
          </div>
          <h3>Kentucky fried chicken</h3>
        </section>
        <Image
          src="/prom.png"
          alt="image-promo"
          fill={true}
          className={styles.imgPromo}
        />
      </section>
      <section className={styles.partTwo}>
        <h2>38% dscto. en tacos crispy + gaseosa 500ml - black friday</h2>
        <section className={styles.boxDatosRelevantes}>
          <section className={styles.datoImportant}>
            <div className={styles.titleBox}>
              <Image src="/window.svg" alt="i-detalle" width={20} height={23} />
              <p>Stock</p>
            </div>
            <h3>50/150</h3>
          </section>
          <section className={styles.datoImportant}>
            <div className={styles.titleBox}>
              <Image src="/i-user.svg" alt="i-detalle" width={15} height={15} />
              <p>Reservas</p>
            </div>
            <h3>120</h3>
          </section>
          <section className={styles.datoImportant}>
            <div className={styles.titleBox}>
              <Image src="/arrows.svg" alt="i-detalle" width={20} height={15} />
              <p>Interés</p>
            </div>
            <h3>350</h3>
          </section>
        </section>
      </section>
      <section className={styles.partTre}>
        <section className={styles.itemInfo}>
          <Image src="/" alt="icon-info-dato" width={45} height={45} />
          <section className={styles.infoGeneralDato}>
            <div className={styles.flexDatoTitle}>
              <p>Duración</p>
              <Image src="/" alt="icon-info-dato" width={20} height={20} />
            </div>
            <p className={styles.datoInfo}>12/21/25</p>
          </section>
        </section>
        <section className={styles.itemInfo}>
          <Image src="/" alt="icon-info-dato" width={45} height={45} />
          <section className={styles.infoGeneralDato}>
            <div className={styles.flexDatoTitle}>
              <p>Duración</p>
              <Image src="/" alt="icon-info-dato" width={20} height={20} />
            </div>
            <p className={styles.datoInfo}>12/21/25</p>
          </section>
        </section>
        <section className={styles.itemInfo}>
          <Image src="/" alt="icon-info-dato" width={45} height={45} />
          <section className={styles.infoGeneralDato}>
            <div className={styles.flexDatoTitle}>
              <p>Duración</p>
              <Image src="/" alt="icon-info-dato" width={20} height={20} />
            </div>
            <p className={styles.datoInfo}>12/21/25</p>
          </section>
        </section>
        <section className={styles.itemInfo}>
          <Image src="/" alt="icon-info-dato" width={45} height={45} />
          <section className={styles.infoGeneralDato}>
            <div className={styles.flexDatoTitle}>
              <p>Duración</p>
              <Image src="/" alt="icon-info-dato" width={20} height={20} />
            </div>
            <p className={styles.datoInfo}>12/21/25</p>
          </section>
        </section>
      </section>
    </section>
  );
}
