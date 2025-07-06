import styles from "./onlyBenefits.module.css";
import TotalBeneficios from "@/components/totalBeneficios/totalBeneficios";
import ConteoBenefits from "@/components/conteoBenefits/conteoBenefits";
import ListadoBenefits from "@/components/listadoBenefits/listadoBenefits";

export default function OnlyBenefits(){
    return(
        <section className={styles.containerGeneral}>
            <TotalBeneficios/>
            <ConteoBenefits/>
            <ListadoBenefits/>
        </section>
    )
}