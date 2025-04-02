import styles from "./loaderSpecific.module.css"

export default function LoaderSpecific(){
    return(
        <section className={styles.boxLoader}>
            <span className={styles.loader}></span>
            <p>Cargando...</p>
        </section>
    )
}