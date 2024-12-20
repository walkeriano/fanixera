import styles from "./header.module.css"
import Image from "next/image";
import Link from "next/link";

export default function Header(){
    return(
        <section className={styles.header}>
            <Image src="/next.svg" width={175} height={50} alt="logo-fanixera" />
            <section className={styles.btnMenu}>
                <Link href="/">
                    Home
                </Link>
                <Link href="/" className={styles.btnSearch}>
                    Home
                </Link>
            </section>
        </section>
    )
}