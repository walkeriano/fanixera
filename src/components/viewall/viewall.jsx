import styles from "./viewall.module.css";
import usePromotions from "@/state/hook/usePromotions";
import Image from "next/image";

export default function viewall({ selectedCategory }) {
  const { promotions, loading, error } = usePromotions(selectedCategory);

  if (loading) return <p>Loading promotions...</p>;
  if (error) return <p>{error}</p>;

  if (promotions.length === 0) {
    return <p>No hay promociones disponibles</p>;
  }

  const splitIndex = Math.ceil(promotions.length / 2);
  const firstRail = promotions.slice(0, splitIndex);
  const secondRail = promotions.slice(splitIndex);

  return (
    <section className={styles.viewall}>
      <section className={styles.rieles}>
        {firstRail.map((promo) => (
          <div key={promo.id} className={styles.boxad}>
            <Image
              src="/prom.png"
              alt="image-marca"
              fill={true}
              className={styles.imgAd}
            />
            <div className={styles.boxImage}>
              <Image
                src={promo?.user.image}
                alt="image-marca"
                width={30}
                height={30}
              />
            </div>
          </div>
        ))}
      </section>
      <section className={styles.rieles}>
        {secondRail.map((promo) => (
          <div key={promo.id} className={styles.boxad}>
            <Image
              src="/prom.png"
              alt="image-marca"
              fill={true}
              className={styles.imgAd}
            />
            <div className={styles.boxImage}>
              <Image
                src={promo?.user.image}
                alt="image-marca"
                width={30}
                height={30}
              />
            </div>
          </div>
        ))}
      </section>
      <section className={styles.rieles}>
        {secondRail.map((promo) => (
          <div key={promo.id} className={styles.boxad}>
            <Image
              src="/prom.png"
              alt="image-marca"
              fill={true}
              className={styles.imgAd}
            />
            <div className={styles.boxImage}>
              <Image
                src={promo?.user.image}
                alt="image-marca"
                width={30}
                height={30}
              />
            </div>
          </div>
        ))}
      </section>
    </section>
  );
}
