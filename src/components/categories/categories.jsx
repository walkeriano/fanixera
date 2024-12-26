import React, { useState, useEffect } from "react";
import styles from "./categories.module.css";
import Image from "next/image";
import useCategories from "@/state/hook/useCategories";

export default function Categories({ activeCategory, setActiveCategory }) {
  const { rutinas, loading, error } = useCategories();

    // Establecer la primera categoría como activa por defecto
    useEffect(() => {
      if (rutinas.length > 0 && !activeCategory) {
        setActiveCategory(rutinas[0].name); // Establecer la primera categoría
      }
    }, [rutinas, activeCategory, setActiveCategory]);

  if (loading) return <p>Loading</p>;
  if (error) return <p>{error}</p>;

  const handleCategoryClick = (categoryName) => {
    setActiveCategory(categoryName); // Actualizar categoría activa
  };

  return (
    <section className={styles.categoriesContainer}>
      {rutinas.map((rutina) => (
        <div
          key={rutina.id}
          className={`${styles.itemCategorie} ${
            activeCategory === rutina.name ? styles.active : ""
          }`}
          onClick={() => handleCategoryClick(rutina.name)}
        >
          <Image src={rutina?.image} alt="icon-menu" width={30} height={30} />
          <h3>{rutina?.name}</h3>
        </div>
      ))}
    </section>
  );
}
