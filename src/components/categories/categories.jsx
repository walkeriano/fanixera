import styles from "./categories.module.css";
import Image from "next/image";

export default function Categories() {
  return (
    <section className={styles.categoriesContainer}>
      <div className={styles.itemCategorie}>
        <Image src="/file.svg" alt="icon-menu" width={20} height={20} />
        <h3>Restaurantes</h3>
      </div>
    </section>
  );
}
