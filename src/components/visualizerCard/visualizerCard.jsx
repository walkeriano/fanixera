import styles from "./visualizerCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function VisualizerCard({ formValues }) {
  return (
    <section className={styles.visualizerCard}>
      <div className={styles.titleSectionCard}>
        <FontAwesomeIcon
          icon={faChevronDown}
          size="2x"
          className={styles.icon}
        />
        <h3>Previsualización del beneficio</h3>
        <FontAwesomeIcon
          icon={faChevronDown}
          size="2x"
          className={styles.icon}
        />
      </div>
      <section className={styles.flexImagesContainer}>
        <div className={styles.imgCardVisualTwo}>
          <Image
            src="/prom.png"
            alt="image-card"
            width={30}
            height={30}
            className={styles.imgProfile}
          />
          {formValues.image1 ? (
            <img
              src={
                typeof formValues.image1 === "string"
                  ? formValues.image1
                  : URL.createObjectURL(formValues.image1)
              }
              alt="Imagen adjunta"
              width={30}
              height={30}
              className={styles.imgAnuncio}
            />
          ) : null}
        </div>
        <div className={styles.imgCardVisual}>
          <Image
            src="/prom.png"
            alt="image-card"
            width={30}
            height={30}
            className={styles.imgProfile}
          />
          {formValues.image2 ? (
            <img
              src={
                typeof formValues.image2 === "string"
                  ? formValues.image2
                  : URL.createObjectURL(formValues.image2)
              }
              alt="Imagen adjunta"
              width={30}
              height={30}
              className={styles.imgAnuncio}
            />
          ) : null}
        </div>
      </section>
      <section className={styles.infoCard}>
        <div className={styles.itemInfo}>
          <h3>Nombre:</h3>
          <p>{formValues.title || "Sin título"}</p>
        </div>
        <div className={styles.itemInfo}>
          <h3>Descripción:</h3>
          <p>{formValues.description || "Sin descripción"}</p>
        </div>
        <div className={styles.itemInfo}>
          <h3>Stock:</h3>
          <p>{formValues.stock || "0"}</p>
        </div>
        <div className={styles.itemInfo}>
          <h3>Ubicación:</h3>
          <p>{formValues.ubication || "Sin ubicación"}</p>
        </div>
        <div className={styles.itemInfo}>
          <h3>Términos y condiciones:</h3>
          <p>
            {formValues.terminosCondiciones || "Sin términos y condiciones"}
          </p>
        </div>
        <div className={styles.itemInfo}>
          <h3>Tiempo del inicio:</h3>
          <p>
            {formValues.startDate} / {formValues.startTime}
          </p>
        </div>
        <div className={styles.itemInfo}>
          <h3>Tiempo del final:</h3>
          <p>
            {formValues.endDate} / {formValues.endTime}
          </p>
        </div>
      </section>
    </section>
  );
}
