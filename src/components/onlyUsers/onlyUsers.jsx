import styles from "./onlyUsers.module.css";
import TotalUsers from "@/components/totalUsers/totalUsers";
import ConteoBenefits from "@/components/conteoBenefits/conteoBenefits";
import ListadoUsers from "@/components/listadoUsers/listadoUsers";

export default function OnlyUsers() {
  return (
    <section className={styles.containerGeneral}>
      <TotalUsers />
      <ConteoBenefits />
      <ListadoUsers type="brand" />
    </section>
  );
}
