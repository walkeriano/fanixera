import styles from "./listadoUsers.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faXmark,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import useUsersAll from "@/state/hook/useUsersAll";
import LoaderSpecific from "@/components/loaderSpecific/loaderSpecific";

export default function ListadoUsers({ type }) {
  const { promotions: users, loading } = useUsersAll();

  const filteredUsers = users.filter((user) => user.userType === type);

  return (
    <section className={styles.containerList}>
      <section className={styles.flexTitleSection}>
        <div>
          <p>Usuarios</p>
          <FontAwesomeIcon
            icon={faChevronDown}
            size="2x"
            className={styles.icon}
          />
        </div>
        <div>
          <p>Fecha</p>
          <FontAwesomeIcon
            icon={faChevronDown}
            size="2x"
            className={styles.icon}
          />
        </div>
        <div>
          <p>Acción</p>
          <FontAwesomeIcon
            icon={faChevronDown}
            size="2x"
            className={styles.icon}
          />
        </div>
      </section>
      <section className={styles.listAllItems}>
        {loading ? (
          <div className={styles.boxLoading}>
            <LoaderSpecific />
          </div>
        ) : filteredUsers.length === 0 ? (
          <p>No hay promociones.</p>
        ) : (
          filteredUsers.map((user) => (
            <section key={user.id} className={styles.itemList}>
              <section className={styles.imgBenefit}>
                <Image
                  src={user?.image1 || "/prom.png"}
                  alt="imagen-beneficio"
                  width={25}
                  height={25}
                />
                <h4>{user?.nombreMarca}</h4>
              </section>
              <p>{user?.createdAt.toDate().toLocaleString()}</p>
              <section className={styles.btnFlex}>
                <button>
                  <FontAwesomeIcon
                    icon={faXmark}
                    size="2x"
                    className={styles.icon}
                  />
                </button>
                <button>
                  Off
                  <FontAwesomeIcon
                    icon={faEye}
                    size="2x"
                    className={styles.icon}
                  />
                </button>
              </section>
            </section>
          ))
        )}
      </section>
    </section>
  );
}
