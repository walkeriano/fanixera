"use client";
import React, { useState, useEffect } from "react";
import styles from "./viewall.module.css";
import usePromotions from "@/state/hook/usePromotions";
import useSearchPromotions from "@/state/hook/useSearchPromotions";
import Image from "next/image";
import Link from "next/link";
import Tools from "@/components/tools/tools";
import LoadingBeneficios from "@/components/loadingBeneficios/loadingBeneficios";

export default function ViewAll({ selectedCategory, searchTerm }) {
  const { promotions, loading, error } = usePromotions(selectedCategory);
  const {
    filteredPromotions,
    loading: searchLoading,
    error: searchError,
  } = useSearchPromotions(searchTerm);

  const [shuffledPromotions, setShuffledPromotions] = useState([]);
  const [animate, setAnimate] = useState(false);
  const [numRails, setNumRails] = useState(3);

  // 📏 Calcular número de rieles según ancho
  useEffect(() => {
    const updateNumRails = () => {
      const width = window.innerWidth;
      if (width < 600) setNumRails(3);
      else if (width < 900) setNumRails(4);
      else if (width < 1200) setNumRails(5);
      else if (width < 1500) setNumRails(6);
      else if (width < 1800) setNumRails(7);
      else if (width < 2100) setNumRails(8);
      else setNumRails(8);
    };
    updateNumRails();
    window.addEventListener("resize", updateNumRails);
    return () => window.removeEventListener("resize", updateNumRails);
  }, []);

  // 🔄 Elegir entre promos normales o filtradas
  useEffect(() => {
    if (searchTerm.trim()) {
      setShuffledPromotions(filteredPromotions);
    } else {
      setShuffledPromotions(promotions);
    }
  }, [promotions, filteredPromotions, searchTerm]);

  // 🎲 Mezclar promociones
  const randomizePromotions = () => {
    setAnimate(true);
    const shuffled = [...shuffledPromotions];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setShuffledPromotions(shuffled);
    setTimeout(() => setAnimate(false), 500);
  };

  if (loading || searchLoading) return <LoadingBeneficios />;
  if (error || searchError) return <p>{error || searchError}</p>;
  if (!shuffledPromotions.length) return <p>No hay promociones disponibles</p>;

  // 📦 Distribuir promociones entre rieles de forma intercalada
  const groupedRails = Array.from({ length: numRails }, (_, railIndex) =>
    shuffledPromotions.filter((_, index) => index % numRails === railIndex)
  );

  return (
    <section className={styles.viewall}>
      {groupedRails.map((railPromos, railIndex) => (
        <section key={`rail-${railIndex}`} className={styles.rieles}>
          {railPromos.map((promo, cardIndex) => (
            <Link
              key={promo.id || `${railIndex}-${cardIndex}`}
              href={`/detalle-marca/${promo.id}`}
              className={`${styles.boxad} ${animate ? styles.animate : ""}`}
            >
              <Image
                src={promo?.image1 || "/prom.png"}
                alt="image-marca"
                fill
                className={styles.imgAd}
              />
              <div className={styles.boxImage}>
                <Image
                  src={promo?.imageUrl || "/prom.png"}
                  alt="logo-marca"
                  fill
                />
              </div>
            </Link>
          ))}
        </section>
      ))}
      <Tools onRandomize={randomizePromotions} />
    </section>
  );
}