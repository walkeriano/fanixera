import React, { useState, useEffect } from "react";
import styles from "./categories.module.css";
import Image from "next/image";
import useCategories from "@/state/hook/useCategories";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Categories({
  activeCategory,
  setActiveCategory,
  showSearch,
  onSearch,
}) {
  const { rutinas, loading, error } = useCategories();
  const [searchTerm, setSearchTerm] = useState("");

  // Establecer la primera categoría como activa por defecto
  useEffect(() => {
    if (rutinas.length > 0 && !activeCategory) {
      setActiveCategory(rutinas[0].name); // Establecer la primera categoría
    }
  }, [rutinas, activeCategory, setActiveCategory]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value); // Actualiza el estado local, pero no ejecuta la búsqueda
  };

  const handleSearchClick = () => {
    onSearch(searchTerm); // Ejecuta la búsqueda solo cuando se presiona el botón
  };

  if (loading) return <p>Loading</p>;
  if (error) return <p>{error}</p>;

  const handleCategoryClick = (categoryName) => {
    setActiveCategory(categoryName); // Actualizar categoría activa
  };

  return (
    <section className={styles.categoriesContainer}>
      {showSearch ? (
        <>
          {rutinas.map((rutina) => (
            <div
              key={rutina.id}
              className={`${styles.itemCategorie} ${
                activeCategory === rutina.name ? styles.active : ""
              }`}
              onClick={() => handleCategoryClick(rutina.name)}
            >
              <Image
                src={rutina?.image}
                alt="icon-menu"
                width={25}
                height={25}
              />
              <h3>{rutina?.name}</h3>
            </div>
          ))}
        </>
      ) : (
        <section className={styles.containerSearch}>
          <input
            type="text"
            placeholder="Escribir nombre..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button className={styles.searchBtn} onClick={handleSearchClick}>
            Buscar
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              size="2x"
              className={styles.icon}
            />
          </button>
        </section>
      )}
    </section>
  );
}
