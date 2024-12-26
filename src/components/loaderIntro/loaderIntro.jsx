import styles from "./loaderIntro.module.css";
import Image from "next/image";
export default function IntroLoader() {
  return (
    <section className={styles.containerLoader}>
      <Image src="/next.svg" width={160} height={80} alt="logo-fanixera" />
      <h1>Las mejores facilidades de compra</h1>
      <div className={styles.loader}></div>
    </section>
  );
}
