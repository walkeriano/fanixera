import styles from "./formCreationAd.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolderOpen,
  faTriangleExclamation,
  faChevronDown
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function FormCreationAd() {
  return (
    <form className={styles.containerForm}>
      <section className={styles.generalInfoAd}>
        <h3>1. Section info general</h3>
        <label htmlFor="">
          <input type="text" placeholder="escribir aqui..." />
          <FontAwesomeIcon
            icon={faFolderOpen}
            size="2x"
            className={styles.icon}
          />
        </label>
        <label htmlFor="">
          <input type="text" placeholder="escribir aqui..." />
          <FontAwesomeIcon
            icon={faFolderOpen}
            size="2x"
            className={styles.icon}
          />
        </label>
        <label htmlFor="">
          <input type="text" placeholder="escribir aqui..." />
          <FontAwesomeIcon
            icon={faFolderOpen}
            size="2x"
            className={styles.icon}
          />
        </label>
        <label htmlFor="">
          <input type="text" placeholder="escribir aqui..." />
          <FontAwesomeIcon
            icon={faFolderOpen}
            size="2x"
            className={styles.icon}
          />
        </label>
      </section>
      <section className={styles.tiempoExposicion}>
        <h3>2. Tiempo de exposición</h3>
        <section className={styles.itemTiempo}>
          <p>Inicia:</p>
          <div className={styles.boxInputsDates}>
            <input type="date" />
            <input type="time" />
          </div>
        </section>
        <section className={styles.itemTiempo}>
          <p>Termina:</p>
          <div className={styles.boxInputsDates}>
            <input type="date" />
            <input type="time" />
          </div>
        </section>
        <section className={styles.alertMessage}>
          <FontAwesomeIcon
            icon={faTriangleExclamation}
            size="2x"
            className={styles.icon}
          />
          <p>Tiempo máximo de 5 días - 52 horas</p>
        </section>
      </section>
      <section className={styles.imagesFormatAds}>
        <h3>3. Imagenes y videos</h3>
        <section className={styles.containerImageAd}>
          <section className={styles.flexAddImage}>
            <section className={styles.detallesFormat}>
              <div className={styles.titleSectionImage}>
                <h4>Formato vertical</h4>
                <p>wall principal</p>
              </div>
              <div className={styles.iconInfo}>
                <Image
                  src="/prom.png"
                  alt="hello world"
                  width={50}
                  height={50}
                />
                <p>350px - 840px</p>
                <p>Tamaño máximo 1mb</p>
              </div>
            </section>
            <section className={styles.fileImageAd}>
              <input type="file" hidden />
              <FontAwesomeIcon
                icon={faTriangleExclamation}
                size="2x"
                className={styles.icon}
              />
              <p>Adjuntar imagen...</p>
            </section>
          </section>
          <section className={styles.flexAddImage}>
            <section className={styles.detallesFormat}>
              <div className={styles.titleSectionImage}>
                <h4>Formato vertical</h4>
                <p>wall principal</p>
              </div>
              <div className={styles.iconInfo}>
                <Image
                  src="/prom.png"
                  alt="hello world"
                  width={50}
                  height={50}
                />
                <p>350px - 840px</p>
                <p>Tamaño máximo 1mb</p>
              </div>
            </section>
            <section className={styles.fileImageAd}>
              <input type="file" hidden />
              <FontAwesomeIcon
                icon={faTriangleExclamation}
                size="2x"
                className={styles.icon}
              />
              <p>Adjuntar imagen...</p>
            </section>
          </section>
        </section>
      </section>
      <section className={styles.stockRegister}>
        <h3>2. stock de beneficios</h3>
        <section className={styles.stockInput}>
          <label htmlFor="">
            <input type="number" placeholder="escribir aqui..." />
            <FontAwesomeIcon
              icon={faFolderOpen}
              size="2x"
              className={styles.icon}
            />
          </label>
          <button className={styles.stockIlimitado}>
            <FontAwesomeIcon
              icon={faFolderOpen}
              size="2x"
              className={styles.icon}
            />
            Stock ilimitado
          </button>
        </section>
      </section>
      <section className={styles.visualizerCard}>
        <div className={styles.titleSectionCard}>
        <FontAwesomeIcon
            icon={faChevronDown}
            size="2x"
            className={styles.icon}
          />
          <h3>Previsualización de beneficio</h3>
          <FontAwesomeIcon
            icon={faChevronDown}
            size="2x"
            className={styles.icon}
          />
        </div>
        
        <section className={styles.flexImagesContainer}>
          <div className={styles.imgCardVisualTwo}>
            <Image src="/prom.png" alt="image-card" width={30} height={30} />
            <Image src="/prom.png" alt="image-card" fill={true} />
          </div>
          <div className={styles.imgCardVisual}>
            <Image src="/prom.png" alt="image-card" width={30} height={30} />
            <Image src="/prom.png" alt="image-card" fill={true} />
          </div>
        </section>
        <section className={styles.infoCard}>
          <h2>compra prolodf</h2>
          <h3>dsaklñdksañdsaljgjghkd</h3>
          <div className={styles.itemInfo}>
            <p>Stock:</p>
            <p>150</p>
          </div>
          <div className={styles.itemInfo}>
            <p>Precio:</p>
            <p>$100.00</p>
          </div>
          <div className={styles.itemInfo}>
            <p>Categorías:</p>
            <p>entretenimiento</p>
          </div>
          <div className={styles.itemInfo}>
            <p>Beneficios:</p>
            <p>150 beneficios</p>
          </div>
          <div className={styles.itemInfo}>
            <p>Tiempo de exposición:</p>
            <p>2022-05-21 12:30:00</p>
          </div>
        </section>
        <button className={styles.btnAddBeneficio} type="submit">publicar beneficio</button>
      </section>
      
    </form>
  );
}
