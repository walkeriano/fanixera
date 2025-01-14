import styles from "./marcasAsociadas.module.css";
import Image from "next/image";
export default function MarcasAsociadas(){
    return(
        <section className={styles.containerTodasMarcas}>
            <h3>Marcas asociadas</h3>
            <section className={styles.flexImagesBrand}>
                <section className={styles.boxImages}>
                    <Image src="/prom.png" alt="image-link" width={100} height={100} />
                    <Image src="/prom.png" alt="image-link" width={100} height={100} />
                    <Image src="/prom.png" alt="image-link" width={100} height={100} />
                </section>
                <section className={styles.boxImages}>
                    <Image src="/prom.png" alt="image-link" width={100} height={100} />
                    <Image src="/prom.png" alt="image-link" width={100} height={100} />
                    <Image src="/prom.png" alt="image-link" width={100} height={100} />
                </section>
            </section>
        </section>
    )
}