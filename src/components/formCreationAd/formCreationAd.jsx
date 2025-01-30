import styles from "./formCreationAd.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolderOpen,
  faTriangleExclamation,
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
      <section className={styles.stockRegister}>
        <h3>2. stock de beneficios</h3>
        <section className={styles.stockRegister}>
          <label htmlFor="">
            <input type="number" placeholder="escribir aqui..." />
            <FontAwesomeIcon
              icon={faFolderOpen}
              size="2x"
              className={styles.icon}
            />
          </label>
          <button className={styles.stockIlimitado}>
            stock ilimitado
            <FontAwesomeIcon
              icon={faFolderOpen}
              size="2x"
              className={styles.icon}
            />
          </button>
        </section>
      </section>
      <section className={styles.tiempoExposicion}>
        <h3>2. Tiempo de exposición</h3>
        <section className={styles.itemTiempo}>
          <p>Inicia:</p>
          <div className={styles.boxInputsDates}>
            <input type="date" />
            <span></span>
            <input type="time" />
          </div>
        </section>
        <section className={styles.itemTiempo}>
          <p>Termina:</p>
          <div className={styles.boxInputsDates}>
            <input type="date" />
            <span></span>
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
          <section className={styles.detallesFormat}>
            <div>
              <h4>Formato vertical</h4>
              <p>wall principal</p>
            </div>
            <div>
              <Image src="/prom.png" alt="hello world" width={50} height={50} />
              <div>
                <p>350px - 840px</p>
                <p>Tamaño máximo 1mb</p>
              </div>
            </div>
          </section>
          <section className={styles.fileImageAd}>
            <input type="file" />
            <div>
              <p>message</p>
              <FontAwesomeIcon
                icon={faTriangleExclamation}
                size="2x"
                className={styles.icon}
              />
            </div>
          </section>
          <span></span>
          <section className={styles.detallesFormat}>
            <div>
              <h4>Formato vertical</h4>
              <p>wall principal</p>
            </div>
            <div>
              <Image src="/prom.png" alt="hello world" width={50} height={50} />
              <div>
                <p>350px - 840px</p>
                <p>Tamaño máximo 1mb</p>
              </div>
            </div>
          </section>
          <section className={styles.fileImageAd}>
            <input type="file" />
            <div>
              <p>message</p>
              <FontAwesomeIcon
                icon={faTriangleExclamation}
                size="2x"
                className={styles.icon}
              />
            </div>
          </section>
        </section>
      </section>
      <button type="submit">enviar formulario</button>
    </form>
  );
}
