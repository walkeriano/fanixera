import styles from "./viewall.module.css"

export default function viewall(){
    return(
        <section className={styles.viewall}>
            <section className={styles.rieles}>
                <div className={styles.boxad}></div>
                <div className={styles.boxad}></div>
                <div className={styles.boxad}></div>
                <div className={styles.boxad}></div>
                <div className={styles.boxad}></div>
                <div className={styles.boxad}></div>
            </section>
            <section className={styles.rieles}>
                <div className={styles.boxad}></div>
                <div className={styles.boxad}></div>
                <div className={styles.boxad}></div>
                <div className={styles.boxad}></div>
                <div className={styles.boxad}></div>
                <div className={styles.boxad}></div>
            </section>
        </section>
    )
}