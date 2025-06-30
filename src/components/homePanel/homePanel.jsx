import styles from "./homePanel.module.css";
import HeaderSesion from "@/components/headerSesion/headerSesion";
import TotalBeneficios from "@/components/totalBeneficios/totalBeneficios";
import MenuPanel from "@/components/menuPanel/menuPanel";
export default function HomePanel() {
  return (
    <section className={styles.homePanelContainer}>
      <HeaderSesion />
      <section className={styles.flexContainer}>
        <TotalBeneficios/>
        <TotalBeneficios/>
        <TotalBeneficios/>
      </section>
      <MenuPanel />
    </section>
  );
}
