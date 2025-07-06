import styles from "./allResume.module.css";
import TotalBeneficios from "@/components/totalBeneficios/totalBeneficios";
import TotalUsers from "@/components/totalUsers/totalUsers";

export default function AllResume() {
  return (
    <section className={styles.containerViewport}>
      <section className={styles.titlePanel}>
        <h2>Panel de control</h2>
        <p>Herramientas de administrador</p>
      </section>
      <TotalBeneficios />
      <TotalUsers type="client" />
      <TotalUsers type="brand" />
    </section>
  );
}
