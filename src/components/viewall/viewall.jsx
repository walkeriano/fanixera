import React, { useState, useEffect } from "react";
import styles from "./viewall.module.css";
import usePromotions from "@/state/hook/usePromotions";
import Image from "next/image";
import Link from "next/link";
import Tools from "@/components/tools/tools";

export default function viewall({ selectedCategory }) {
  const { promotions, loading, error } = usePromotions(selectedCategory);
  const [shuffledPromotions, setShuffledPromotions] = useState([]);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Cuando las promociones cambian, las actualizamos en el estado local
    setShuffledPromotions(promotions);
  }, [promotions]);

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

  if (loading) return <p>Loading promotions...</p>;
  if (error) return <p>{error}</p>;

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
            href={`/detalle-marca/${promo.id}`}
            key={promo.id}
            className={`${styles.boxad} ${animate ? styles.animate : ""}`}
          >
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
          </Link>
        ))}
      </section>
      <section  className={styles.rieles}>
        {secondRail.map((promo) => (
          <Link
            href={`/detalle-marca/${promo.id}`}
            key={promo.id}
            className={`${styles.boxad} ${animate ? styles.animate : ""}`}
          >
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
          </Link>
        ))}
      </section>
      <section  className={styles.rieles}>
        {thirdRail.map((promo) => (
          <Link
            href={`/detalle-marca/${promo.id}`}
            key={promo.id}
            className={`${styles.boxad} ${animate ? styles.animate : ""}`}
          >
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
          </Link>
        ))}
      </section>
      <Tools onRandomize={randomizePromotions} />
    </section>
  );
}
