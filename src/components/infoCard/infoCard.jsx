import React, { useState, useContext } from "react";
import styles from "./infoCard.module.css";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpWideShort,
  faGlobe,
  faCalendarCheck,
  faChevronDown,
  faCalendarXmark,
  faLocationCrosshairs,
  faSquareCaretDown,
  faCaretDown,
  faStarHalfStroke,
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
            <Link
              href={promotion?.user?.expediente?.contacto?.tiktok}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faTiktok}
                size="2x"
                className={styles.icon}
              />
            </Link>
            <Link
              href={promotion?.user?.expediente?.contacto?.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                size="2x"
                className={styles.icon}
              />
            </Link>
            <Link
              href={promotion?.user?.expediente?.contacto?.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                size="2x"
                className={styles.icon}
              />
            </Link>
          </section>
        </section>
        <Image
          src={promotion?.image1 || "/prom.png"}
          alt="image-promo"
          fill={true}
          className={styles.imgPromo}
        />
      </section>
      <section className={styles.flexContainerViewall}>
        <section className={styles.partTwo}>
          <h2>hamburguesas 2x1 toda la semana es hora {promotion?.title}</h2>
          <h4 className={styles.descriptionText}>
            {promotion?.description} aprovecha ahora y adquiere 5 hamburgesas
            royal + 5 bebidas hasta las 5 pm.
          </h4>
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
          <section className={styles.boxDatosRelevantes}>
            <section className={styles.datoImportant}>
              <div className={styles.titleBox}>
                <Image
                  src="/mascot-white.png"
                  alt="mascot-tomi"
                  width={40}
                  height={40}
                />
                <p>Stock</p>
              </div>
              <h3>50/{promotion?.stock}</h3>
            </section>
            <section className={styles.datoImportant}>
              <div className={styles.titleBox}>
                <FontAwesomeIcon
                  icon={faStarHalfStroke}
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
                  icon={faArrowUpWideShort}
                  size="2x"
                  className={styles.icon}
                />
                <p>Visitas</p>
              </div>
              <h3>350</h3>
            </section>
          </section>
        </section>
        <section className={styles.partFour}>
          {showTyc ? (
            <section className={styles.offTc} onClick={() => setShowTyc(false)}>
              <p>Términos y condiciones</p>
              <FontAwesomeIcon
                icon={faSquareCaretDown}
                size="2x"
                className={styles.icon}
              />
            </section>
          ) : (
            <section onClick={() => setShowTyc(true)} className={styles.onTc}>
              <div className={styles.titleTyc} onClick={() => setShowTyc(true)}>
                <h3>Términos y condiciones</h3>
                <FontAwesomeIcon
                  icon={faSquareCaretDown}
                  size="2x"
                  className={styles.icon}
                />
              </div>
              <span></span>
              <p>
                Ejemplos: También se conocen como condiciones de servicio,
                condiciones de uso, EULA (Acuerdo de licencia de usuario final),
                condiciones generales o notas legales. ¿Por qué son importantes?
                Claran las condiciones de uso: Especifican cómo se puede usar el
                servicio, las reglas de interacción entre usuarios y las reglas
                de cancelación de cuentas. Ayudan a resolver problemas:
                Establecen un marco legal para la resolución de conflictos.
                Protegen los intereses de la empresa: Limitando su
                responsabilidad y estableciendo las condiciones de uso. Protegen
                los derechos del usuario: Asegurando que se cumplan las leyes y
                regulaciones aplicables. ¿Qué deben incluir? Identificación de
                la empresa y datos de contacto. Descripción del servicio.
                Información sobre responsabilidad y descargos de
                responsabilidad. Información sobre la garantía (en su caso).
                Existencia del derecho de desistimiento (en su caso).
                Condiciones de entrega del producto/servicio (en su caso).
                Condiciones de uso o de compra (por ejemplo, requisitos de edad,
                restricciones geográficas). Información relativa a la política
                de reembolsos, cambios o cese del servicio. Información relativa
                a los métodos de pago (en su caso). Normas de conducta del
                usuario. Resolución de conflictos. Legislación aplicable.
                Derechos de propiedad intelectual.{" "}
              </p>
              <div
                className={styles.closingTyc}
                onClick={() => setShowTyc(true)}
              >
                <FontAwesomeIcon
                  icon={faCaretDown}
                  size="2x"
                  className={styles.icon}
                />
                <h3>Ocultar información</h3>
                <FontAwesomeIcon
                  icon={faCaretDown}
                  size="2x"
                  className={styles.icon}
                />
              </div>
            </section>
          )}
        </section>
        {user ? (
          <VerifiedBrand promotion={promotion} user={user} />
        ) : (
          <LogicMain />
        )}
      </section>
    </section>
  );
}
