import React, { useState, useEffect } from "react";
import styles from "./infoCard.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faArrowRightArrowLeft,
  faCalendarCheck,
  faChevronDown,
  faFlagCheckered,
  faClockRotateLeft,
  faLocationCrosshairs,
  faExpand,
} from "@fortawesome/free-solid-svg-icons";
import useDetailPromotion from "@/state/hook/useDetailPromotion";

export default function InfoCard({ id }) {
  const [showTyc, setShowTyc] = useState(true);

  const { promotion, loading, error } = useDetailPromotion(id);

  if (loading) return <p>Cargando detalles de la promoción...</p>;
  if (error) return <p>{error}</p>;
  if (!promotion) return <p>No se encontraron detalles de la promoción</p>;

  return (
    <section className={styles.allInfoCard}>
      <section className={styles.partOne}>
        <section className={styles.marcaDatos}>
          <div className={styles.imgBox}>
            <Image src={promotion?.user.image} alt="icon-user" fill={true} />
          </div>
          <h3>{promotion?.user.brandName}</h3>
        </section>
        <Image
          src="/prom.png"
          alt="image-promo"
          fill={true}
          className={styles.imgPromo}
        />
      </section>
      <section className={styles.partTwo}>
        <h2>{promotion?.promcardName} dasdasdasd asds adasdsa dasdasdsa dsadsadsadsadsadsadsadas</h2>
        <section className={styles.boxDatosRelevantes}>
          <section className={styles.datoImportant}>
            <div className={styles.titleBox}>
              <Image src="/window.svg" alt="i-detalle" width={20} height={23} />
              <p>Stock</p>
            </div>
            <h3>50/150</h3>
          </section>
          <section className={styles.datoImportant}>
            <div className={styles.titleBox}>
              <FontAwesomeIcon
                icon={faUser}
                size="2x"
                className={styles.icon}
              />
              <p>Reservas</p>
            </div>
            <h3>120</h3>
          </section>
          <section className={styles.datoImportant}>
            <div className={styles.titleBox}>
              <FontAwesomeIcon
                icon={faArrowRightArrowLeft}
                size="2x"
                className={styles.icon}
              />
              <p>Interés</p>
            </div>
            <h3>350</h3>
          </section>
        </section>
      </section>
      <section className={styles.partTre}>
        <section className={styles.itemInfo}>
          <FontAwesomeIcon
            icon={faFlagCheckered}
            size="2x"
            className={styles.icon}
          />
          <section className={styles.infoGeneralDato}>
            <div className={styles.flexDatoTitle}>
              <p>Válidez</p>
              <FontAwesomeIcon
                icon={faChevronDown}
                size="2x"
                className={styles.icon}
              />
            </div>
            <p className={styles.datoInfo}>Online y tienda</p>
          </section>
        </section>
        <section className={styles.itemInfo}>
          <FontAwesomeIcon
            icon={faCalendarCheck}
            size="2x"
            className={styles.icon}
          />
          <section className={styles.infoGeneralDato}>
            <div className={styles.flexDatoTitle}>
              <p>Duración</p>
              <FontAwesomeIcon
                icon={faChevronDown}
                size="2x"
                className={styles.icon}
              />
            </div>
            <p className={styles.datoInfo}>12/21/25</p>
          </section>
        </section>
        <section className={styles.itemInfo}>
          <FontAwesomeIcon
            icon={faClockRotateLeft}
            size="2x"
            className={styles.icon}
          />
          <section className={styles.infoGeneralDato}>
            <div className={styles.flexDatoTitle}>
              <p>Atención</p>
              <FontAwesomeIcon
                icon={faChevronDown}
                size="2x"
                className={styles.icon}
              />
            </div>
            <p className={styles.datoInfo}>12/21/25</p>
          </section>
        </section>
        <section className={styles.itemInfo}>
          <FontAwesomeIcon
            icon={faLocationCrosshairs}
            size="2x"
            className={styles.icon}
          />
          <section className={styles.infoGeneralDato}>
            <div className={styles.flexDatoTitle}>
              <p>Ubicación</p>
              <FontAwesomeIcon
                icon={faChevronDown}
                size="2x"
                className={styles.icon}
              />
            </div>
            <p className={styles.datoInfo}>Vilanova i la grel...</p>
          </section>
        </section>
      </section>
      <section className={styles.partFour}>
        {showTyc ? (
          <section className={styles.offTc} onClick={() => setShowTyc(false)}>
            <p>Términos y condiciones</p>
            <FontAwesomeIcon
              icon={faExpand}
              size="2x"
              className={styles.icon}
            />
          </section>
        ) : (
          <section onClick={() => setShowTyc(true)}>todos los detalles</section>
        )}
      </section>
    </section>
  );
}
