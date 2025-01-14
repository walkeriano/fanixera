import styles from "./sliderCategories.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export default function SliderCategories() {
  return (
    <section className={styles.boxSliderCategories}>
      <section className={styles.titleSection}>
        <h2>Todo lo que necesitas, <span>cuando más lo necesitas</span></h2>
        <p>Diferentes categorias y grandes marcas a tu alcance</p>
      </section>
      <section className={styles.sliderCategories}>
        <section className={styles.itemCategorie}>
          <div className={styles.iconCategorie}>
            <FontAwesomeIcon icon={faLink} size="2x" className={styles.icon} />
          </div>
          <h3>entretenimiento</h3>
          <Image src="/prom.png" alt="banner-categorie" fill={true} />
        </section>
        <section className={styles.itemCategorie}>
          <div className={styles.iconCategorie}>
            <FontAwesomeIcon icon={faLink} size="2x" className={styles.icon} />
          </div>
          <h3>entretenimiento</h3>
          <Image src="/prom.png" alt="banner-categorie" fill={true} />
        </section>
        <section className={styles.itemCategorie}>
          <div className={styles.iconCategorie}>
            <FontAwesomeIcon icon={faLink} size="2x" className={styles.icon} />
          </div>
          <h3>entretenimiento</h3>
          <Image src="/prom.png" alt="banner-categorie" fill={true} />
        </section>
        
      </section>
    </section>
  );
}
