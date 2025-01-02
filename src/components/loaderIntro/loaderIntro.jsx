import styles from "./loaderIntro.module.css";
import Image from "next/image";
export default function IntroLoader() {
  return (
    <section className={styles.containerLoader}>
      <Image src="/next.png" width={200} height={80} alt="logo-fanixera" />
      <h1>TOMI CIBERMARKETING</h1>
      <div className={styles.loader}></div>
    </section>
  );
}
