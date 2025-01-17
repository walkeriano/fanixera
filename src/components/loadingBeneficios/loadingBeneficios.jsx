import styles from "./loadingBeneficios.module.css";

export default function LoadingBeneficios(){
    return(
        <section className={styles.containerCarriles}>
            <section className={styles.riel}>
                <div className={styles.boxAdTwo}></div>
                <div className={styles.boxAdTwo}></div>
            </section>
            <section className={styles.riel}>
                <div className={styles.boxAdTwo}></div>
                <div className={styles.boxAdTwo}></div>
            </section>
            <section className={styles.riel}>
                <div className={styles.boxAdTwo}></div>
                <div className={styles.boxAdTwo}></div>
            </section>
        </section>
    )
}