import React, { useState } from "react";
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
  faArrowRightArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function AllAdsBrand() {
  const [expand, setExpand] = useState(true);

  return (
    <section className={styles.containerAllBrand}>
      <div className={styles.itemAdBrand}>
        <section className={styles.imgAdCard}>
          <Image
            src="/prom.png"
            alt="image-promcard"
            fill={true}
            className={styles.img}
          />
        </section>
        <h3 className={styles.titleCard}>2 x 1 en combos hamburgesas para todos listos</h3>
        <section className={styles.expandContainer}>
          {expand ? (
            <div className={styles.divactive}>
              <section
                onClick={() => setExpand(false)}
                className={styles.btnExpandir}
              >
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
                  <section className={styles.totalStock}>
                    <div className={styles.titleStock}>
                      <Image
                        src="/mascot-blue.png"
                        alt="icon-logo-fani"
                        width={30}
                        height={30}
                      />
                      <h3>Stock disponible</h3>
                    </div>
                    <p>12/56</p>
                  </section>
                  <section className={styles.inputBuscador}>
                    <input type="text" placeholder="Ingresar codigo" />
                    <button className={styles.btnSearch}>
                      <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        size="2x"
                        className={styles.icon}
                      />
                    </button>
                  </section>
                  <section className={styles.aceptUsers}>
                    <div className={styles.resultSearch}>
                      <p>Resultado de busqueda:</p>
                      <h4>Fernando Gutierrez Guzman</h4>
                    </div>
                    <div className={styles.btnActions}>
                      <button>Aprobar</button>
                      <button>Denegar</button>
                    </div>
                  </section>
                </section>
                <section className={styles.listadoUsuarios}>
                  <div>
                    <h4>Usuarios aprobados:</h4>
                  </div>
                  <div className={styles.itemUserApproved}>
                    <p>alexander walker</p>
                    <p>12:10 pm</p>
                    <button>
                      <FontAwesomeIcon
                        icon={faXmark}
                        size="2x"
                        className={styles.icon}
                      />
                    </button>
                  </div>
                </section>
              </section>
              <section className={styles.interes}>
                <section className={styles.titleInteres}>
                  <div className={styles.titleSection}>
                    <FontAwesomeIcon
                      icon={faUser}
                      size="2x"
                      className={styles.icon}
                    />
                    <h3>Nivel de Interés</h3>
                  </div>
                  <div className={styles.allResult}>
                    <p>1234</p>
                    <FontAwesomeIcon
                      icon={faArrowRightArrowLeft}
                      size="2x"
                      className={styles.icon}
                    />
                  </div>
                </section>
                <section className={styles.userInteres}>
                  <div className={styles.userItem}>
                    <p>alexander walker</p>
                    <p>12:10 pm</p>
                  </div>
                  <div className={styles.userItem}>
                    <p>alexander walker</p>
                    <p>12:10 pm</p>
                  </div>
                </section>
              </section>
              <section
                onClick={() => setExpand(true)}
                className={styles.btnMinimizar}
              >
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
