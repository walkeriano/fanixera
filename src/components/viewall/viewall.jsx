import React, { useState, useEffect } from "react";
import styles from "./viewall.module.css";
import usePromotions from "@/state/hook/usePromotions";
import useSearchPromotions from "@/state/hook/useSearchPromotions";
import Image from "next/image";
import Link from "next/link";
import Tools from "@/components/tools/tools";
import LoadingBeneficios from "@/components/loadingBeneficios/loadingBeneficios";

export default function viewall({ selectedCategory, searchTerm }) {
  const { promotions, loading, error } = usePromotions(selectedCategory);
  const {
    filteredPromotions,
    loading: searchLoading,
    error: searchError,
  } = useSearchPromotions(searchTerm);
  const [shuffledPromotions, setShuffledPromotions] = useState([]);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (searchTerm.trim()) {
      setShuffledPromotions(filteredPromotions);
    } else {
      setShuffledPromotions(promotions);
    }
  }, [promotions, filteredPromotions, searchTerm]);

  const randomizePromotions = () => {
    // Activar la animación
    setAnimate(true);
    // Lógica para mezclar las promociones aleatoriamente
    const shuffled = [...shuffledPromotions];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Intercambiar elementos
    }
    setShuffledPromotions(shuffled); // Actualizamos el estado con el nuevo orden

    console.log("Shuffled Promotions");
    // Desactivar la animación después de un tiempo
    setTimeout(() => {
      setAnimate(false);
    }, 500); // Duración de la animación (500ms)
  };

  if (loading || searchLoading) return <LoadingBeneficios />;
  if (error || searchError) return <p>{error || searchError}</p>;

  if (shuffledPromotions.length === 0) {
    return <p>No hay promociones disponibles</p>;
  }

  // Dividimos las promociones mezcladas en tres partes
  const splitIndex1 = Math.ceil(shuffledPromotions.length / 3);
  const splitIndex2 = splitIndex1 * 2;
  const firstRail = shuffledPromotions.slice(0, splitIndex1);
  const secondRail = shuffledPromotions.slice(splitIndex1, splitIndex2);
  const thirdRail = shuffledPromotions.slice(splitIndex2);

  return (
    <section className={styles.viewall}>
      <section className={styles.rieles}>
        {firstRail.map((promo) => (
          <Link
            href={`/detalle-marca/${promo.id}`} // Usar `index` como respaldo si `promo.id` es undefined
            key={`first-${promo.id}`}
            className={`${styles.boxad} ${animate ? styles.animate : ""}`}
          >
            <Image
              src={promo?.image1 || "/prom.png"}
              alt="image-marca"
              fill={true}
              className={styles.imgAd}
            />
            <div className={styles.boxImage}>
              <Image
                src={promo?.imageUrl || "/prom.png"}
                alt="image-marca"
                fill={true}
              />
            </div>
          </Link>
        ))}
      </section>
      <section className={styles.rieles}>
        {secondRail.map((promo) => (
          <Link
            href={`/detalle-marca/${promo.id}`} // Usar `index` como respaldo si `promo.id` es undefined
            key={`second-${promo.id}`}
            className={`${styles.boxad} ${animate ? styles.animate : ""}`}
          >
            <Image
              src={promo?.image1 || "/prom.png"}
              alt="image-marca"
              fill={true}
              className={styles.imgAd}
            />
            <div className={styles.boxImage}>
              <Image
                src={promo?.imageUrl || "/prom.png"}
                alt="image-marca"
                fill={true}
              />
            </div>
          </Link>
        ))}
      </section>
      <section className={styles.rieles}>
        {thirdRail.map((promo) => (
          <Link
            href={`/detalle-marca/${promo.id}`} // Usar `index` como respaldo si `promo.id` es undefined
            key={`third-${promo.id}`} // Asegúrate de que este key sea único
            className={`${styles.boxad} ${animate ? styles.animate : ""}`}
          >
            <Image
              src={promo?.image1 || "/prom.png"}
              alt="image-marca"
              fill={true}
              className={styles.imgAd}
            />
            <div className={styles.boxImage}>
              <Image
                src={promo?.imageUrl || "/prom.png"}
                alt="image-marca"
                fill={true}
              />
            </div>
          </Link>
        ))}
      </section>
      <Tools onRandomize={randomizePromotions} />
    </section>
  );
}
