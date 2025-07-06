import styles from "./totalBeneficios.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import usePromotions from "@/state/hook/usePromotionsAll";
import LoaderSpecific from "@/components/loaderSpecific/loaderSpecific";

export default function TotalBeneficios() {
  const { promotions, loading } = usePromotions();

  return (
    <section className={styles.totalBeneficios}>
      <section className={styles.titleBox}>
        <div className={styles.titleDescription}>
          <p>Beneficios creados</p>
          <FontAwesomeIcon
            icon={faChevronDown}
            size="2x"
            className={styles.icon}
          />
        </div>
        <section className={styles.totalBox}>
          <p>{promotions.length}</p>
          <FontAwesomeIcon icon={faGift} size="2x" className={styles.icon} />
        </section>
      </section>
      <section className={styles.listItem}>
        {loading ? (
          <div className={styles.boxLoading}>
            <LoaderSpecific />
          </div>
        ) : promotions.length === 0 ? (
          <p>No hay promociones.</p>
        ) : (
          promotions.map((promo) => (
            <section key={promo.id} className={styles.itemBenefit}>
              <div className={styles.imageBrand}>
                <Image
                  src={promo.user?.expediente?.imageUrl || "/prom.png"}
                  alt="promo-brand"
                  fill={true}
                />
              </div>
              <div className={styles.imageContainer}>
                <Image
                  src={promo.image1 || "/prom.png"}
                  alt="promo-img"
                  fill={true}
                />
              </div>
              <div className={styles.infoItem}>
                <h4>{promo.title || "Sin nombre"}</h4>
                <p>
                  {promo.startTime || "00:00"} / {promo.startDate || "00:00"}
                </p>
                <p>
                  {promo.endTime || "00:00"} / {promo.endDate || "00:00"}
                </p>
              </div>
            </section>
          ))
        )}
      </section>
    </section>
  );
}
