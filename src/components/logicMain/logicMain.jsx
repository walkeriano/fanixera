import React, { useContext } from "react";
import styles from "./logicMain.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import RegistroDirecto from "@/components/registroDirecto/registroDirecto";
import LoginDirecto from "@/components/loginDirecto/loginDirecto";
import AuthContext from "@/state/auth/auth-context";

export default function LogicMain() {
  const { user } = useContext(AuthContext);

  return (
    <section className={styles.logicMainContainer}>
      <section className={styles.titleSection}>
        <h4>Usuario beneficiario</h4>
        <div className={styles.boxSectionIcon}>
          <FontAwesomeIcon
            icon={faShieldHalved}
            size="2x"
            className={styles.icon}
          />
        </div>
      </section>
      <section className={styles.containerLogic}>
        {user ? <LoginDirecto /> : <RegistroDirecto /> }
      </section>
    </section>
  );
}
