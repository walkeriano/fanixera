import React, { useState } from "react";
import styles from "./tools.module.css";
import Image from "next/image";

export default function Tools({ onRandomize }) {
  const [isSpinning, setIsSpinning] = useState(false);

  const handleButtonClick = () => {
    setIsSpinning(true); // Iniciar la animación
    onRandomize(); // Ejecutar la función pasada como prop

    // Remover la clase de animación después de que termine
    setTimeout(() => setIsSpinning(false), 2000); // Duración de la animación: 1s
  };

  return (
    <section className={styles.btnSection}>
      <button onClick={handleButtonClick} className={styles.btnAleatorio}>
        <Image
          className={isSpinning ? styles.spin : ""}
          src="/window.svg"
          alt="icon-random"
          width={53}
          height={53}
        />
      </button>
    </section>
  );
}
