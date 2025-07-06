import styles from "./listadoBenefits.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faXmark,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import usePromotions from "@/state/hook/usePromotionsAll";
import LoaderSpecific from "@/components/loaderSpecific/loaderSpecific";

export default function ListadoBenefits() {
  const { promotions, loading } = usePromotions();

  return (
    <section className={styles.containerList}>
      <section className={styles.flexTitleSection}>
        <div>
          <p>Beneficios</p>
          <FontAwesomeIcon
            icon={faChevronDown}
            size="2x"
            className={styles.icon}
          />
        </div>
        <div>
          <p>Marca</p>
          <FontAwesomeIcon
            icon={faChevronDown}
            size="2x"
            className={styles.icon}
          />
        </div>
        <div>
          <p>Fecha</p>
          <FontAwesomeIcon
            icon={faChevronDown}
            size="2x"
            className={styles.icon}
          />
        </div>
        <div>
          <p>Acción</p>
          <FontAwesomeIcon
            icon={faChevronDown}
            size="2x"
            className={styles.icon}
          />
        </div>
      </section>
      <section className={styles.listAllItems}>
        {loading ? (
          <div className={styles.boxLoading}>
            <LoaderSpecific />
          </div>
        ) : promotions.length === 0 ? (
          <p>No hay promociones.</p>
        ) : (
          promotions.map((promo) => (
            <section key={promo.id} className={styles.itemList}>
              <section className={styles.imgBenefit}>
                <Image
                  src={promo?.image1 || "/prom.png"}
                  alt="imagen-beneficio"
                  width={25}
                  height={25}
                />
                <h4>{promo?.title}</h4>
              </section>
              <p>{promo?.user?.nombreMarca}</p>
              <p>{promo?.startDate} / {promo?.startTime}</p>
              <section className={styles.btnFlex}>
                <button>
                  <FontAwesomeIcon
                    icon={faXmark}
                    size="2x"
                    className={styles.icon}
                  />
                </button>
                <button>
                  Off
                  <FontAwesomeIcon
                    icon={faEye}
                    size="2x"
                    className={styles.icon}
                  />
                </button>
              </section>
            </section>
          ))
        )}
      </section>
    </section>
  );
}
