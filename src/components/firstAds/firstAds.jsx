import styles from "./firstAds.module.css";
import Image from "next/image";

export default function FirstAds() {
  return (
    <section className={styles.cardOut}>
      <Image
        src="/mascot-blue.png"
        width={110}
        height={110}
        alt="icon-mascot"
      />
      <p>Ya puedes empezar a crear beneficios...</p>
    </section>
  );
}
