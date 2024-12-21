import styles from "./header.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <section className={styles.header}>
      <Image src="/next.svg" width={115} height={60} alt="logo-fanixera" />
      <section className={styles.sectionbtns}>
        <Link href="/" className={styles.btnmenu}>
          <Image src="/globe.svg" alt="icon-menu" width={40} height={20} />
        </Link>
        <Link href="/" className={styles.btnSearch}>
          <Image src="/file.svg" alt="icon-menu" width={25} height={25} />
        </Link>
      </section>
    </section>
  );
}
