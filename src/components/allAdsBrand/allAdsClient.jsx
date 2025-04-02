import React, { useState } from "react";
import styles from "./allAdsBrand.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faCalendarCheck,
  faTurnDown,
  faLocationCrosshairs,
  faXmark,
  faCalendarXmark,
  faUsersViewfinder,
  faArrowTrendUp,
  faArrowUpRightFromSquare
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import useClientPromotions from "@/state/hook/useClientPromotions";
import LoaderSpecific from "@/components/loaderSpecific/loaderSpecific";

export default function AllAdsClient() {
  const [expand, setExpand] = useState(true);
  const { promotions, loading, error } = useClientPromotions();

  if (loading) {
    return <LoaderSpecific />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section className={styles.containerAllClient}>
      <section className={styles.titleFunction}>
        <h3>Beneficios reservados</h3>
        <div className={styles.totalCards}>
          <p>{promotions?.length}</p>
          <FontAwesomeIcon
            icon={faTurnDown}
            size="2x"
            className={styles.icon}
          />
        </div>
      </section>
      {promotions.length === 0 ? (
        <section className={styles.cardOut}>
          <Image
            src="/mascot-blue.png"
            width={110}
            height={110}
            alt="icon-mascot"
          />
          <p>Ya puedes empezar a reservar beneficios...</p>
          <Link href="/" className={styles.btnRedirect}>
            Iniciar ahora
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              size="2x"
              className={styles.icon}
            />
          </Link>
        </section>
      ) : (
        <>
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
                  src={promotion?.image1 || "/prom.png"}
                  alt="image-promcard"
                  fill={true}
                  className={styles.img}
                />
              </section>
              <h3 className={styles.titleCard}>{promotion?.title}</h3>
              <p className={styles.descriptionCard}>{promotion?.description}</p>
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
                    <section className={styles.containerQr}>
                      <h3>Enlace de beneficio</h3>
                      {promotion.qrCode ? (
                        <section className={styles.boxQr}>
                          <img src={promotion.qrCode} alt={`QR de usuario`} />
                        </section>
                      ) : (
                        <p>No hay QR disponible</p>
                      )}
                      <section className={styles.alertIdentified}>
                        <FontAwesomeIcon
                          icon={faUsersViewfinder}
                          size="2x"
                          className={styles.icon}
                        />
                        <p>Recuerda mostrar tu identificación</p>
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
        </>
      )}
    </section>
  );
}
