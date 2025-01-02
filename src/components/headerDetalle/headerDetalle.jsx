import styles from "./headerDetalle.module.css";
import Image from "next/image";
import Link from "next/link";


export default function  HeaderDetalle(){
    return(
        <section className={styles.containerHeaderDetalle}>
            <Image src="/next.png" width={100} height={45} alt="logo-fanixera" />
            <Link href="/" className={styles.btnBack}>
                <Image src="/back.svg" width={27} height={27} alt="icon-back" />
                <p>Volver</p>
            </Link>
        </section>
    )
}