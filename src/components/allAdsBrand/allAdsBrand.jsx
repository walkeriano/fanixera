import React, { useState, useEffect } from "react";
import styles from "./allAdsBrand.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faCalendarCheck,
  faTurnDown,
  faClockRotateLeft,
  faLocationCrosshairs,
  faXmark,
  faCalendarXmark,
  faArrowRightArrowLeft,
  faPowerOff,
  faTrashCan,
  faUsersViewfinder,
  faArrowTrendUp,
  faUserShield,
  faArrowUpShortWide,
  faInbox,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import useUserPromotions from "@/state/hook/useUserPromotions";
import QrButton from "@/components/qrButton/qrButton";
import LoaderSpecific from "@/components/loaderSpecific/loaderSpecific";
import FirstAds from "@/components/firstAds/firstAds";

export default function AllAdsBrand({ nombreMarca }) {
  const { promotions, loading, error } = useUserPromotions(nombreMarca);

  // Estado para los clientes pendientes y aprobados
  const [clientsPendientes, setClientsPendientes] = useState([]);
  const [clientsAprobados, setClientsAprobados] = useState([]);

  // Usamos un Set para manejar los IDs de las promociones expandidas
  const [expandedPromotions, setExpandedPromotions] = useState(new Set());

  const toggleExpand = (promotionId) => {
    // Alternamos el estado de expansión: si está en el Set lo quitamos, si no lo agregamos
    setExpandedPromotions((prevState) => {
      const newState = new Set(prevState);
      if (newState.has(promotionId)) {
        newState.delete(promotionId);
      } else {
        newState.add(promotionId);
      }
      return newState;
    });
  };

  useEffect(() => {
    if (promotions.length > 0) {
      // Filtrar clientes pendientes y aprobados
      const allClients = promotions.flatMap(
        (promotion) => promotion.clients || []
      );
      const pendientes = allClients.filter(
        (client) => client.status === "pendiente"
      );
      const aprobados = allClients.filter(
        (client) => client.status === "aprobado"
      );

      // Actualizar los estados
      setClientsPendientes(pendientes);
      setClientsAprobados(aprobados);
    }
  }, [promotions]);

  if (loading) {
    return <LoaderSpecific />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (promotions.length === 0) {
    return <FirstAds/>;
  }

  return (
    <section className={styles.containerAllBrand}>
      <section className={styles.flextitleGeneral}>
        <h2 className={styles.titleContainer}>Beneficios libres</h2>
        <section className={styles.titleFunction}>
          <h3>Disponibles:</h3>
          <div className={styles.totalCards}>
            <p>{promotions?.length}</p>
            <FontAwesomeIcon
              icon={faTurnDown}
              size="2x"
              className={styles.icon}
            />
          </div>
        </section>
      </section>
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
          <h3 className={styles.titleCard}>{promotion?.title}</h3>
          <p className={styles.descriptionCard}>
            dasjdlkasjdlajskldjsaklds djkslaj jdkslajdjsakdjk slajdklsadasdsa
            dsadsadas dsadsadsa dsadsadas fdfdsf fdsfdsfds
          </p>
          <section className={styles.expandContainer}>
            {expandedPromotions.has(promotion.id) ? (
              <div className={styles.divinactive}>
              <section className={styles.detallesAd}>
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
                    icon={faCalendarCheck}
                    size="2x"
                    className={styles.icon}
                  />
                  <span>
                    <p>Inicia:</p>
                    <p>
                      {promotion?.startDate} / {promotion?.startTime}
                    </p>
                  </span>
                </div>
                <div className={styles.itemDetalle}>
                  <FontAwesomeIcon
                    icon={faCalendarXmark}
                    size="2x"
                    className={styles.icon}
                  />
                  <span>
                    <p>Termina:</p>
                    <p>
                      {promotion?.endDate} / {promotion?.endTime}
                    </p>
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
                    <p>{promotion?.ubication}</p>
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
                      <h3>Validación de usuario</h3>
                    </div>
                    <h4>Disponible: 12/56</h4>
                  </section>
                  <QrButton />
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
                      <p>{clientsAprobados?.length}</p>
                      <FontAwesomeIcon
                        icon={faArrowUpShortWide}
                        size="2x"
                        className={styles.icon}
                      />
                    </div>
                  </section>
                  {clientsAprobados.length > 0 ? (
                    <section className={styles.flexAllUsers}>
                      {clientsAprobados.map((client) => (
                        <div
                          key={client.id}
                          className={styles.itemUserApproved}
                        >
                          <div className={styles.boxPerfilImage}>
                            <Image
                              src="/prom.png"
                              alt="image-user"
                              fill={true}
                            />
                          </div>
                          <h4>{client?.email}</h4>
                          <p>{client?.nombreMarca}</p>
                          <p>12:10 pm</p>
                        </div>
                      ))}
                    </section>
                  ) : (
                    <p>No hay clientes registrados.</p>
                  )}
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
                      <p>{clientsPendientes?.length}</p>
                      <FontAwesomeIcon
                        icon={faArrowRightArrowLeft}
                        size="2x"
                        className={styles.icon}
                      />
                    </div>
                  </section>
                  {clientsPendientes.length > 0 ? (
                    <section className={styles.flexAllUsers}>
                      {clientsPendientes.map((client) => (
                        <div
                          key={client.id}
                          className={styles.itemUserApproved}
                        >
                          <div className={styles.boxPerfilImage}>
                            <Image
                              src="/prom.png"
                              alt="image-user"
                              fill={true}
                            />
                          </div>
                          <h4>{client?.email}</h4>
                          <p>{client?.nombreMarca}</p>
                          <p>12:10 pm</p>
                        </div>
                      ))}
                    </section>
                  ) : (
                    <p>No hay clientes registrados.</p>
                  )}
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
                onClick={() => toggleExpand(promotion.id)}
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
              
            ) : (
              <div className={styles.divactive}>
                <section
                  onClick={() => toggleExpand(promotion.id)}
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
            )}
          </section>
        </div>
      ))}
    </section>
  );
}
