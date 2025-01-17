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

  useEffect(() => {
    // Establecer la primera categoría como activa por defecto si no hay una activa
    if (rutinas.length > 0 && !activeCategory) {
      setActiveCategory(rutinas[0].name);
    }
  }, [rutinas, activeCategory, setActiveCategory]); // No dependemos de `searchTerm` aquí.

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value); // Actualiza el estado local, pero no ejecuta la búsqueda
  };

  const handleSearchClick = () => {
    onSearch(searchTerm); // Ejecuta la búsqueda solo cuando se presiona el botón
  };

  // Restablecer la categoría activa cuando se borra el término de búsqueda
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setActiveCategory(rutinas[0]?.name || ""); // Establecer la primera categoría o un valor predeterminado
    }
  }, [searchTerm, setActiveCategory, rutinas]);

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
