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
  faPowerOff,
  faTrashCan,
  faUsersViewfinder,
  faArrowTrendUp,
  faUserShield,
  faArrowUpShortWide,
  faInbox,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import useUserPromotions from "@/state/hook/useUserPromotions";

export default function AllAdsBrand() {
  const [expand, setExpand] = useState(true);
  const { promotions, loading, error } = useUserPromotions();

  if (loading) {
    return <p>Cargando promociones...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (promotions.length === 0) {
    return <p>No has creado promociones aún.</p>;
  }

  return (
    <section className={styles.containerAllBrand}>
      {promotions.map((promotion) => (
        <div key={promotion.id} className={styles.itemAdBrand}>
          <section className={styles.imgAdCard}>
            <section className={styles.interes}>
              <div className={styles.titleSection}>
                <FontAwesomeIcon
                  icon={faUsersViewfinder}
                  size="2x"
                  className={styles.icon}
                />
                <h3>Visibilidad</h3>
              </div>
              <div className={styles.allResult}>
                <p>1234</p>
                <FontAwesomeIcon
                  icon={faArrowTrendUp}
                  size="2x"
                  className={styles.icon}
                />
              </div>
            </section>
            <Image
              src={promotion?.image1}
              alt="image-promcard"
              fill={true}
              className={styles.img}
            />
          </section>
          <h3 className={styles.titleCard}>
            {promotion?.title}
          </h3>
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
                  <p>Ver más información</p>
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
                          src="/mascot-white.png"
                          alt="icon-logo-fani"
                          width={150}
                          height={150}
                        />
                        <h3>Validación de stock</h3>
                      </div>
                      <h4>Disponible: 12/56</h4>
                    </section>
                    <section className={styles.inputBuscador}>
                      <input type="text" placeholder="Código de usuario..." />
                      <button className={styles.btnSearch}>
                        Buscar
                        <FontAwesomeIcon
                          icon={faMagnifyingGlass}
                          size="2x"
                          className={styles.icon}
                        />
                      </button>
                    </section>
                    <section className={styles.aceptUsers}>
                      <div className={styles.resultSearch}>
                        <p>Identidad de usuario:</p>
                        <section className={styles.userBeneficer}>
                          <section className={styles.userPerfil}>
                            <div className={styles.boxImage}>
                              <Image
                                src="/prom.png"
                                alt="icon-user"
                                fill={true}
                              />
                            </div>
                            <h4>Fernando Gutierrez Guzman</h4>
                          </section>
                          <section className={styles.nombresUser}>
                            <p>fernando@gmail.com</p>
                            <p>993 744 958</p>
                          </section>
                        </section>
                      </div>
                      <div className={styles.btnActions}>
                        <button>
                          Aprobar
                          <span>
                            <FontAwesomeIcon
                              icon={faXmark}
                              size="2x"
                              className={styles.icon}
                            />
                          </span>
                        </button>
                        <button>
                          Denegar
                          <span>
                            <FontAwesomeIcon
                              icon={faXmark}
                              size="2x"
                              className={styles.icon}
                            />
                          </span>
                        </button>
                      </div>
                    </section>
                  </section>
                  <section className={styles.listadoUsuarios}>
                    <section className={styles.titleInteres}>
                      <div className={styles.titleSection}>
                        <FontAwesomeIcon
                          icon={faUserShield}
                          size="2x"
                          className={styles.icon}
                        />
                        <h3>Aprobados</h3>
                      </div>
                      <div className={styles.allResult}>
                        <p>1234</p>
                        <FontAwesomeIcon
                          icon={faArrowUpShortWide}
                          size="2x"
                          className={styles.icon}
                        />
                      </div>
                    </section>
                    <section className={styles.flexAllUsers}>
                      <div className={styles.itemUserApproved}>
                        <div className={styles.boxPerfilImage}>
                          <Image src="/prom.png" alt="image-user" fill={true} />
                        </div>
                        <h4>alexander walker</h4>
                        <p>12:10 pm</p>
                      </div>
                      <div className={styles.itemUserApproved}>
                        <div className={styles.boxPerfilImage}>
                          <Image src="/prom.png" alt="image-user" fill={true} />
                        </div>
                        <h4>alexander walker</h4>
                        <p>12:10 pm</p>
                      </div>
                      <div className={styles.itemUserApproved}>
                        <div className={styles.boxPerfilImage}>
                          <Image src="/prom.png" alt="image-user" fill={true} />
                        </div>
                        <h4>alexander walker</h4>
                        <p>12:10 pm</p>
                      </div>
                      <div className={styles.itemUserApproved}>
                        <div className={styles.boxPerfilImage}>
                          <Image src="/prom.png" alt="image-user" fill={true} />
                        </div>
                        <h4>alexander walker</h4>
                        <p>12:10 pm</p>
                      </div>
                    </section>
                  </section>
                  <section className={styles.listadoUsuarios}>
                    <section className={styles.titleInteres}>
                      <div className={styles.titleSection}>
                        <FontAwesomeIcon
                          icon={faInbox}
                          size="2x"
                          className={styles.icon}
                        />
                        <h3>Reservas</h3>
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
                    <section className={styles.flexAllUsers}>
                      <div className={styles.itemUserApproved}>
                        <div className={styles.boxPerfilImage}>
                          <Image src="/prom.png" alt="image-user" fill={true} />
                        </div>
                        <h4>alexander walker</h4>
                        <p>12:10 pm</p>
                      </div>
                      <div className={styles.itemUserApproved}>
                        <div className={styles.boxPerfilImage}>
                          <Image src="/prom.png" alt="image-user" fill={true} />
                        </div>
                        <h4>alexander walker</h4>
                        <p>12:10 pm</p>
                      </div>
                      <div className={styles.itemUserApproved}>
                        <div className={styles.boxPerfilImage}>
                          <Image src="/prom.png" alt="image-user" fill={true} />
                        </div>
                        <h4>alexander walker</h4>
                        <p>12:10 pm</p>
                      </div>
                      <div className={styles.itemUserApproved}>
                        <div className={styles.boxPerfilImage}>
                          <Image src="/prom.png" alt="image-user" fill={true} />
                        </div>
                        <h4>alexander walker</h4>
                        <p>12:10 pm</p>
                      </div>
                    </section>
                  </section>
                </section>
                <section className={styles.containerActions}>
                  <button>
                    <FontAwesomeIcon
                      icon={faPowerOff}
                      size="2x"
                      className={styles.icon}
                    />
                    <p>Suspender temporalmente</p>
                  </button>
                  <button>
                    <FontAwesomeIcon
                      icon={faTrashCan}
                      size="2x"
                      className={styles.icon}
                    />
                    <p>Eliminar beneficio</p>
                  </button>
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
                  <p>Ocultar información</p>
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
      ))}
    </section>
  );
}
