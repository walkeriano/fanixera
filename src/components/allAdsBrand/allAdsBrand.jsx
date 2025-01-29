import React, {useState} from "react";
import styles from "./allAdsBrand.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faCalendarCheck,
  faFlagCheckered,
  faClockRotateLeft,
  faLocationCrosshairs,
  faXmark,
  faUser,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function AllAdsBrand() {
    const [expand, setExpand] = useState(true);




  return (
    <section className={styles.containerAllBrand}>
      <div
        onClick={() => setExpand((prev) => !prev)}
        className={styles.itemAdBrand}
      >
        <section className={styles.imgAdCard}>
          <Image
            src="/images/art-2.jpg"
            alt="image-promcard"
            fill={true}
            className={styles.img}
          />
        </section>
        <section className={styles.expandContainer}>
          {expand ? (
            <div className={styles.divactive}>
              <h3>2 x 1 en combos hamburgesas para todos listos</h3>
              <section onClick={() => setExpand(false)} className={styles.btnExpandir}>
                <FontAwesomeIcon
                  icon={faCaretDown}
                  size="2x"
                  className={styles.icon}
                />
                <p>expandir ventana</p>
                <FontAwesomeIcon
                  icon={faCaretDown}
                  size="2x"
                  className={styles.icon}
                />
              </section>
            </div>
          ) : (
            <div className={styles.divinactive}>
              <h3>2 x 1 en combos hamburgesas para todos listos</h3>
              <section className={styles.detallesAd}>
                <div className={styles.itemDetalle}>
                  <FontAwesomeIcon
                    icon={faCalendarCheck}
                    size="2x"
                    className={styles.icon}
                  />
                  <span>
                    <p>Duración:</p>
                    <p>10/12/24 - 12/12/12</p>
                  </span>
                </div>
                <div className={styles.itemDetalle}>
                  <FontAwesomeIcon
                    icon={faFlagCheckered}
                    size="2x"
                    className={styles.icon}
                  />
                  <span>
                    <p>Válido en:</p>
                    <p>Local y on line</p>
                  </span>
                </div>
                <div className={styles.itemDetalle}>
                  <FontAwesomeIcon
                    icon={faClockRotateLeft}
                    size="2x"
                    className={styles.icon}
                  />
                  <span>
                    <p>Atención:</p>
                    <p>Lunes a Domingo / 11am - 5pm</p>
                  </span>
                </div>
                <div className={styles.itemDetalle}>
                  <FontAwesomeIcon
                    icon={faLocationCrosshairs}
                    size="2x"
                    className={styles.icon}
                  />
                  <span>
                    <p>Ubicación:</p>
                    <p>San miguel, Lima - Peru.</p>
                  </span>
                </div>
              </section>
              <section className={styles.terminosCondiciones}>
                <p>Términos y condiciones</p>
                <span>
                  <FontAwesomeIcon
                    icon={faXmark}
                    size="2x"
                    className={styles.icon}
                  />
                </span>
              </section>
              <section className={styles.beneficiarios}>
                <section className={styles.validacionUsuarios}>
                  <div>
                    <span>
                      <Image
                        src="/icons/mascot.svg"
                        alt="icon-logo-fani"
                        width={30}
                        height={30}
                      />
                      <h3>Stock promcards</h3>
                    </span>
                    <p>12/56</p>
                  </div>
                  <div>
                    <input type="text" placeholder="Ingresar codigo" />
                    <button className={styles.btnSearch}>
                      <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        size="2x"
                        className={styles.icon}
                      />
                    </button>
                  </div>
                  <div>
                    <div>
                      <p>Validación de usuario:</p>
                      <h4>Fernando Gutierrez Guzman</h4>
                    </div>
                    <div>
                      <button>Aprobar</button>
                      <button>Denegar</button>
                    </div>
                  </div>
                </section>
                <section className={styles.listadoUsuarios}>
                  <p className={styles.title}>Usuarios aprobados:</p>
                  <div>
                    <p>alexander walker</p>
                    <span></span>
                  </div>
                </section>
              </section>
              <section className={styles.interes}>
                <div>
                  <span>
                    <FontAwesomeIcon
                      icon={faUser}
                      size="2x"
                      className={styles.icon}
                    />
                    <h3>Nivel de Interés</h3>
                  </span>
                  <p>1234</p>
                </div>
                <div>
                  <span>
                    <p>alexander walker</p>
                    <div></div>
                  </span>
                  <span>
                    <p>alexander walker</p>
                    <div></div>
                  </span>
                </div>
              </section>
              <section className={styles.btnMinimizar}>
                <FontAwesomeIcon
                  icon={faCaretDown}
                  size="2x"
                  className={styles.icon}
                />
                <p>Minimizar ventana</p>
                <FontAwesomeIcon
                  icon={faCaretDown}
                  size="2x"
                  className={styles.icon}
                />
              </section>
            </div>
          )}
        </section>
      </div>
    </section>
  );
}
