import React, { useState, useContext } from "react";
import styles from "./infoCard.module.css";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightArrowLeft,
  faGlobe,
  faCalendarCheck,
  faChevronDown,
  faCalendarXmark,
  faLocationCrosshairs,
  faExpand,
  faLayerGroup,
  faBookmark,
  faUsersViewfinder,
  faArrowTrendUp,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import useDetailPromotion from "@/state/hook/useDetailPromotion";
import VerifiedBrand from "@/components/verifiedBrand/verifiedBrand";
import LogicMain from "@/components/logicMain/logicMain";
import AuthContext from "@/state/auth/auth-context";

export default function InfoCard({ id }) {
  const [showTyc, setShowTyc] = useState(true);
  const { user } = useContext(AuthContext);
  const { promotion, loading, error } = useDetailPromotion(id);

  if (loading) return <p>Cargando detalles de la promoción...</p>;
  if (error) return <p>{error}</p>;
  if (!promotion) return <p>No se encontraron detalles de la promoción</p>;
  if (promotion.length === 0) {
    return <p>No has creado promociones aún.</p>;
  }
  return (
    <section className={styles.allInfoCard}>
      <section className={styles.partOne}>
        <section className={styles.marcaViews}>
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
          alt="image-promo"
          fill={true}
          className={styles.imgPromo}
        />
      </section>
      <section className={styles.partTwo}>
        <section className={styles.marcaDatos}>
          <Link
            href={`/perfil-socios-net/${promotion?.user?.nombreMarca}`}
            className={styles.perfilBrand}
          >
            <div className={styles.imgBox}>
              <Image
                src={promotion?.user.expediente.imageUrl || "/prom.png"}
                alt="icon-user"
                fill={true}
              />
            </div>
            <h3>{promotion?.user.nombreMarca}</h3>
          </Link>
          <section className={styles.linkFlex}>
            <Link
              href={promotion?.user?.expediente?.contacto?.sitioWeb}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faGlobe}
                size="2x"
                className={styles.icon}
              />
            </Link>
            <Link href={promotion?.user?.expediente?.contacto?.tiktok}
              target="_blank"
              rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faTiktok}
                size="2x"
                className={styles.icon}
              />
            </Link>
            <Link href={promotion?.user?.expediente?.contacto?.instagram}
              target="_blank"
              rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faInstagram}
                size="2x"
                className={styles.icon}
              />
            </Link>
            <Link href={promotion?.user?.expediente?.contacto?.facebook}
              target="_blank"
              rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faFacebook}
                size="2x"
                className={styles.icon}
              />
            </Link>
          </section>
        </section>
        <h2>{promotion?.title}</h2>
        <h4 className={styles.descriptionText}>{promotion?.description}</h4>
        <section className={styles.boxDatosRelevantes}>
          <section className={styles.datoImportant}>
            <div className={styles.titleBox}>
              <FontAwesomeIcon
                icon={faLayerGroup}
                size="2x"
                className={styles.icon}
              />
              <p>Stock</p>
            </div>
            <h3>50/{promotion?.stock}</h3>
          </section>
          <section className={styles.datoImportant}>
            <div className={styles.titleBox}>
              <FontAwesomeIcon
                icon={faBookmark}
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
              <p>Visitas</p>
            </div>
            <h3>350</h3>
          </section>
        </section>
      </section>
      <section className={styles.partTre}>
        <section className={styles.itemInfo}>
          <FontAwesomeIcon
            icon={faCalendarCheck}
            size="2x"
            className={styles.icon}
          />
          <section className={styles.infoGeneralDato}>
            <div className={styles.flexDatoTitle}>
              <p>Empieza</p>
              <FontAwesomeIcon
                icon={faChevronDown}
                size="2x"
                className={styles.icon}
              />
            </div>
            <p className={styles.datoInfo}>{promotion?.startDate}</p>
          </section>
        </section>
        <span></span>
        <section className={styles.itemInfo}>
          <FontAwesomeIcon
            icon={faCalendarXmark}
            size="2x"
            className={styles.icon}
          />
          <section className={styles.infoGeneralDato}>
            <div className={styles.flexDatoTitle}>
              <p>Termina</p>
              <FontAwesomeIcon
                icon={faChevronDown}
                size="2x"
                className={styles.icon}
              />
            </div>
            <p className={styles.datoInfo}>{promotion?.endDate}</p>
          </section>
        </section>
        <span></span>
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
            <p className={styles.datoInfo}>{promotion?.ubication}</p>
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
      {user ? (
        <VerifiedBrand promotion={promotion} user={user} />
      ) : (
        <LogicMain />
      )}
    </section>
  );
}
